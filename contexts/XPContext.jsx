"use client"

import { createContext, useContext, useState, useEffect } from "react"

const XPContext = createContext({})

export function XPProvider({ children }) {
  const [xpData, setXpData] = useState({
    totalXP: 2450,
    level: 12,
    streak: 7,
    badges: 15,
    completedLessons: 48,
    recentActivities: [],
  })

  // XP calculation functions
  const calculateLevel = (xp) => {
    return Math.floor(xp / 200) + 1
  }

  const getXPForNextLevel = (currentLevel) => {
    return currentLevel * 200
  }

  const addXP = (amount, activity) => {
    setXpData((prev) => {
      const newTotalXP = prev.totalXP + amount
      const newLevel = calculateLevel(newTotalXP)
      const leveledUp = newLevel > prev.level

      const newActivity = {
        id: Date.now(),
        type: activity.type,
        description: activity.description,
        xp: amount,
        timestamp: new Date(),
        levelUp: leveledUp,
      }

      return {
        ...prev,
        totalXP: newTotalXP,
        level: newLevel,
        recentActivities: [newActivity, ...prev.recentActivities.slice(0, 9)], // Keep last 10 activities
      }
    })

    // Save to localStorage
    const updatedData = {
      ...xpData,
      totalXP: xpData.totalXP + amount,
      level: calculateLevel(xpData.totalXP + amount),
    }
    localStorage.setItem("studentXP", JSON.stringify(updatedData))
  }

  const updateStreak = (newStreak) => {
    setXpData((prev) => ({
      ...prev,
      streak: newStreak,
    }))
  }

  const addBadge = (badgeInfo) => {
    setXpData((prev) => ({
      ...prev,
      badges: prev.badges + 1,
      recentActivities: [
        {
          id: Date.now(),
          type: "badge",
          description: `Earned badge: ${badgeInfo.title}`,
          xp: badgeInfo.xp || 0,
          timestamp: new Date(),
        },
        ...prev.recentActivities.slice(0, 9),
      ],
    }))
  }

  const completeLesson = (lessonInfo) => {
    const xpEarned = lessonInfo.score >= 90 ? 150 : lessonInfo.score >= 80 ? 120 : lessonInfo.score >= 70 ? 100 : 80

    setXpData((prev) => ({
      ...prev,
      completedLessons: prev.completedLessons + 1,
    }))

    addXP(xpEarned, {
      type: "lesson",
      description: `Completed ${lessonInfo.title} with ${lessonInfo.score}% score`,
    })
  }

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("studentXP")
    if (savedData) {
      setXpData(JSON.parse(savedData))
    }
  }, [])

  const value = {
    xpData,
    addXP,
    updateStreak,
    addBadge,
    completeLesson,
    calculateLevel,
    getXPForNextLevel,
  }

  return <XPContext.Provider value={value}>{children}</XPContext.Provider>
}

export function useXP() {
  const context = useContext(XPContext)
  if (context === undefined) {
    throw new Error("useXP must be used within an XPProvider")
  }
  return context
}

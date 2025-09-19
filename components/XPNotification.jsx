"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Zap, Trophy, Star, X } from "lucide-react"

export function XPNotification({ notification, onClose }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (notification) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [notification, onClose])

  if (!notification) return null

  const getIcon = () => {
    switch (notification.type) {
      case "xp":
        return <Zap className="w-5 h-5 text-secondary" />
      case "level":
        return <Trophy className="w-5 h-5 text-primary" />
      case "badge":
        return <Star className="w-5 h-5 text-yellow-500" />
      default:
        return <Zap className="w-5 h-5 text-secondary" />
    }
  }

  const getTitle = () => {
    switch (notification.type) {
      case "xp":
        return `+${notification.xp} XP Earned!`
      case "level":
        return `Level Up! Level ${notification.level}`
      case "badge":
        return `New Badge Earned!`
      default:
        return "Achievement Unlocked!"
    }
  }

  return (
    <div
      className={cn(
        "fixed top-20 right-4 z-50 transition-all duration-300 transform",
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
      )}
    >
      <Card className="w-80 border-2 shadow-xl bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                {getIcon()}
              </div>
              <div>
                <h4 className="font-bold text-sm">{getTitle()}</h4>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(onClose, 300)
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {notification.type === "level" && (
            <div className="mt-3 p-2 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Congratulations on reaching Level {notification.level}!</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

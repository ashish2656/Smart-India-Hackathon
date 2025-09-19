"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { Trophy, Star, Play, BookOpen, Target, Zap, Award, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import StudentNavigation from "@/components/StudentNavigation"
import PageTransition from "@/components/PageTransition"
import { useXP } from "@/contexts/XPContext"

export default function StudentDashboard() {
  const [selectedSubject, setSelectedSubject] = useState("all")
  const { xp, level } = useXP()

  // Mock student data
  const studentData = {
    name: "Alex Johnson",
    grade: 5,
    xp: xp,
    level: level,
    xpToNextLevel: 550,
    streak: 7,
    badges: 15,
    completedLessons: 48,
    totalLessons: 120,
  }

  const subjects = [
    { id: "math", name: "Math", icon: "🔢", color: "bg-blue-500", progress: 75, xp: 850 },
    { id: "science", name: "Science", icon: "🔬", color: "bg-green-500", progress: 60, xp: 720 },
    { id: "english", name: "English", icon: "📚", color: "bg-purple-500", progress: 80, xp: 920 },
    { id: "environment", name: "Environment", icon: "🌱", color: "bg-orange-500", progress: 45, xp: 560 },
  ]

  const recentGames = [
    { id: 1, title: "Math Monsters", subject: "Math", xp: 120, completed: true, difficulty: "Easy" },
    { id: 2, title: "Science Lab", subject: "Science", xp: 150, completed: true, difficulty: "Medium" },
    { id: 3, title: "Word Builder", subject: "English", xp: 100, completed: false, difficulty: "Easy" },
    { id: 4, title: "Eco Warriors", subject: "Environment", xp: 180, completed: false, difficulty: "Hard" },
  ]

  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first lesson", icon: Trophy, earned: true },
    { id: 2, title: "Math Wizard", description: "Score 100% in 5 math games", icon: Star, earned: true },
    { id: 3, title: "Speed Learner", description: "Complete 3 lessons in one day", icon: Zap, earned: true },
    { id: 4, title: "Streak Master", description: "Maintain a 7-day streak", icon: Target, earned: true },
    { id: 5, title: "Knowledge Seeker", description: "Complete 50 lessons", icon: BookOpen, earned: false },
    { id: 6, title: "Perfect Score", description: "Get 100% in all subjects", icon: Award, earned: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StudentNavigation />

      <PageTransition className="md:ml-64">
        <div className="container px-4 mx-auto py-8 space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Student Info Card */}
            <Card className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl animate-bounce-gentle">
                    🎓
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Welcome back, {studentData.name}!</h2>
                    <p className="text-muted-foreground">
                      Grade {studentData.grade} • Level {studentData.level}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Level Progress</span>
                      <span>
                        {studentData.xp - (studentData.level - 1) * 200}/{studentData.xpToNextLevel} XP
                      </span>
                    </div>
                    <Progress
                      value={((studentData.xp - (studentData.level - 1) * 200) / studentData.xpToNextLevel) * 100}
                      className="h-3"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-secondary">{studentData.streak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">{studentData.badges}</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-cyan-500 rounded-2xl flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-accent">{studentData.completedLessons}</div>
                <div className="text-sm text-muted-foreground">Lessons Done</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-4 to-green-500 rounded-2xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-chart-4">
                  {Math.round((studentData.completedLessons / studentData.totalLessons) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </Card>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Your Subjects</h3>
              <Button asChild variant="outline">
                <Link href="/student/games">View All Games</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Card
                  key={subject.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto rounded-3xl flex items-center justify-center text-3xl",
                        subject.color,
                        "group-hover:animate-bounce-gentle",
                      )}
                    >
                      {subject.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{subject.name}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                          <Zap className="w-3 h-3" />
                          {subject.xp} XP earned
                        </div>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground bg-transparent"
                    >
                      <Link href={`/student/games?subject=${subject.id}`}>
                        <Play className="w-4 h-4 mr-2" />
                        Play Games
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Games & Achievements */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Games */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Continue Learning
                </CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentGames.map((game) => (
                  <div
                    key={game.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-medium">{game.title}</h5>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{game.subject}</span>
                          <Badge variant="secondary" className="text-xs">
                            {game.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Zap className="w-3 h-3 text-secondary" />
                        {game.xp} XP
                      </div>
                      {game.completed ? (
                        <Badge variant="outline" className="text-xs">
                          Completed
                        </Badge>
                      ) : (
                        <Button size="sm" variant="outline">
                          Continue
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Achievements
                </CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.slice(0, 4).map((achievement) => (
                  <div
                    key={achievement.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg transition-colors",
                      achievement.earned ? "bg-secondary/10 border border-secondary/20" : "bg-muted/30",
                    )}
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        achievement.earned
                          ? "bg-gradient-to-br from-secondary to-yellow-500"
                          : "bg-muted-foreground/20",
                      )}
                    >
                      <achievement.icon
                        className={cn("w-5 h-5", achievement.earned ? "text-white" : "text-muted-foreground")}
                      />
                    </div>
                    <div className="flex-1">
                      <h5
                        className={cn("font-medium", achievement.earned ? "text-foreground" : "text-muted-foreground")}
                      >
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.earned && <Badge className="bg-secondary text-secondary-foreground">Earned</Badge>}
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/student/achievements">View All Achievements</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Daily Challenge */}
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Daily Challenge</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete today's challenge to earn bonus XP and maintain your streak!
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>12 hours left</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span>200 Bonus XP</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce-gentle">🎯</div>
                  <Button size="lg" className="h-12 px-8">
                    Start Challenge
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    </div>
  )
}

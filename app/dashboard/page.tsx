"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FunHeader } from "@/components/ui/fun-header"
import { GameCard } from "@/components/ui/game-card"
import { GradeSelector } from "@/components/ui/grade-selector"
import { cn } from "@/lib/utils"
import { Calendar, Clock, Trophy, Target, BookOpen, Star, Play, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedGrade, setSelectedGrade] = useState<number>(3)

  // Mock student data
  const studentData = {
    name: "Priya Sharma",
    grade: 3,
    totalStars: 47,
    weeklyGoal: 50,
    streak: 5,
    level: "Math Explorer",
    avatar: "👧",
  }

  const recentGames = [
    {
      id: 1,
      title: "Number Counting Fun",
      description: "Count animals and objects in the farm",
      grade: 3,
      subject: "Math",
      difficulty: "easy" as const,
      stars: 3,
      imageUrl: "/cartoon-farm-animals-counting.jpg",
    },
    {
      id: 2,
      title: "Letter Sound Match",
      description: "Match letters with their sounds",
      grade: 3,
      subject: "English",
      difficulty: "medium" as const,
      stars: 2,
      imageUrl: "/colorful-alphabet-letters.jpg",
    },
    {
      id: 3,
      title: "Plant Life Cycle",
      description: "Learn how plants grow from seeds",
      grade: 3,
      subject: "Science",
      difficulty: "easy" as const,
      stars: 3,
      imageUrl: "/plant-growing-stages-cartoon.jpg",
    },
  ]

  const achievements = [
    { title: "Math Star", description: "Completed 10 math games", icon: "🌟", unlocked: true },
    { title: "Reading Hero", description: "Read 5 stories", icon: "📚", unlocked: true },
    { title: "Science Explorer", description: "Finished science module", icon: "🔬", unlocked: false },
    { title: "Perfect Week", description: "7 days learning streak", icon: "🏆", unlocked: false },
  ]

  const todaysTasks = [
    { title: "Complete 2 Math Games", completed: true, points: 10 },
    { title: "Read 1 Story", completed: true, points: 5 },
    { title: "Practice Letter Writing", completed: false, points: 8 },
    { title: "Science Quiz", completed: false, points: 12 },
  ]

  const handlePlayGame = (gameId: number) => {
    // Navigate to game player
    console.log(`Playing game ${gameId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <FunHeader currentPage="dashboard" studentName={studentData.name} grade={studentData.grade} />

      <div className="container px-4 py-8 mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="text-6xl animate-bounce-gentle">{studentData.avatar}</div>
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-balance">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {studentData.name}!
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">Ready for another fun learning day?</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{studentData.totalStars}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{studentData.weeklyGoal}</div>
              <div className="text-sm text-muted-foreground">Weekly Goal</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">{studentData.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-bold text-primary mb-1">{studentData.level}</div>
              <div className="text-sm text-muted-foreground">Current Level</div>
            </CardContent>
          </Card>
        </div>

        {/* Grade Selection */}
        <Card className="border-2 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Choose Your Grade Level</CardTitle>
          </CardHeader>
          <CardContent>
            <GradeSelector selectedGrade={selectedGrade} onGradeSelect={setSelectedGrade} className="justify-center" />
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Today's Tasks */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                  <Clock className="w-6 h-6 text-primary" />
                  Today's Learning Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todaysTasks.map((task, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300",
                      task.completed
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-muted/50 border-border hover:border-primary/50",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                          task.completed
                            ? "bg-green-500 border-green-500"
                            : "border-muted-foreground hover:border-primary",
                        )}
                      >
                        {task.completed && <div className="w-3 h-3 bg-white rounded-full" />}
                      </div>
                      <span className={cn("font-medium", task.completed && "line-through")}>{task.title}</span>
                    </div>
                    <Badge variant={task.completed ? "default" : "secondary"} className="rounded-full">
                      +{task.points} points
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Games */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Continue Learning</h2>
                <Button asChild variant="outline" className="rounded-2xl bg-transparent">
                  <Link href="/games">
                    View All Games
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentGames.map((game) => (
                  <GameCard
                    key={game.id}
                    title={game.title}
                    description={game.description}
                    grade={game.grade}
                    subject={game.subject}
                    difficulty={game.difficulty}
                    stars={game.stars}
                    imageUrl={game.imageUrl}
                    onPlay={() => handlePlayGame(game.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <Card className="border-2 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {studentData.totalStars}/{studentData.weeklyGoal}
                  </div>
                  <Progress
                    value={(studentData.totalStars / studentData.weeklyGoal) * 100}
                    className="h-3 rounded-full"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    {studentData.weeklyGoal - studentData.totalStars} stars to reach your goal!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="border-2 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-2xl transition-all duration-300",
                      achievement.unlocked
                        ? "bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                        : "bg-muted/50 opacity-60",
                    )}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                    {achievement.unlocked && (
                      <Badge variant="default" className="text-xs rounded-full">
                        Unlocked!
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full h-12 rounded-2xl font-medium">
                  <Link href="/games">
                    <Play className="w-5 h-5 mr-2" />
                    Play Random Game
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 rounded-2xl font-medium bg-transparent">
                  <Link href="/games?subject=math">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Practice Math
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

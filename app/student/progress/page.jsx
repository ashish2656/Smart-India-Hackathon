"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Trophy,
  Star,
  Target,
  BookOpen,
  Zap,
  Award,
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Clock,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts"

export default function StudentProgress() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week")
  const [selectedSubject, setSelectedSubject] = useState("all")

  // Mock student progress data
  const studentData = {
    name: "Alex Johnson",
    level: 12,
    xp: 2450,
    xpToNextLevel: 550,
    totalXP: 3000,
    streak: 7,
    longestStreak: 15,
    badges: 15,
    completedLessons: 48,
    totalLessons: 120,
    averageScore: 85,
    timeSpent: 45, // hours
  }

  const weeklyXP = [
    { day: "Mon", xp: 120, lessons: 3 },
    { day: "Tue", xp: 180, lessons: 4 },
    { day: "Wed", xp: 150, lessons: 3 },
    { day: "Thu", xp: 200, lessons: 5 },
    { day: "Fri", xp: 160, lessons: 4 },
    { day: "Sat", xp: 140, lessons: 3 },
    { day: "Sun", xp: 100, lessons: 2 },
  ]

  const subjectProgress = [
    {
      subject: "Math",
      progress: 75,
      xp: 850,
      lessons: 18,
      totalLessons: 24,
      averageScore: 88,
      color: "from-blue-500 to-blue-600",
      recentActivity: "2 hours ago",
    },
    {
      subject: "Science",
      progress: 60,
      xp: 720,
      lessons: 15,
      totalLessons: 25,
      averageScore: 82,
      color: "from-green-500 to-green-600",
      recentActivity: "1 day ago",
    },
    {
      subject: "English",
      progress: 80,
      xp: 920,
      lessons: 20,
      totalLessons: 25,
      averageScore: 90,
      color: "from-purple-500 to-purple-600",
      recentActivity: "3 hours ago",
    },
    {
      subject: "Environment",
      progress: 45,
      xp: 560,
      lessons: 11,
      totalLessons: 24,
      averageScore: 78,
      color: "from-orange-500 to-orange-600",
      recentActivity: "2 days ago",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: Trophy,
      earned: true,
      earnedDate: "2 weeks ago",
      xp: 50,
    },
    {
      id: 2,
      title: "Math Wizard",
      description: "Score 100% in 5 math games",
      icon: Star,
      earned: true,
      earnedDate: "1 week ago",
      xp: 100,
    },
    {
      id: 3,
      title: "Speed Learner",
      description: "Complete 3 lessons in one day",
      icon: Zap,
      earned: true,
      earnedDate: "3 days ago",
      xp: 75,
    },
    {
      id: 4,
      title: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: Target,
      earned: true,
      earnedDate: "Today",
      xp: 150,
    },
    {
      id: 5,
      title: "Knowledge Seeker",
      description: "Complete 50 lessons",
      icon: BookOpen,
      earned: false,
      progress: 96, // 48/50
      xp: 200,
    },
    {
      id: 6,
      title: "Perfect Score",
      description: "Get 100% in all subjects",
      icon: Award,
      earned: false,
      progress: 75,
      xp: 300,
    },
  ]

  const levelData = [
    {
      name: "Level Progress",
      value: ((studentData.xp - (studentData.level - 1) * 200) / studentData.xpToNextLevel) * 100,
      fill: "hsl(var(--primary))",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/student/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduHub</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/student/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/student/games" className="text-sm text-muted-foreground hover:text-foreground">
                  Games
                </Link>
                <Link href="/student/progress" className="text-sm font-medium text-primary">
                  Progress
                </Link>
                <Link href="/student/rewards" className="text-sm text-muted-foreground hover:text-foreground">
                  Rewards
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{studentData.xp} XP</span>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
            <p className="text-muted-foreground">Track your learning journey and achievements</p>
          </div>
          <Link href="/student/dashboard">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Level Progress & Stats */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Level Progress */}
          <Card className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Level {studentData.level}</CardTitle>
              <CardDescription>Keep learning to level up!</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="relative w-32 h-32 mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={levelData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="hsl(var(--primary))" />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{Math.round(levelData[0].value)}%</div>
                    <div className="text-xs text-muted-foreground">to next level</div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>XP Progress</span>
                  <span>
                    {studentData.xp - (studentData.level - 1) * 200}/{studentData.xpToNextLevel}
                  </span>
                </div>
                <Progress value={levelData[0].value} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {studentData.xpToNextLevel - (studentData.xp - (studentData.level - 1) * 200)} XP to Level{" "}
                  {studentData.level + 1}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-secondary to-yellow-500 rounded-2xl flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-secondary">{studentData.streak}</div>
              <div className="text-sm text-muted-foreground">Current Streak</div>
              <div className="text-xs text-muted-foreground mt-1">Best: {studentData.longestStreak} days</div>
            </Card>

            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-purple-500 rounded-2xl flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{studentData.badges}</div>
              <div className="text-sm text-muted-foreground">Badges Earned</div>
              <div className="text-xs text-muted-foreground mt-1">Keep going!</div>
            </Card>

            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-accent to-cyan-500 rounded-2xl flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-accent">{studentData.completedLessons}</div>
              <div className="text-sm text-muted-foreground">Lessons Done</div>
              <div className="text-xs text-muted-foreground mt-1">
                {Math.round((studentData.completedLessons / studentData.totalLessons) * 100)}% complete
              </div>
            </Card>

            <Card className="text-center p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-4 to-green-500 rounded-2xl flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-chart-4">{studentData.timeSpent}h</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </Card>
          </div>
        </div>

        {/* XP Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  XP Progress
                </CardTitle>
                <CardDescription>Your learning activity over time</CardDescription>
              </div>
              <select
                className="px-3 py-1 border border-input bg-background rounded-md text-sm"
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyXP}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="xp" stroke="hsl(var(--primary))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Subject Progress</h3>
            <select
              className="px-3 py-1 border border-input bg-background rounded-md text-sm"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">All Subjects</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="environment">Environment</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {subjectProgress
              .filter((subject) => selectedSubject === "all" || subject.subject.toLowerCase() === selectedSubject)
              .map((subject) => (
                <Card key={subject.subject} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold",
                            subject.color,
                          )}
                        >
                          {subject.subject[0]}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{subject.subject}</CardTitle>
                          <CardDescription>
                            {subject.lessons}/{subject.totalLessons} lessons completed
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {subject.averageScore}% avg
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{subject.progress}%</span>
                      </div>
                      <Progress value={subject.progress} className="h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span>{subject.xp} XP earned</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{subject.recentActivity}</span>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href={`/student/games?subject=${subject.subject.toLowerCase()}`}>Continue Learning</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Achievements
            </CardTitle>
            <CardDescription>Your learning milestones and badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={cn(
                    "p-4 rounded-lg border transition-all duration-300",
                    achievement.earned
                      ? "bg-gradient-to-br from-secondary/10 to-yellow-500/10 border-secondary/30 hover:shadow-lg"
                      : "bg-muted/30 border-muted hover:bg-muted/50",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center",
                        achievement.earned
                          ? "bg-gradient-to-br from-secondary to-yellow-500"
                          : "bg-muted-foreground/20",
                      )}
                    >
                      <achievement.icon
                        className={cn("w-6 h-6", achievement.earned ? "text-white" : "text-muted-foreground")}
                      />
                    </div>
                    <div className="flex-1">
                      <h5
                        className={cn(
                          "font-medium mb-1",
                          achievement.earned ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs">
                          <Zap className="w-3 h-3 text-secondary" />
                          <span>{achievement.xp} XP</span>
                        </div>
                        {achievement.earned ? (
                          <Badge className="bg-secondary text-secondary-foreground text-xs">
                            {achievement.earnedDate}
                          </Badge>
                        ) : achievement.progress ? (
                          <div className="text-xs text-muted-foreground">{achievement.progress}% complete</div>
                        ) : (
                          <div className="text-xs text-muted-foreground">Not earned</div>
                        )}
                      </div>
                      {!achievement.earned && achievement.progress && (
                        <Progress value={achievement.progress} className="h-1 mt-2" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

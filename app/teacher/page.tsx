"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FunHeader } from "@/components/ui/fun-header"
import {
  Users,
  BookOpen,
  Trophy,
  TrendingUp,
  Calendar,
  Star,
  Target,
  Download,
  Filter,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function TeacherPage() {
  const [selectedClass, setSelectedClass] = useState("Grade 3A")
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week")
  const [expandedStudent, setExpandedStudent] = useState<number | null>(null)

  // Mock teacher data
  const teacherData = {
    name: "Mrs. Sunita Devi",
    school: "Government Primary School, Rajpur",
    classes: ["Grade 3A", "Grade 3B", "Grade 4A"],
    totalStudents: 45,
  }

  // Mock class performance data
  const classStats = {
    totalStudents: 15,
    activeToday: 12,
    averageProgress: 78,
    totalGamesPlayed: 234,
    averageStars: 3.2,
    weeklyGoalCompletion: 85,
  }

  // Mock student data
  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      avatar: "👧",
      grade: 3,
      totalStars: 47,
      weeklyGoal: 50,
      progress: 94,
      lastActive: "2 hours ago",
      strongSubjects: ["Math", "Science"],
      needsHelp: ["English"],
      gamesPlayed: 12,
      streak: 5,
    },
    {
      id: 2,
      name: "Rahul Kumar",
      avatar: "👦",
      grade: 3,
      totalStars: 32,
      weeklyGoal: 40,
      progress: 80,
      lastActive: "1 day ago",
      strongSubjects: ["English"],
      needsHelp: ["Math", "Science"],
      gamesPlayed: 8,
      streak: 3,
    },
    {
      id: 3,
      name: "Anita Patel",
      avatar: "👧",
      grade: 3,
      totalStars: 55,
      weeklyGoal: 50,
      progress: 110,
      lastActive: "30 minutes ago",
      strongSubjects: ["Math", "Science", "English"],
      needsHelp: [],
      gamesPlayed: 15,
      streak: 7,
    },
    {
      id: 4,
      name: "Vikram Singh",
      avatar: "👦",
      grade: 3,
      totalStars: 28,
      weeklyGoal: 45,
      progress: 62,
      lastActive: "3 hours ago",
      strongSubjects: ["Environmental Studies"],
      needsHelp: ["Math", "English"],
      gamesPlayed: 6,
      streak: 2,
    },
    {
      id: 5,
      name: "Meera Gupta",
      avatar: "👧",
      grade: 3,
      totalStars: 41,
      weeklyGoal: 45,
      progress: 91,
      lastActive: "1 hour ago",
      strongSubjects: ["Science", "Environmental Studies"],
      needsHelp: ["Math"],
      gamesPlayed: 10,
      streak: 4,
    },
  ]

  // Chart data
  const weeklyProgressData = [
    { day: "Mon", students: 12, games: 45 },
    { day: "Tue", students: 14, games: 52 },
    { day: "Wed", students: 13, games: 48 },
    { day: "Thu", students: 15, games: 58 },
    { day: "Fri", students: 11, games: 42 },
    { day: "Sat", students: 8, games: 28 },
    { day: "Sun", students: 6, games: 18 },
  ]

  const subjectPerformanceData = [
    { subject: "Math", average: 85, color: "#3b82f6" },
    { subject: "Science", average: 78, color: "#10b981" },
    { subject: "English", average: 72, color: "#8b5cf6" },
    { subject: "Environment", average: 88, color: "#f59e0b" },
  ]

  const difficultyDistribution = [
    { name: "Easy", value: 45, color: "#10b981" },
    { name: "Medium", value: 35, color: "#f59e0b" },
    { name: "Hard", value: 20, color: "#ef4444" },
  ]

  const toggleStudentDetails = (studentId: number) => {
    setExpandedStudent(expandedStudent === studentId ? null : studentId)
  }

  return (
    <div className="min-h-screen bg-background">
      <FunHeader currentPage="teacher" />

      <div className="container px-4 py-8 mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-balance">
              Teacher{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Welcome back, {teacherData.name} • {teacherData.school}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 rounded-2xl border-2 border-border bg-background font-medium"
            >
              {teacherData.classes.map((className) => (
                <option key={className} value={className}>
                  {className}
                </option>
              ))}
            </select>

            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 rounded-2xl border-2 border-border bg-background font-medium"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
            </select>

            <Button variant="outline" className="rounded-2xl bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{classStats.totalStudents}</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
              <div className="text-xs text-green-600 mt-1">{classStats.activeToday} active today</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-secondary mb-1">{classStats.averageProgress}%</div>
              <div className="text-sm text-muted-foreground">Average Progress</div>
              <div className="text-xs text-green-600 mt-1">+5% from last week</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-accent mb-1">{classStats.totalGamesPlayed}</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
              <div className="text-xs text-green-600 mt-1">This week</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all duration-300 rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{classStats.averageStars}</div>
              <div className="text-sm text-muted-foreground">Average Stars</div>
              <div className="text-xs text-green-600 mt-1">Per student</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Weekly Activity Chart */}
          <Card className="border-2 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Weekly Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#8b5cf6" name="Active Students" />
                  <Bar dataKey="games" fill="#10b981" name="Games Played" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Subject Performance */}
          <Card className="border-2 rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Subject Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformanceData.map((subject) => (
                  <div key={subject.subject} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{subject.subject}</span>
                      <span className="text-sm text-muted-foreground">{subject.average}%</span>
                    </div>
                    <Progress value={subject.average} className="h-3 rounded-full" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Difficulty Distribution */}
        <Card className="border-2 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Game Difficulty Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={difficultyDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {difficultyDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="space-y-4">
                {difficultyDistribution.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: item.color }} />
                    <span className="font-medium">{item.name}</span>
                    <span className="text-muted-foreground ml-auto">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Progress Table */}
        <Card className="border-2 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Individual Student Progress
              </div>
              <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="border-2 border-border rounded-2xl overflow-hidden">
                  <div
                    className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleStudentDetails(student.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{student.avatar}</div>
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">Grade {student.grade}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{student.totalStars}</div>
                          <div className="text-xs text-muted-foreground">Stars</div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary">{student.progress}%</div>
                          <div className="text-xs text-muted-foreground">Progress</div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">{student.streak}</div>
                          <div className="text-xs text-muted-foreground">Day Streak</div>
                        </div>

                        <div className="text-center">
                          <Badge
                            variant={student.lastActive.includes("hour") ? "default" : "secondary"}
                            className="rounded-full"
                          >
                            {student.lastActive}
                          </Badge>
                        </div>

                        {expandedStudent === student.id ? (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedStudent === student.id && (
                    <div className="px-4 pb-4 border-t bg-muted/20">
                      <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600">Strong Subjects</h4>
                          <div className="flex flex-wrap gap-2">
                            {student.strongSubjects.map((subject) => (
                              <Badge key={subject} variant="default" className="rounded-full text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2 text-orange-600">Needs Help With</h4>
                          <div className="flex flex-wrap gap-2">
                            {student.needsHelp.length > 0 ? (
                              student.needsHelp.map((subject) => (
                                <Badge key={subject} variant="destructive" className="rounded-full text-xs">
                                  {subject}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-sm text-muted-foreground">All subjects going well!</span>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Weekly Goal</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>
                                {student.totalStars}/{student.weeklyGoal} stars
                              </span>
                              <span>{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button className="h-16 rounded-2xl font-medium">
            <BookOpen className="w-5 h-5 mr-2" />
            Assign Homework
          </Button>
          <Button variant="outline" className="h-16 rounded-2xl font-medium bg-transparent">
            <Users className="w-5 h-5 mr-2" />
            Message Parents
          </Button>
          <Button variant="outline" className="h-16 rounded-2xl font-medium bg-transparent">
            <Trophy className="w-5 h-5 mr-2" />
            Create Challenge
          </Button>
          <Button variant="outline" className="h-16 rounded-2xl font-medium bg-transparent">
            <Download className="w-5 h-5 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  )
}

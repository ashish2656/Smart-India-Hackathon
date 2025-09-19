"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  AlertCircle,
  Plus,
  Calendar,
  Target,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import TeacherNavigation from "@/components/TeacherNavigation"
import PageTransition from "@/components/PageTransition"

export default function TeacherDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week")

  const teacherData = {
    name: "Sarah Johnson",
    school: "Rural Elementary School",
    subject: "Mathematics",
    totalStudents: 45,
    activeStudents: 38,
    completedAssignments: 156,
    averageScore: 78,
  }

  const weeklyProgress = [
    { day: "Mon", students: 32, assignments: 18, avgScore: 75 },
    { day: "Tue", students: 35, assignments: 22, avgScore: 78 },
    { day: "Wed", students: 38, assignments: 25, avgScore: 82 },
    { day: "Thu", students: 34, assignments: 20, avgScore: 76 },
    { day: "Fri", students: 40, assignments: 28, avgScore: 85 },
    { day: "Sat", students: 25, assignments: 15, avgScore: 80 },
    { day: "Sun", students: 20, assignments: 12, avgScore: 77 },
  ]

  const subjectPerformance = [
    { subject: "Addition", score: 85, students: 42 },
    { subject: "Subtraction", score: 78, students: 40 },
    { subject: "Multiplication", score: 72, students: 38 },
    { subject: "Division", score: 68, students: 35 },
    { subject: "Fractions", score: 65, students: 32 },
  ]

  const recentStudents = [
    {
      id: 1,
      name: "Alex Kumar",
      grade: 5,
      lastActive: "2 hours ago",
      progress: 85,
      xp: 2450,
      status: "active",
      recentScore: 92,
    },
    {
      id: 2,
      name: "Priya Sharma",
      grade: 4,
      lastActive: "1 day ago",
      progress: 72,
      xp: 1890,
      status: "inactive",
      recentScore: 78,
    },
    {
      id: 3,
      name: "Raj Patel",
      grade: 5,
      lastActive: "30 min ago",
      progress: 91,
      xp: 3200,
      status: "active",
      recentScore: 95,
    },
    {
      id: 4,
      name: "Maya Singh",
      grade: 4,
      lastActive: "3 hours ago",
      progress: 68,
      xp: 1650,
      status: "struggling",
      recentScore: 65,
    },
    {
      id: 5,
      name: "Arjun Gupta",
      grade: 5,
      lastActive: "1 hour ago",
      progress: 79,
      xp: 2100,
      status: "active",
      recentScore: 88,
    },
  ]

  const upcomingTasks = [
    { id: 1, title: "Math Quiz - Fractions", dueDate: "Tomorrow", students: 32, completed: 18 },
    { id: 2, title: "Weekly Practice Set", dueDate: "3 days", students: 45, completed: 28 },
    { id: 3, title: "Problem Solving Challenge", dueDate: "1 week", students: 38, completed: 5 },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "inactive":
        return "bg-yellow-500"
      case "struggling":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active"
      case "inactive":
        return "Inactive"
      case "struggling":
        return "Needs Help"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TeacherNavigation />

      <PageTransition className="md:ml-64">
        <div className="container px-4 mx-auto py-8 space-y-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-accent/10 border-2">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl">
                    👩‍🏫
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Welcome, {teacherData.name}!</h2>
                    <p className="text-muted-foreground">
                      {teacherData.school} • {teacherData.subject}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{teacherData.totalStudents}</div>
                      <div className="text-sm text-muted-foreground">Total Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{teacherData.activeStudents}</div>
                      <div className="text-sm text-muted-foreground">Active Today</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-1 to-purple-500 rounded-2xl flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-chart-1">{teacherData.completedAssignments}</div>
                <div className="text-sm text-muted-foreground">Assignments</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-2 to-yellow-500 rounded-2xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-chart-2">{teacherData.averageScore}%</div>
                <div className="text-sm text-muted-foreground">Avg Score</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-3 to-cyan-500 rounded-2xl flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-chart-3">
                  {Math.round((teacherData.activeStudents / teacherData.totalStudents) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Engagement</div>
              </Card>

              <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-chart-4 to-green-500 rounded-2xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-chart-4">12</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Weekly Activity
                    </CardTitle>
                    <CardDescription>Student engagement and assignment completion</CardDescription>
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
                  <LineChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="students" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                    <Line type="monotone" dataKey="assignments" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Subject Performance
                </CardTitle>
                <CardDescription>Average scores by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={subjectPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="hsl(var(--chart-3))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Student Overview
                    </CardTitle>
                    <CardDescription>Recent student activity and performance</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/teacher/students">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center font-medium">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h5 className="font-medium">{student.name}</h5>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Grade {student.grade}</span>
                          <span>•</span>
                          <span>{student.lastActive}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={cn("text-xs text-white", getStatusColor(student.status))}>
                          {getStatusText(student.status)}
                        </Badge>
                        <span className="text-sm font-medium">{student.recentScore}%</span>
                      </div>
                      <div className="w-20">
                        <Progress value={student.progress} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Upcoming Assignments
                    </CardTitle>
                    <CardDescription>Tasks and deadlines to monitor</CardDescription>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/teacher/assignments">
                      <Plus className="w-4 h-4 mr-2" />
                      New Task
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-medium">{task.title}</h5>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>Due {task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">
                        {task.completed}/{task.students} completed
                      </div>
                      <div className="w-20 mt-1">
                        <Progress value={(task.completed / task.students) * 100} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700">
                <AlertCircle className="w-5 h-5" />
                Attention Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium text-yellow-800">3 students need additional support</p>
                    <p className="text-sm text-yellow-600">Students scoring below 70% in recent assignments</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 bg-transparent"
                  >
                    Review
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-800">Assignment deadline approaching</p>
                    <p className="text-sm text-blue-600">Math Quiz - Fractions due tomorrow, 14 students pending</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                  >
                    Remind
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

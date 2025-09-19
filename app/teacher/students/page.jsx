"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Search,
  TrendingUp,
  TrendingDown,
  Clock,
  Award,
  AlertCircle,
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Eye,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function TeacherStudents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const students = [
    {
      id: 1,
      name: "Alex Kumar",
      grade: 5,
      email: "alex.kumar@school.edu",
      lastActive: "2 hours ago",
      progress: 85,
      xp: 2450,
      status: "active",
      recentScore: 92,
      completedLessons: 48,
      totalLessons: 60,
      streak: 7,
      badges: 12,
      subjects: {
        math: 88,
        science: 85,
        english: 90,
        environment: 82,
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      grade: 4,
      email: "priya.sharma@school.edu",
      lastActive: "1 day ago",
      progress: 72,
      xp: 1890,
      status: "inactive",
      recentScore: 78,
      completedLessons: 35,
      totalLessons: 50,
      streak: 3,
      badges: 8,
      subjects: {
        math: 75,
        science: 80,
        english: 78,
        environment: 70,
      },
    },
    {
      id: 3,
      name: "Raj Patel",
      grade: 5,
      email: "raj.patel@school.edu",
      lastActive: "30 min ago",
      progress: 91,
      xp: 3200,
      status: "active",
      recentScore: 95,
      completedLessons: 55,
      totalLessons: 60,
      streak: 12,
      badges: 18,
      subjects: {
        math: 95,
        science: 92,
        english: 88,
        environment: 90,
      },
    },
    {
      id: 4,
      name: "Maya Singh",
      grade: 4,
      email: "maya.singh@school.edu",
      lastActive: "3 hours ago",
      progress: 68,
      xp: 1650,
      status: "struggling",
      recentScore: 65,
      completedLessons: 28,
      totalLessons: 50,
      streak: 2,
      badges: 5,
      subjects: {
        math: 62,
        science: 68,
        english: 70,
        environment: 65,
      },
    },
    {
      id: 5,
      name: "Arjun Gupta",
      grade: 5,
      email: "arjun.gupta@school.edu",
      lastActive: "1 hour ago",
      progress: 79,
      xp: 2100,
      status: "active",
      recentScore: 88,
      completedLessons: 42,
      totalLessons: 60,
      streak: 5,
      badges: 10,
      subjects: {
        math: 85,
        science: 78,
        english: 82,
        environment: 75,
      },
    },
  ]

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGrade = selectedGrade === "all" || student.grade.toString() === selectedGrade
    const matchesStatus = selectedStatus === "all" || student.status === selectedStatus
    return matchesSearch && matchesGrade && matchesStatus
  })

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

  const getPerformanceTrend = (score) => {
    if (score >= 85) return { icon: TrendingUp, color: "text-green-500" }
    if (score >= 70) return { icon: TrendingUp, color: "text-yellow-500" }
    return { icon: TrendingDown, color: "text-red-500" }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/teacher/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduHub</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/teacher/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/teacher/students" className="text-sm font-medium text-primary">
                  Students
                </Link>
                <Link href="/teacher/assignments" className="text-sm text-muted-foreground hover:text-foreground">
                  Assignments
                </Link>
                <Link href="/teacher/analytics" className="text-sm text-muted-foreground hover:text-foreground">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
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
            <h1 className="text-3xl font-bold mb-2">Student Management</h1>
            <p className="text-muted-foreground">Monitor and support your students' learning journey</p>
          </div>
          <Link href="/teacher/dashboard">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                >
                  <option value="all">All Grades</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                </select>
                <select
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="struggling">Needs Help</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Students Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredStudents.map((student) => {
            const trend = getPerformanceTrend(student.recentScore)
            return (
              <Card key={student.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center font-medium text-lg">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{student.name}</CardTitle>
                        <CardDescription>
                          Grade {student.grade} • {student.email}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={cn("text-xs text-white", getStatusColor(student.status))}>
                        {getStatusText(student.status)}
                      </Badge>
                      <trend.icon className={cn("w-4 h-4", trend.color)} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress Overview */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{student.recentScore}%</div>
                      <div className="text-xs text-muted-foreground">Recent Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{student.xp}</div>
                      <div className="text-xs text-muted-foreground">Total XP</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{student.streak}</div>
                      <div className="text-xs text-muted-foreground">Day Streak</div>
                    </div>
                  </div>

                  {/* Overall Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span>
                        {student.completedLessons}/{student.totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={(student.completedLessons / student.totalLessons) * 100} className="h-2" />
                  </div>

                  {/* Subject Performance */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium">Subject Performance</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(student.subjects).map(([subject, score]) => (
                        <div key={subject} className="flex justify-between">
                          <span className="capitalize">{subject}:</span>
                          <span
                            className={cn(
                              "font-medium",
                              score >= 80 ? "text-green-600" : score >= 70 ? "text-yellow-600" : "text-red-600",
                            )}
                          >
                            {score}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Last Activity */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Last active: {student.lastActive}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>{student.badges} badges</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="w-3 h-3 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <MessageCircle className="w-3 h-3 mr-2" />
                      Message
                    </Button>
                  </div>

                  {/* Alert for struggling students */}
                  {student.status === "struggling" && (
                    <div className="flex items-center gap-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">Student may need additional support</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredStudents.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">No students found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

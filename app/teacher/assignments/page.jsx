"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Plus,
  Search,
  Calendar,
  Clock,
  Users,
  BookOpen,
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Edit,
  Trash2,
  Eye,
  AlertCircle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function TeacherAssignments() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const assignments = [
    {
      id: 1,
      title: "Math Quiz - Fractions",
      subject: "Math",
      description: "Complete exercises on adding and subtracting fractions",
      dueDate: "2024-01-15",
      createdDate: "2024-01-10",
      totalStudents: 32,
      completed: 18,
      inProgress: 8,
      notStarted: 6,
      status: "active",
      difficulty: "medium",
      estimatedTime: "30 min",
      xpReward: 150,
    },
    {
      id: 2,
      title: "Weekly Practice Set",
      subject: "Math",
      description: "Mixed practice problems covering all topics learned this week",
      dueDate: "2024-01-18",
      createdDate: "2024-01-12",
      totalStudents: 45,
      completed: 28,
      inProgress: 12,
      notStarted: 5,
      status: "active",
      difficulty: "easy",
      estimatedTime: "45 min",
      xpReward: 200,
    },
    {
      id: 3,
      title: "Science Lab Report",
      subject: "Science",
      description: "Write a report on the plant growth experiment",
      dueDate: "2024-01-12",
      createdDate: "2024-01-05",
      totalStudents: 38,
      completed: 35,
      inProgress: 2,
      notStarted: 1,
      status: "overdue",
      difficulty: "hard",
      estimatedTime: "60 min",
      xpReward: 250,
    },
    {
      id: 4,
      title: "Problem Solving Challenge",
      subject: "Math",
      description: "Advanced word problems for extra practice",
      dueDate: "2024-01-25",
      createdDate: "2024-01-13",
      totalStudents: 38,
      completed: 5,
      inProgress: 15,
      notStarted: 18,
      status: "active",
      difficulty: "hard",
      estimatedTime: "40 min",
      xpReward: 300,
    },
    {
      id: 5,
      title: "English Reading Comprehension",
      subject: "English",
      description: "Read the story and answer comprehension questions",
      dueDate: "2024-01-20",
      createdDate: "2024-01-14",
      totalStudents: 42,
      completed: 12,
      inProgress: 20,
      notStarted: 10,
      status: "active",
      difficulty: "medium",
      estimatedTime: "35 min",
      xpReward: 180,
    },
    {
      id: 6,
      title: "Environment Project",
      subject: "Environment",
      description: "Create a poster about local wildlife conservation",
      dueDate: "2024-01-08",
      createdDate: "2024-01-01",
      totalStudents: 40,
      completed: 40,
      inProgress: 0,
      notStarted: 0,
      status: "completed",
      difficulty: "medium",
      estimatedTime: "90 min",
      xpReward: 350,
    },
  ]

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || assignment.status === selectedStatus
    const matchesSubject = selectedSubject === "all" || assignment.subject.toLowerCase() === selectedSubject
    return matchesSearch && matchesStatus && matchesSubject
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-blue-500"
      case "completed":
        return "bg-green-500"
      case "overdue":
        return "bg-red-500"
      case "draft":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active"
      case "completed":
        return "Completed"
      case "overdue":
        return "Overdue"
      case "draft":
        return "Draft"
      default:
        return "Unknown"
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-50 border-green-200"
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "hard":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
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
                <Link href="/teacher/students" className="text-sm text-muted-foreground hover:text-foreground">
                  Students
                </Link>
                <Link href="/teacher/assignments" className="text-sm font-medium text-primary">
                  Assignments
                </Link>
                <Link href="/teacher/analytics" className="text-sm text-muted-foreground hover:text-foreground">
                  Analytics
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild className="h-9">
                <Link href="/teacher/assignments/create">
                  <Plus className="w-4 h-4 mr-2" />
                  New Assignment
                </Link>
              </Button>
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
            <h1 className="text-3xl font-bold mb-2">Assignment Management</h1>
            <p className="text-muted-foreground">Create, assign, and monitor student assignments</p>
          </div>
          <Link href="/teacher/dashboard">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{assignments.length}</div>
            <div className="text-sm text-muted-foreground">Total Assignments</div>
          </Card>
          <Card className="text-center p-4">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "active").length}</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </Card>
          <Card className="text-center p-4">
            <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "overdue").length}</div>
            <div className="text-sm text-muted-foreground">Overdue</div>
          </Card>
          <Card className="text-center p-4">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "completed").length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assignments..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="overdue">Overdue</option>
                  <option value="draft">Draft</option>
                </select>
                <select
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
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
            </div>
          </CardContent>
        </Card>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const daysUntilDue = getDaysUntilDue(assignment.dueDate)
            const completionRate = (assignment.completed / assignment.totalStudents) * 100

            return (
              <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Assignment Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold">{assignment.title}</h3>
                            <Badge
                              variant="outline"
                              className={cn("text-xs", getDifficultyColor(assignment.difficulty))}
                            >
                              {assignment.difficulty}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={cn("text-xs text-white", getStatusColor(assignment.status))}
                            >
                              {getStatusText(assignment.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{assignment.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3" />
                              <span>{assignment.subject}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{assignment.estimatedTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{assignment.totalStudents} students</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="w-3 h-3 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Edit className="w-3 h-3 mr-2" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 bg-transparent"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      {/* Due Date Info */}
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">
                            Due: {formatDate(assignment.dueDate)}
                            {daysUntilDue > 0 && assignment.status === "active" && (
                              <span className="text-muted-foreground"> ({daysUntilDue} days left)</span>
                            )}
                            {daysUntilDue < 0 && assignment.status === "overdue" && (
                              <span className="text-red-600"> ({Math.abs(daysUntilDue)} days overdue)</span>
                            )}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Created: {formatDate(assignment.createdDate)}
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="lg:w-80 space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold mb-1">{Math.round(completionRate)}%</div>
                        <div className="text-sm text-muted-foreground">Completion Rate</div>
                        <Progress value={completionRate} className="h-2 mt-2" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <div className="font-bold text-green-600">{assignment.completed}</div>
                          <div className="text-xs text-muted-foreground">Completed</div>
                        </div>
                        <div className="p-2 bg-yellow-50 rounded-lg">
                          <div className="font-bold text-yellow-600">{assignment.inProgress}</div>
                          <div className="text-xs text-muted-foreground">In Progress</div>
                        </div>
                        <div className="p-2 bg-red-50 rounded-lg">
                          <div className="font-bold text-red-600">{assignment.notStarted}</div>
                          <div className="text-xs text-muted-foreground">Not Started</div>
                        </div>
                      </div>

                      <div className="text-center p-2 bg-primary/10 rounded-lg">
                        <div className="text-sm font-medium">XP Reward: {assignment.xpReward}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredAssignments.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">No assignments found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <Button asChild>
                <Link href="/teacher/assignments/create">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Assignment
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

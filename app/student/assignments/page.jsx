"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Clock,
  Calendar,
  Zap,
  Play,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function StudentAssignments() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const assignments = [
    {
      id: 1,
      title: "Math Quiz - Fractions",
      subject: "Math",
      description: "Complete exercises on adding and subtracting fractions",
      dueDate: "2024-01-15",
      assignedDate: "2024-01-10",
      status: "pending",
      difficulty: "medium",
      estimatedTime: "30 min",
      xpReward: 150,
      progress: 0,
      teacher: "Ms. Johnson",
    },
    {
      id: 2,
      title: "Weekly Practice Set",
      subject: "Math",
      description: "Mixed practice problems covering all topics learned this week",
      dueDate: "2024-01-18",
      assignedDate: "2024-01-12",
      status: "in-progress",
      difficulty: "easy",
      estimatedTime: "45 min",
      xpReward: 200,
      progress: 65,
      teacher: "Ms. Johnson",
    },
    {
      id: 3,
      title: "English Reading Comprehension",
      subject: "English",
      description: "Read the story and answer comprehension questions",
      dueDate: "2024-01-20",
      assignedDate: "2024-01-14",
      status: "pending",
      difficulty: "medium",
      estimatedTime: "35 min",
      xpReward: 180,
      progress: 0,
      teacher: "Mr. Smith",
    },
    {
      id: 4,
      title: "Science Lab Report",
      subject: "Science",
      description: "Write a report on the plant growth experiment",
      dueDate: "2024-01-12",
      assignedDate: "2024-01-05",
      status: "overdue",
      difficulty: "hard",
      estimatedTime: "60 min",
      xpReward: 250,
      progress: 30,
      teacher: "Dr. Patel",
    },
    {
      id: 5,
      title: "Environment Project",
      subject: "Environment",
      description: "Create a poster about local wildlife conservation",
      dueDate: "2024-01-08",
      assignedDate: "2024-01-01",
      status: "completed",
      difficulty: "medium",
      estimatedTime: "90 min",
      xpReward: 350,
      progress: 100,
      teacher: "Ms. Green",
      completedDate: "2024-01-07",
      score: 92,
    },
  ]

  const filteredAssignments = assignments.filter((assignment) => {
    if (selectedFilter === "all") return true
    return assignment.status === selectedFilter
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-blue-500"
      case "in-progress":
        return "bg-yellow-500"
      case "completed":
        return "bg-green-500"
      case "overdue":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Not Started"
      case "in-progress":
        return "In Progress"
      case "completed":
        return "Completed"
      case "overdue":
        return "Overdue"
      default:
        return "Unknown"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return BookOpen
      case "in-progress":
        return Play
      case "completed":
        return CheckCircle
      case "overdue":
        return AlertCircle
      default:
        return BookOpen
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
                <Link href="/student/assignments" className="text-sm font-medium text-primary">
                  Assignments
                </Link>
                <Link href="/student/progress" className="text-sm text-muted-foreground hover:text-foreground">
                  Progress
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">2450 XP</span>
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
            <h1 className="text-3xl font-bold mb-2">My Assignments</h1>
            <p className="text-muted-foreground">Complete your assignments to earn XP and improve your skills</p>
          </div>
          <Link href="/student/dashboard">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <Target className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "pending").length}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </Card>
          <Card className="text-center p-4">
            <Play className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "in-progress").length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </Card>
          <Card className="text-center p-4">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "completed").length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </Card>
          <Card className="text-center p-4">
            <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "overdue").length}</div>
            <div className="text-sm text-muted-foreground">Overdue</div>
          </Card>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { value: "all", label: "All Assignments" },
            { value: "pending", label: "Not Started" },
            { value: "in-progress", label: "In Progress" },
            { value: "completed", label: "Completed" },
            { value: "overdue", label: "Overdue" },
          ].map((filter) => (
            <Button
              key={filter.value}
              variant={selectedFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.value)}
              className={selectedFilter === filter.value ? "" : "bg-transparent"}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const StatusIcon = getStatusIcon(assignment.status)
            const daysUntilDue = getDaysUntilDue(assignment.dueDate)

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
                              <span>By {assignment.teacher}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <StatusIcon
                            className={cn("w-5 h-5", getStatusColor(assignment.status).replace("bg-", "text-"))}
                          />
                        </div>
                      </div>

                      {/* Due Date & Progress */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">
                              Due: {formatDate(assignment.dueDate)}
                              {daysUntilDue > 0 && assignment.status !== "completed" && (
                                <span className="text-muted-foreground"> ({daysUntilDue} days left)</span>
                              )}
                              {daysUntilDue < 0 && assignment.status === "overdue" && (
                                <span className="text-red-600"> ({Math.abs(daysUntilDue)} days overdue)</span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-medium">{assignment.xpReward} XP</span>
                          </div>
                        </div>

                        {assignment.status === "in-progress" && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{assignment.progress}%</span>
                            </div>
                            <Progress value={assignment.progress} className="h-2" />
                          </div>
                        )}

                        {assignment.status === "completed" && (
                          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium text-green-800">
                                  Completed on {formatDate(assignment.completedDate)}
                                </span>
                              </div>
                              <div className="text-sm font-bold text-green-600">Score: {assignment.score}%</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="lg:w-40 flex lg:flex-col justify-end lg:justify-center">
                      {assignment.status === "pending" && (
                        <Button className="w-full lg:h-12">
                          <Play className="w-4 h-4 mr-2" />
                          Start Assignment
                        </Button>
                      )}
                      {assignment.status === "in-progress" && (
                        <Button className="w-full lg:h-12">
                          <Play className="w-4 h-4 mr-2" />
                          Continue
                        </Button>
                      )}
                      {assignment.status === "overdue" && (
                        <Button variant="destructive" className="w-full lg:h-12">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Complete Now
                        </Button>
                      )}
                      {assignment.status === "completed" && (
                        <Button variant="outline" className="w-full lg:h-12 bg-transparent">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          View Results
                        </Button>
                      )}
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
              <p className="text-muted-foreground">
                {selectedFilter === "all"
                  ? "You don't have any assignments yet"
                  : `No ${selectedFilter.replace("-", " ")} assignments`}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

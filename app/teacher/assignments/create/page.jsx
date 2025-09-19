"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Save,
  Send,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function CreateAssignment() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    instructions: "",
    dueDate: "",
    estimatedTime: "",
    difficulty: "medium",
    xpReward: 150,
    assignTo: "all",
    specificStudents: [],
  })

  const [selectedStudents, setSelectedStudents] = useState([])

  const subjects = ["Math", "Science", "English", "Environment"]
  const difficulties = [
    { value: "easy", label: "Easy", xp: 100, color: "text-green-600 bg-green-50" },
    { value: "medium", label: "Medium", xp: 150, color: "text-yellow-600 bg-yellow-50" },
    { value: "hard", label: "Hard", xp: 200, color: "text-red-600 bg-red-50" },
  ]

  const students = [
    { id: 1, name: "Alex Kumar", grade: 5 },
    { id: 2, name: "Priya Sharma", grade: 4 },
    { id: 3, name: "Raj Patel", grade: 5 },
    { id: 4, name: "Maya Singh", grade: 4 },
    { id: 5, name: "Arjun Gupta", grade: 5 },
    { id: 6, name: "Sita Devi", grade: 4 },
    { id: 7, name: "Ravi Kumar", grade: 5 },
    { id: 8, name: "Anita Patel", grade: 4 },
  ]

  const handleSubmit = (e, action) => {
    e.preventDefault()
    console.log("Assignment data:", { ...formData, action })
    // Handle form submission logic here
    if (action === "save") {
      alert("Assignment saved as draft!")
    } else {
      alert("Assignment created and assigned to students!")
    }
  }

  const handleDifficultyChange = (difficulty) => {
    const selectedDifficulty = difficulties.find((d) => d.value === difficulty)
    setFormData({
      ...formData,
      difficulty,
      xpReward: selectedDifficulty?.xp || 150,
    })
  }

  const toggleStudentSelection = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId],
    )
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
            <h1 className="text-3xl font-bold mb-2">Create New Assignment</h1>
            <p className="text-muted-foreground">Design and assign tasks to your students</p>
          </div>
          <Link href="/teacher/assignments">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Assignments
            </Button>
          </Link>
        </div>

        <form className="space-y-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Assignment Details
                  </CardTitle>
                  <CardDescription>Basic information about the assignment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Assignment Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Math Quiz - Fractions"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <select
                        id="subject"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      >
                        <option value="">Select subject</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="estimatedTime">Estimated Time</Label>
                      <Input
                        id="estimatedTime"
                        placeholder="e.g., 30 min"
                        value={formData.estimatedTime}
                        onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of what students need to do..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instructions">Detailed Instructions</Label>
                    <Textarea
                      id="instructions"
                      placeholder="Step-by-step instructions for students..."
                      value={formData.instructions}
                      onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Assignment Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Assignment Settings
                  </CardTitle>
                  <CardDescription>Configure difficulty, rewards, and due date</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={formData.dueDate}
                        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="xpReward">XP Reward</Label>
                      <Input
                        id="xpReward"
                        type="number"
                        min="50"
                        max="500"
                        value={formData.xpReward}
                        onChange={(e) => setFormData({ ...formData, xpReward: Number.parseInt(e.target.value) })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Difficulty Level</Label>
                    <div className="flex gap-2">
                      {difficulties.map((difficulty) => (
                        <button
                          key={difficulty.value}
                          type="button"
                          onClick={() => handleDifficultyChange(difficulty.value)}
                          className={cn(
                            "px-4 py-2 rounded-lg border text-sm font-medium transition-colors",
                            formData.difficulty === difficulty.value
                              ? `${difficulty.color} border-current`
                              : "border-input hover:bg-muted",
                          )}
                        >
                          {difficulty.label}
                          <span className="ml-2 text-xs">({difficulty.xp} XP)</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Student Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Assign To Students
                  </CardTitle>
                  <CardDescription>Choose which students will receive this assignment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Assignment Target</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="assignTo"
                          value="all"
                          checked={formData.assignTo === "all"}
                          onChange={(e) => setFormData({ ...formData, assignTo: e.target.value })}
                        />
                        <span className="text-sm">All Students</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="assignTo"
                          value="specific"
                          checked={formData.assignTo === "specific"}
                          onChange={(e) => setFormData({ ...formData, assignTo: e.target.value })}
                        />
                        <span className="text-sm">Specific Students</span>
                      </label>
                    </div>
                  </div>

                  {formData.assignTo === "specific" && (
                    <div className="space-y-2">
                      <Label>Select Students</Label>
                      <div className="grid md:grid-cols-2 gap-2 max-h-40 overflow-y-auto p-2 border rounded-lg">
                        {students.map((student) => (
                          <label key={student.id} className="flex items-center gap-2 p-2 hover:bg-muted rounded">
                            <input
                              type="checkbox"
                              checked={selectedStudents.includes(student.id)}
                              onChange={() => toggleStudentSelection(student.id)}
                            />
                            <span className="text-sm">
                              {student.name} (Grade {student.grade})
                            </span>
                          </label>
                        ))}
                      </div>
                      {selectedStudents.length > 0 && (
                        <div className="text-sm text-muted-foreground">
                          {selectedStudents.length} student(s) selected
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Preview Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Assignment Preview</CardTitle>
                  <CardDescription>How students will see this assignment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h4 className="font-bold text-lg mb-2">{formData.title || "Assignment Title"}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.subject && (
                        <Badge variant="outline" className="text-xs">
                          {formData.subject}
                        </Badge>
                      )}
                      {formData.difficulty && (
                        <Badge
                          variant="outline"
                          className={cn("text-xs", difficulties.find((d) => d.value === formData.difficulty)?.color)}
                        >
                          {difficulties.find((d) => d.value === formData.difficulty)?.label}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {formData.description || "Assignment description will appear here..."}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {formData.estimatedTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{formData.estimatedTime}</span>
                        </div>
                      )}
                      {formData.xpReward && (
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-secondary" />
                          <span>{formData.xpReward} XP</span>
                        </div>
                      )}
                      {formData.dueDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>Due {new Date(formData.dueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Assignment Summary</h5>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Target:</span>
                        <span>
                          {formData.assignTo === "all"
                            ? "All Students"
                            : `${selectedStudents.length} Selected Students`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>XP Reward:</span>
                        <span>{formData.xpReward} XP</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Difficulty:</span>
                        <span className="capitalize">{formData.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e, "assign")}
                  className="w-full h-12 text-lg font-semibold"
                  disabled={!formData.title || !formData.subject || !formData.dueDate}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Create & Assign
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => handleSubmit(e, "save")}
                  className="w-full h-12 text-lg font-semibold bg-transparent"
                  disabled={!formData.title}
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save as Draft
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

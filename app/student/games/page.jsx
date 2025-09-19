"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Play, Star, Clock, Users, Search, Trophy, Zap, ArrowLeft, Home, Settings, LogOut } from "lucide-react"
import Link from "next/link"

export default function StudentGames() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const subjects = ["all", "math", "science", "english", "environment"]
  const difficulties = ["all", "easy", "medium", "hard"]

  const games = [
    {
      id: 1,
      title: "Math Monsters",
      description: "Defeat monsters by solving math problems",
      subject: "math",
      difficulty: "easy",
      xp: 120,
      duration: "15 min",
      players: 1250,
      rating: 4.8,
      completed: true,
      image: "🔢",
    },
    {
      id: 2,
      title: "Science Lab Adventure",
      description: "Conduct virtual experiments and learn science",
      subject: "science",
      difficulty: "medium",
      xp: 180,
      duration: "20 min",
      players: 890,
      rating: 4.9,
      completed: false,
      image: "🔬",
    },
    {
      id: 3,
      title: "Word Builder Quest",
      description: "Build words and improve your vocabulary",
      subject: "english",
      difficulty: "easy",
      xp: 100,
      duration: "12 min",
      players: 2100,
      rating: 4.7,
      completed: false,
      image: "📚",
    },
    {
      id: 4,
      title: "Eco Warriors",
      description: "Save the environment through learning",
      subject: "environment",
      difficulty: "hard",
      xp: 250,
      duration: "25 min",
      players: 650,
      rating: 4.6,
      completed: false,
      image: "🌱",
    },
    {
      id: 5,
      title: "Number Ninja",
      description: "Master arithmetic with ninja skills",
      subject: "math",
      difficulty: "medium",
      xp: 150,
      duration: "18 min",
      players: 1800,
      rating: 4.8,
      completed: true,
      image: "🥷",
    },
    {
      id: 6,
      title: "Grammar Galaxy",
      description: "Explore grammar rules across the galaxy",
      subject: "english",
      difficulty: "hard",
      xp: 200,
      duration: "22 min",
      players: 720,
      rating: 4.5,
      completed: false,
      image: "🚀",
    },
  ]

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || game.subject === selectedSubject
    const matchesDifficulty = selectedDifficulty === "all" || game.difficulty === selectedDifficulty
    return matchesSearch && matchesSubject && matchesDifficulty
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500"
      case "medium":
        return "bg-yellow-500"
      case "hard":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getSubjectColor = (subject) => {
    switch (subject) {
      case "math":
        return "from-blue-500 to-blue-600"
      case "science":
        return "from-green-500 to-green-600"
      case "english":
        return "from-purple-500 to-purple-600"
      case "environment":
        return "from-orange-500 to-orange-600"
      default:
        return "from-gray-500 to-gray-600"
    }
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
                <Link href="/student/games" className="text-sm font-medium text-primary">
                  Games
                </Link>
                <Link href="/student/progress" className="text-sm text-muted-foreground hover:text-foreground">
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
            <h1 className="text-3xl font-bold mb-2">Learning Games</h1>
            <p className="text-muted-foreground">Choose a game to start learning and earning XP!</p>
          </div>
          <Link href="/student/dashboard">
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
                    placeholder="Search games..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
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
                <select
                  className="px-3 py-2 border border-input bg-background rounded-md text-sm"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-3xl bg-gradient-to-br flex items-center justify-center text-3xl",
                      getSubjectColor(game.subject),
                      "group-hover:animate-bounce-gentle",
                    )}
                  >
                    {game.image}
                  </div>
                  {game.completed && (
                    <Badge className="bg-secondary text-secondary-foreground">
                      <Trophy className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{game.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs capitalize">
                      {game.subject}
                    </Badge>
                    <Badge variant="outline" className={cn("text-xs text-white", getDifficultyColor(game.difficulty))}>
                      {game.difficulty}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3 text-secondary" />
                      <span>{game.xp} XP</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{game.players.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                </div>

                <Button
                  className={cn(
                    "w-full h-12 text-lg font-semibold",
                    game.completed
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : "group-hover:bg-primary group-hover:text-primary-foreground",
                  )}
                >
                  <Play className="w-5 h-5 mr-2" />
                  {game.completed ? "Play Again" : "Start Game"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">No games found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FunHeader } from "@/components/ui/fun-header"
import { GameCard } from "@/components/ui/game-card"
import { GradeSelector } from "@/components/ui/grade-selector"
import { cn } from "@/lib/utils"
import { Search, Filter, BookOpen, Calculator, Microscope, Globe, Star, Trophy } from "lucide-react"

export default function GamesPage() {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Mock games data
  const allGames = [
    // Grade 1-2 Games
    {
      id: 1,
      title: "Count the Farm Animals",
      description: "Help the farmer count all the animals in the barn",
      grade: 1,
      subject: "Math",
      difficulty: "easy" as const,
      stars: 3,
      imageUrl: "/cartoon-farm-animals-counting.jpg",
      tags: ["counting", "animals", "numbers"],
    },
    {
      id: 2,
      title: "Letter Sound Adventure",
      description: "Match letters with their sounds in this fun journey",
      grade: 1,
      subject: "English",
      difficulty: "easy" as const,
      stars: 2,
      imageUrl: "/colorful-alphabet-letters.jpg",
      tags: ["phonics", "letters", "sounds"],
    },
    {
      id: 3,
      title: "Shape Detective",
      description: "Find and identify shapes in everyday objects",
      grade: 2,
      subject: "Math",
      difficulty: "easy" as const,
      stars: 3,
      imageUrl: "/colorful-geometric-shapes-for-kids.jpg",
      tags: ["shapes", "geometry", "recognition"],
    },
    {
      id: 4,
      title: "My Body Parts",
      description: "Learn about different parts of the human body",
      grade: 2,
      subject: "Science",
      difficulty: "easy" as const,
      stars: 2,
      imageUrl: "/cartoon-human-body-parts-for-children.jpg",
      tags: ["body", "health", "anatomy"],
    },

    // Grade 3-5 Games
    {
      id: 5,
      title: "Multiplication Magic",
      description: "Master multiplication tables with magical creatures",
      grade: 3,
      subject: "Math",
      difficulty: "medium" as const,
      stars: 3,
      imageUrl: "/magical-multiplication-table-game.jpg",
      tags: ["multiplication", "tables", "magic"],
    },
    {
      id: 6,
      title: "Plant Life Cycle",
      description: "Discover how plants grow from tiny seeds",
      grade: 3,
      subject: "Science",
      difficulty: "easy" as const,
      stars: 3,
      imageUrl: "/plant-growing-stages-cartoon.jpg",
      tags: ["plants", "lifecycle", "growth"],
    },
    {
      id: 7,
      title: "Story Builder",
      description: "Create amazing stories with characters and plots",
      grade: 4,
      subject: "English",
      difficulty: "medium" as const,
      stars: 2,
      imageUrl: "/children-creating-stories-with-characters.jpg",
      tags: ["writing", "creativity", "stories"],
    },
    {
      id: 8,
      title: "Fraction Pizza Party",
      description: "Learn fractions by sharing pizzas with friends",
      grade: 4,
      subject: "Math",
      difficulty: "medium" as const,
      stars: 3,
      imageUrl: "/pizza-slices-showing-fractions-for-kids.jpg",
      tags: ["fractions", "division", "sharing"],
    },
    {
      id: 9,
      title: "Weather Wonders",
      description: "Explore different weather patterns and seasons",
      grade: 5,
      subject: "Environmental Studies",
      difficulty: "medium" as const,
      stars: 2,
      imageUrl: "/weather-patterns-and-seasons-cartoon.jpg",
      tags: ["weather", "seasons", "climate"],
    },

    // Grade 6-8 Games
    {
      id: 10,
      title: "Decimal Detective",
      description: "Solve mysteries using decimal calculations",
      grade: 6,
      subject: "Math",
      difficulty: "hard" as const,
      stars: 3,
      imageUrl: "/detective-solving-math-decimal-puzzles.jpg",
      tags: ["decimals", "problem-solving", "detective"],
    },
    {
      id: 11,
      title: "Solar System Explorer",
      description: "Journey through space and learn about planets",
      grade: 6,
      subject: "Science",
      difficulty: "medium" as const,
      stars: 3,
      imageUrl: "/cartoon-solar-system-with-planets-for-kids.jpg",
      tags: ["space", "planets", "astronomy"],
    },
    {
      id: 12,
      title: "Grammar Guardian",
      description: "Protect the kingdom by mastering grammar rules",
      grade: 7,
      subject: "English",
      difficulty: "hard" as const,
      stars: 2,
      imageUrl: "/medieval-knight-protecting-grammar-castle.jpg",
      tags: ["grammar", "rules", "language"],
    },
    {
      id: 13,
      title: "Ecosystem Balance",
      description: "Maintain balance in different ecosystems",
      grade: 8,
      subject: "Environmental Studies",
      difficulty: "hard" as const,
      stars: 3,
      imageUrl: "/balanced-ecosystem-with-animals-and-plants.jpg",
      tags: ["ecosystem", "balance", "environment"],
    },
    {
      id: 14,
      title: "Algebra Adventure",
      description: "Solve algebraic equations to unlock treasures",
      grade: 8,
      subject: "Math",
      difficulty: "hard" as const,
      stars: 2,
      imageUrl: "/treasure-hunt-with-algebra-equations.jpg",
      tags: ["algebra", "equations", "treasure"],
    },
  ]

  const subjects = [
    { name: "Math", icon: Calculator, color: "bg-blue-500", count: 0 },
    { name: "Science", icon: Microscope, color: "bg-green-500", count: 0 },
    { name: "English", icon: BookOpen, color: "bg-purple-500", count: 0 },
    { name: "Environmental Studies", icon: Globe, color: "bg-orange-500", count: 0 },
  ]

  const difficulties = ["easy", "medium", "hard"]

  // Filter games based on selected criteria
  const filteredGames = useMemo(() => {
    return allGames.filter((game) => {
      const matchesGrade = selectedGrade === null || game.grade === selectedGrade
      const matchesSubject = selectedSubject === null || game.subject === selectedSubject
      const matchesDifficulty = selectedDifficulty === null || game.difficulty === selectedDifficulty
      const matchesSearch =
        searchQuery === "" ||
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesGrade && matchesSubject && matchesDifficulty && matchesSearch
    })
  }, [selectedGrade, selectedSubject, selectedDifficulty, searchQuery])

  // Update subject counts
  const subjectsWithCounts = subjects.map((subject) => ({
    ...subject,
    count: filteredGames.filter((game) => game.subject === subject.name).length,
  }))

  const handlePlayGame = (gameId: number) => {
    // Navigate to game player
    console.log(`Playing game ${gameId}`)
  }

  const clearFilters = () => {
    setSelectedGrade(null)
    setSelectedSubject(null)
    setSelectedDifficulty(null)
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-background">
      <FunHeader currentPage="games" />

      <div className="container px-4 py-8 mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Games Library
            </span>
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover fun and educational games designed for grades 1-8. Filter by grade, subject, or difficulty to find
            the perfect learning adventure!
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="border-2 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <Filter className="w-6 h-6 text-primary" />
              Find Your Perfect Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search games by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-2xl border-2 text-lg"
              />
            </div>

            {/* Grade Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Select Grade Level</h3>
              <GradeSelector selectedGrade={selectedGrade} onGradeSelect={setSelectedGrade} />
            </div>

            {/* Subject Filters */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Choose Subject</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {subjectsWithCounts.map((subject) => (
                  <Button
                    key={subject.name}
                    onClick={() => setSelectedSubject(selectedSubject === subject.name ? null : subject.name)}
                    variant={selectedSubject === subject.name ? "default" : "outline"}
                    className={cn(
                      "h-16 rounded-2xl font-medium transition-all duration-300",
                      "hover:scale-105 flex items-center gap-3",
                      selectedSubject === subject.name && "shadow-lg",
                    )}
                  >
                    <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", subject.color)}>
                      <subject.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{subject.name}</div>
                      <div className="text-xs opacity-70">{subject.count} games</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Difficulty Level</h3>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty)}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className={cn(
                      "h-12 px-6 rounded-2xl font-medium capitalize transition-all duration-300",
                      "hover:scale-105",
                      selectedDifficulty === difficulty && "shadow-lg",
                    )}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(selectedGrade || selectedSubject || selectedDifficulty || searchQuery) && (
              <div className="flex justify-center">
                <Button onClick={clearFilters} variant="outline" className="rounded-2xl bg-transparent">
                  Clear All Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              {filteredGames.length} Game{filteredGames.length !== 1 ? "s" : ""} Found
            </h2>
            {(selectedGrade || selectedSubject || selectedDifficulty) && (
              <div className="flex flex-wrap gap-2">
                {selectedGrade && (
                  <Badge variant="secondary" className="rounded-full">
                    Grade {selectedGrade}
                  </Badge>
                )}
                {selectedSubject && (
                  <Badge variant="secondary" className="rounded-full">
                    {selectedSubject}
                  </Badge>
                )}
                {selectedDifficulty && (
                  <Badge variant="secondary" className="rounded-full capitalize">
                    {selectedDifficulty}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Sort Options */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Star className="w-4 h-4 mr-1" />
              Rating
            </Button>
            <Button variant="ghost" size="sm" className="rounded-xl">
              <Trophy className="w-4 h-4 mr-1" />
              Grade
            </Button>
          </div>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
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
        ) : (
          <Card className="border-2 rounded-3xl">
            <CardContent className="py-16 text-center space-y-4">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold">No Games Found</h3>
              <p className="text-muted-foreground text-pretty max-w-md mx-auto">
                Try adjusting your filters or search terms to find more games that match your learning goals.
              </p>
              <Button onClick={clearFilters} className="rounded-2xl">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Featured Categories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Popular Learning Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Math Adventures", count: "25+ games", color: "from-blue-400 to-blue-600", icon: "🔢" },
              { title: "Science Experiments", count: "18+ games", color: "from-green-400 to-green-600", icon: "🔬" },
              { title: "Language Fun", count: "22+ games", color: "from-purple-400 to-purple-600", icon: "📚" },
              { title: "Nature Exploration", count: "15+ games", color: "from-orange-400 to-orange-600", icon: "🌱" },
            ].map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 rounded-3xl overflow-hidden"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={cn(
                      "w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br flex items-center justify-center text-3xl",
                      category.color,
                      "group-hover:animate-bounce-gentle",
                    )}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

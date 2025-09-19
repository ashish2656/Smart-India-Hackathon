"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ProgressStars } from "@/components/ui/progress-stars"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  Home,
  RotateCcw,
  Lightbulb,
  Volume2,
  VolumeX,
  Pause,
  Play,
  Trophy,
  Star,
  Heart,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function GamePlayerPage() {
  const params = useParams()
  const gameId = params.gameId as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Mock game data - in real app this would come from API
  const gameData = {
    id: gameId,
    title: "Count the Farm Animals",
    description: "Help the farmer count all the animals in the barn",
    grade: 1,
    subject: "Math",
    difficulty: "easy" as const,
    totalQuestions: 5,
    timeLimit: 300, // 5 minutes
  }

  const questions = [
    {
      id: 1,
      question: "How many cows are in the field?",
      image: "/cartoon-farm-animals-counting.jpg",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2, // index of correct answer
      hint: "Count each cow carefully. Look for the black and white spotted animals!",
      explanation: "Great job! There are 3 cows in the field. Cows give us milk!",
    },
    {
      id: 2,
      question: "Count all the chickens you can see!",
      image: "/placeholder.svg?key=chickens",
      options: ["4", "6", "7", "8"],
      correctAnswer: 1,
      hint: "Some chickens might be hiding behind others. Look carefully!",
      explanation: "Excellent! There are 6 chickens. Chickens lay eggs for us to eat!",
    },
    {
      id: 3,
      question: "How many sheep are grazing in the meadow?",
      image: "/placeholder.svg?key=sheep",
      options: ["1", "2", "3", "4"],
      correctAnswer: 3,
      hint: "Sheep are fluffy and white. Count them one by one!",
      explanation: "Perfect! There are 4 sheep. Sheep give us wool to make clothes!",
    },
    {
      id: 4,
      question: "Count the horses in the stable!",
      image: "/placeholder.svg?key=horses",
      options: ["1", "2", "3", "4"],
      correctAnswer: 0,
      hint: "Horses are big and strong. How many do you see?",
      explanation: "Amazing! There is 1 horse. Horses help farmers with heavy work!",
    },
    {
      id: 5,
      question: "How many ducks are swimming in the pond?",
      image: "/placeholder.svg?key=ducks",
      options: ["3", "5", "7", "9"],
      correctAnswer: 1,
      hint: "Ducks love to swim! Count the yellow ones in the water.",
      explanation: "Fantastic! There are 5 ducks swimming. Ducks can swim, walk, and fly!",
    },
  ]

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)

    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1)
      // Play success sound
    } else {
      setLives(lives - 1)
      // Play error sound
    }

    // Auto advance after 3 seconds
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setShowHint(false)
      } else {
        setGameCompleted(true)
      }
    }, 3000)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setLives(3)
    setSelectedAnswer(null)
    setShowResult(false)
    setGameCompleted(false)
    setShowHint(false)
  }

  const getStarRating = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return 3
    if (percentage >= 70) return 2
    if (percentage >= 50) return 1
    return 0
  }

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border-2 rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center space-y-6">
            <div className="text-8xl animate-bounce-gentle">🎉</div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-balance">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Congratulations!
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">You completed the game!</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-sm text-muted-foreground">Correct Answers</div>
              </div>
              <div className="text-center">
                <ProgressStars current={getStarRating()} total={3} size="lg" className="justify-center mb-2" />
                <div className="text-sm text-muted-foreground">Stars Earned</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">Score</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRestart} size="lg" className="h-14 px-8 text-lg font-bold rounded-2xl">
                  <RotateCcw className="w-6 h-6 mr-2" />
                  Play Again
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-bold rounded-2xl bg-transparent"
                >
                  <Link href="/games">
                    <Trophy className="w-6 h-6 mr-2" />
                    More Games
                  </Link>
                </Button>
              </div>

              <Button asChild variant="ghost" className="rounded-2xl">
                <Link href="/dashboard">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      {/* Game Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="/games">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-xl font-bold">{gameData.title}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="text-xs">
                    Grade {gameData.grade}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {gameData.subject}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Lives */}
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart key={i} className={cn("w-6 h-6", i < lives ? "fill-red-500 text-red-500" : "text-gray-300")} />
                ))}
              </div>

              {/* Score */}
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{score}</span>
              </div>

              {/* Sound Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="rounded-full"
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </Button>

              {/* Pause */}
              <Button variant="ghost" size="icon" onClick={() => setIsPaused(!isPaused)} className="rounded-full">
                {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3 rounded-full" />
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container px-4 py-8 mx-auto max-w-4xl">
        <Card className="border-2 rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold text-balance">{currentQ.question}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Game Image */}
            <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-3xl overflow-hidden">
              <img
                src={currentQ.image || "/placeholder.svg"}
                alt="Game question"
                className="w-full h-full object-cover"
              />
              {showResult && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div
                    className={cn(
                      "text-6xl animate-bounce-gentle",
                      selectedAnswer === currentQ.correctAnswer ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {selectedAnswer === currentQ.correctAnswer ? "✅" : "❌"}
                  </div>
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="grid sm:grid-cols-2 gap-4">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  variant={
                    showResult
                      ? index === currentQ.correctAnswer
                        ? "default"
                        : selectedAnswer === index
                          ? "destructive"
                          : "outline"
                      : selectedAnswer === index
                        ? "default"
                        : "outline"
                  }
                  className={cn(
                    "h-16 text-2xl font-bold rounded-2xl transition-all duration-300",
                    "hover:scale-105",
                    selectedAnswer === index && !showResult && "shadow-lg scale-105",
                    showResult && index === currentQ.correctAnswer && "bg-green-500 hover:bg-green-600",
                    showResult &&
                      selectedAnswer === index &&
                      index !== currentQ.correctAnswer &&
                      "bg-red-500 hover:bg-red-600",
                  )}
                >
                  {option}
                  {showResult && index === currentQ.correctAnswer && <CheckCircle className="w-6 h-6 ml-2" />}
                </Button>
              ))}
            </div>

            {/* Hint Section */}
            {showHint && !showResult && (
              <Card className="border-2 border-accent/50 bg-accent/10 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold text-accent mb-1">Hint:</h4>
                      <p className="text-sm">{currentQ.hint}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Result Explanation */}
            {showResult && (
              <Card
                className={cn(
                  "border-2 rounded-2xl",
                  selectedAnswer === currentQ.correctAnswer
                    ? "border-green-500/50 bg-green-50"
                    : "border-red-500/50 bg-red-50",
                )}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-white text-lg",
                        selectedAnswer === currentQ.correctAnswer ? "bg-green-500" : "bg-red-500",
                      )}
                    >
                      {selectedAnswer === currentQ.correctAnswer ? "✓" : "✗"}
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "font-semibold mb-1",
                          selectedAnswer === currentQ.correctAnswer ? "text-green-700" : "text-red-700",
                        )}
                      >
                        {selectedAnswer === currentQ.correctAnswer ? "Correct!" : "Not quite right!"}
                      </h4>
                      <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!showResult && (
                <>
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-2xl"
                  >
                    Submit Answer
                  </Button>

                  {!showHint && (
                    <Button
                      onClick={() => setShowHint(true)}
                      variant="outline"
                      size="lg"
                      className="h-14 px-8 text-lg font-bold rounded-2xl"
                    >
                      <Lightbulb className="w-6 h-6 mr-2" />
                      Need a Hint?
                    </Button>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

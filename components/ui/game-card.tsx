"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Star, Play } from "lucide-react"

interface GameCardProps {
  title: string
  description: string
  grade: number
  subject: string
  difficulty: "easy" | "medium" | "hard"
  stars: number
  imageUrl?: string
  onPlay: () => void
  className?: string
}

export function GameCard({
  title,
  description,
  grade,
  subject,
  difficulty,
  stars,
  imageUrl,
  onPlay,
  className,
}: GameCardProps) {
  const difficultyColors = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500",
  }

  const subjectColors = {
    Math: "bg-blue-500",
    Science: "bg-green-500",
    English: "bg-purple-500",
    "Environmental Studies": "bg-orange-500",
  }

  return (
    <Card
      className={cn(
        "group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer",
        "border-2 hover:border-primary/50 rounded-3xl overflow-hidden",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            Grade {grade}
          </Badge>
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={cn("w-4 h-4", i < stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
              />
            ))}
          </div>
        </div>

        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-3 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-2xl" />
          ) : (
            <div className="text-6xl animate-float">🎮</div>
          )}
        </div>

        <CardTitle className="text-lg font-bold text-balance leading-tight">{title}</CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 text-pretty">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <Badge
            className={cn(
              "text-white font-medium",
              subjectColors[subject as keyof typeof subjectColors] || "bg-gray-500",
            )}
          >
            {subject}
          </Badge>
          <Badge variant="outline" className={cn("text-white border-0 font-medium", difficultyColors[difficulty])}>
            {difficulty}
          </Badge>
        </div>

        <Button
          onClick={onPlay}
          className="w-full h-12 text-lg font-bold rounded-2xl group-hover:animate-wiggle"
          size="lg"
        >
          <Play className="w-5 h-5 mr-2" />
          Play Now!
        </Button>
      </CardContent>
    </Card>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GradeSelectorProps {
  selectedGrade: number | null
  onGradeSelect: (grade: number) => void
  className?: string
}

export function GradeSelector({ selectedGrade, onGradeSelect, className }: GradeSelectorProps) {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className={cn("flex flex-wrap gap-3 justify-center", className)}>
      {grades.map((grade) => (
        <Button
          key={grade}
          onClick={() => onGradeSelect(grade)}
          variant={selectedGrade === grade ? "default" : "outline"}
          size="lg"
          className={cn(
            "min-w-16 h-16 text-2xl font-bold rounded-2xl transition-all duration-300",
            "hover:scale-110 hover:animate-bounce-gentle",
            selectedGrade === grade && "bg-primary text-primary-foreground shadow-lg scale-105",
          )}
        >
          {grade}
        </Button>
      ))}
    </div>
  )
}

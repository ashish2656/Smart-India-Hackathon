import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface ProgressStarsProps {
  current: number
  total: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ProgressStars({ current, total, size = "md", className }: ProgressStarsProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(total)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            "transition-all duration-300",
            i < current ? "fill-yellow-400 text-yellow-400 animate-pulse" : "text-gray-300 hover:text-yellow-200",
          )}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-muted-foreground">
        {current}/{total}
      </span>
    </div>
  )
}

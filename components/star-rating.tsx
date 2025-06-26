"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  onRatingChange?: (rating: number) => void
  maxRating?: number
  size?: "sm" | "md" | "lg"
  readonly?: boolean
}

export function StarRating({ rating, onRatingChange, maxRating = 5, size = "md", readonly = false }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1
        const isFilled = starValue <= rating

        return (
          <button
            key={index}
            type="button"
            onClick={() => !readonly && onRatingChange?.(starValue)}
            disabled={readonly}
            className={cn(
              "transition-colors",
              !readonly && "hover:scale-110 cursor-pointer",
              readonly && "cursor-default",
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                isFilled ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground hover:text-yellow-400",
              )}
            />
          </button>
        )
      })}
    </div>
  )
}

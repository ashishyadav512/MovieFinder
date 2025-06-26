"use client"

import { useState } from "react"
import { StarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  onRatingChange: (newRating: number) => void
  maxStars?: number
}

export function StarRating({ rating, onRatingChange, maxStars = 5 }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  const handleClick = (starIndex: number) => {
    onRatingChange(starIndex)
  }

  const handleMouseEnter = (starIndex: number) => {
    setHoverRating(starIndex)
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1
        return (
          <StarIcon
            key={starValue}
            className={cn(
              "h-6 w-6 cursor-pointer transition-colors duration-200",
              (hoverRating || rating) >= starValue
                ? "fill-yellow-400 text-yellow-400"
                : "fill-muted text-muted-foreground",
            )}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            aria-label={`Rate ${starValue} stars`}
          />
        )
      })}
    </div>
  )
}

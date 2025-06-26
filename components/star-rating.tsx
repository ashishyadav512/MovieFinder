"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMovieRating } from "@/hooks/use-movie-rating"

interface StarRatingProps {
  imdbID: string
}

export function StarRating({ imdbID }: StarRatingProps) {
  const { rating, setRating } = useMovieRating(imdbID)
  const [hoverRating, setHoverRating] = useState(0)

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating)
  }

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rate this movie, current rating ${rating || "not rated"} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((starValue) => (
        <Star
          key={starValue}
          className={cn(
            "h-6 w-6 cursor-pointer transition-colors duration-200",
            starValue <= rating || starValue <= hoverRating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600",
          )}
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => setHoverRating(starValue)}
          onMouseLeave={() => setHoverRating(0)}
          role="button"
          aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
        />
      ))}
      {rating > 0 && <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({rating} / 5)</span>}
    </div>
  )
}

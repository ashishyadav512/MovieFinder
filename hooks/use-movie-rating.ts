"use client"

import { useState, useEffect } from "react"

export function useMovieRating(movieId: string) {
  const [rating, setRatingState] = useState(0)

  useEffect(() => {
    const savedRating = localStorage.getItem(`movie-rating-${movieId}`)
    if (savedRating) {
      setRatingState(Number.parseInt(savedRating, 10))
    }
  }, [movieId])

  const setRating = (newRating: number) => {
    setRatingState(newRating)
    localStorage.setItem(`movie-rating-${movieId}`, newRating.toString())
  }

  return { rating, setRating }
}

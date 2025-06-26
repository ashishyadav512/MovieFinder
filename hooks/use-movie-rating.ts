"use client"

import { useState, useEffect, useCallback } from "react"

// Key for storing ratings in localStorage
const LOCAL_STORAGE_KEY = "movieRatings"

interface MovieRatings {
  [imdbID: string]: number
}

export function useMovieRating(imdbID: string) {
  const [rating, setRatingState] = useState<number>(0)

  // Load rating from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedRatings = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (storedRatings) {
          const ratings: MovieRatings = JSON.parse(storedRatings)
          setRatingState(ratings[imdbID] || 0)
        }
      } catch (error) {
        console.error("Failed to load ratings from localStorage:", error)
      }
    }
  }, [imdbID])

  // Update rating in state and localStorage
  const setRating = useCallback(
    (newRating: number) => {
      setRatingState(newRating)
      if (typeof window !== "undefined") {
        try {
          const storedRatings = localStorage.getItem(LOCAL_STORAGE_KEY)
          const ratings: MovieRatings = storedRatings ? JSON.parse(storedRatings) : {}
          ratings[imdbID] = newRating
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ratings))
        } catch (error) {
          console.error("Failed to save rating to localStorage:", error)
        }
      }
    },
    [imdbID],
  )

  return { rating, setRating }
}

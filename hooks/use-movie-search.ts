"use client"

import { useState, useCallback } from "react"
import { searchMovies as apiSearchMovies } from "@/lib/api"
import type { Movie } from "@/types/movie"

export function useMovieSearch() {
  const [data, setData] = useState<Movie[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchMovies = useCallback(async (query: string, year?: string) => {
    // Add year parameter
    if (!query.trim()) {
      setData(null)
      return
    }

    // Require at least 3 characters to search
    if (query.trim().length < 3) {
      setError("Please enter at least 3 characters to search.")
      setData(null)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const results = await apiSearchMovies(query, year) // Pass year to apiSearchMovies
      setData(results)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, searchMovies }
}

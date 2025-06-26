"use client"

import { useState, useEffect } from "react"
import { searchMovies } from "@/lib/api"
import { useDebounce } from "./use-debounce"
import type { Movie } from "@/types/movie"

export function useMovieSearch(query: string, year?: string) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const debouncedQuery = useDebounce(query, 500) // Debounce search query by 500ms

  useEffect(() => {
    const fetchMovies = async () => {
      if (debouncedQuery.length < 3) {
        setMovies([])
        setError(false)
        setErrorMessage("")
        if (debouncedQuery.length > 0) {
          setErrorMessage("Please enter at least 3 characters to search.")
          setError(true)
        }
        return
      }

      setLoading(true)
      setError(false)
      setErrorMessage("")

      try {
        const data = await searchMovies(debouncedQuery, year)
        if (data.Response === "True") {
          setMovies(data.Search || [])
        } else {
          setMovies([])
          setError(true)
          // Specific error messages from OMDB
          if (data.Error === "Movie not found!") {
            setErrorMessage(`No movies found for "${debouncedQuery}"${year ? ` in ${year}` : ""}.`)
          } else if (data.Error === "Too many results.") {
            setErrorMessage("Too many results. Please be more specific with your search term.")
          } else if (data.Error === "Unauthorized") {
            setErrorMessage(
              "Unauthorized – your OMDB API key is missing or invalid. Double-check `lib/api.ts` and restart the dev server.",
            )
          } else {
            setErrorMessage(data.Error || "Failed to search movies.")
          }
        }
      } catch (err) {
        console.error("Search error:", err)
        setMovies([])
        setError(true)
        setErrorMessage("Failed to fetch movies. Please check your network connection or try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [debouncedQuery, year]) // Re-run effect when debounced query or year changes

  return { movies, loading, error, errorMessage }
}

"use client"

import { useState, useEffect, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { MovieCard } from "@/components/movie-card"
import { useMovieSearch } from "@/hooks/use-movie-search"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string | undefined>("all") // Updated default value

  const { movies, loading, error, errorMessage } = useMovieSearch(searchQuery, selectedYear)

  // Generate years for the dropdown (e.g., last 50 years)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString())

  // Client-side filtering for year, as OMDB's 'y' parameter can be inconsistent with 's'
  const filteredMovies = useMemo(() => {
    if (!movies) return []
    if (selectedYear === "all") return movies // Updated condition

    return movies.filter((movie) => movie.Year === selectedYear)
  }, [movies, selectedYear])

  useEffect(() => {
    console.log(`MoviesPage useEffect triggered. Query: "${searchQuery}" Selected Year: "${selectedYear}"`)
  }, [searchQuery, selectedYear])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
          aria-label="Search movies by title"
        />
        <Select value={selectedYear || "all"} onValueChange={setSelectedYear} aria-label="Filter by year">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem> {/* Updated value */}
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 text-lg p-4 border border-red-300 rounded-md bg-red-50">
          <p className="font-semibold">Search Error</p>
          <p>{errorMessage || "Failed to search movies."}</p>
          <p className="mt-2 text-sm text-red-400">
            Troubleshooting tips:
            <ul className="list-disc list-inside mt-1">
              <li>Check if your OMDB API key is valid.</li>
              <li>Make sure the API key is set in `lib/api.ts`.</li>
              <li>Try searching for popular movies like "Batman" or "Avengers".</li>
            </ul>
          </p>
        </div>
      )}

      {!loading && !error && filteredMovies.length === 0 && searchQuery.length > 0 && (
        <div className="text-center text-gray-500 text-lg p-4">
          No movies found for "{searchQuery}" {selectedYear !== "all" && `in ${selectedYear}`}. Please try a different
          search term or year.
        </div>
      )}

      {!loading && !error && filteredMovies.length === 0 && searchQuery.length === 0 && (
        <div className="text-center text-gray-500 text-lg p-4">Start by searching for a movie!</div>
      )}

      {!loading && !error && filteredMovies.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

"use client"

import { useState, useEffect, useMemo } from "react" // Import useMemo
import { MovieCard } from "@/components/movie-card"
import { SearchBar } from "@/components/search-bar"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useMovieSearch } from "@/hooks/use-movie-search"
import { useDebounce } from "@/hooks/use-debounce"
import { motion } from "framer-motion" // Import motion
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Import Select components

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string | undefined>(undefined) // State for year filter
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  // Use useMovieSearch to get raw data from API
  const { data: rawMovies, loading, error, searchMovies } = useMovieSearch()

  // Filter movies client-side based on selectedYear
  const filteredMovies = useMemo(() => {
    if (!rawMovies) return []
    if (!selectedYear || selectedYear === "undefined") {
      return rawMovies
    }
    return rawMovies.filter((movie) => movie.Year === selectedYear)
  }, [rawMovies, selectedYear])

  useEffect(() => {
    console.log("MoviesPage useEffect triggered. Query:", debouncedSearchQuery, "Selected Year:", selectedYear)
    if (debouncedSearchQuery.trim()) {
      // Pass selectedYear to searchMovies, OMDB will try to filter
      searchMovies(debouncedSearchQuery, selectedYear)
    } else {
      // If no search query, clear movies
      // Note: filteredMovies will also be empty if rawMovies is null
    }
  }, [debouncedSearchQuery, selectedYear, searchMovies])

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString())

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Discover Movies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Search through thousands of movies and find your next favorite film
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search for movies..." />
        </div>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full sm:w-[180px] h-12 text-lg">
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="undefined">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading && (
        <div className="flex justify-center py-12">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="text-center py-12 space-y-4">
          <p className="text-destructive text-lg font-semibold">Search Error</p>
          <p className="text-muted-foreground">{error}</p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Troubleshooting tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check if your OMDB API key is valid</li>
              <li>Make sure the API key is set in environment variables</li>
              <li>Try searching for popular movies like "Batman" or "Avengers"</li>
            </ul>
          </div>
        </div>
      )}

      {!loading &&
        !error &&
        searchQuery &&
        filteredMovies.length === 0 && ( // Use filteredMovies here
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No movies found for "{searchQuery}" in {selectedYear !== "undefined" ? selectedYear : "all years"}
            </p>
          </div>
        )}

      {!searchQuery && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Start typing to search for movies</p>
        </div>
      )}

      {filteredMovies.length > 0 && ( // Use filteredMovies here
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {filteredMovies.map(
            (
              movie, // Use filteredMovies here
            ) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ),
          )}
        </motion.div>
      )}
    </motion.div>
  )
}

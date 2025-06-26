"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { MovieCard } from "@/components/movie-card"
import { SearchBar } from "@/components/search-bar"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppDispatch, useAppSelector } from "@/lib/hooks" // Updated import
import { fetchMovies, clearSearchResults } from "@/features/movies/moviesSlice" // Updated import
import { useDebounce } from "@/hooks/use-debounce"
import type { Movie } from "@/types/movie"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MoviesPage() {
  const dispatch = useAppDispatch()
  const { searchResults, searchLoading, searchError } = useAppSelector((state) => state.movies)

  const [query, setQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState<string | undefined>(undefined)

  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      dispatch(fetchMovies({ query: debouncedQuery, year: selectedYear }))
    } else {
      dispatch(clearSearchResults())
    }
  }, [debouncedQuery, selectedYear, dispatch])

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => (currentYear - i).toString())

  // Client-side filtering for year, as OMDB's 'y' parameter can be inconsistent with 's'
  const filteredMovies = useMemo(() => {
    if (!searchResults) return []
    if (!selectedYear) return searchResults

    return searchResults.filter((movie: Movie) => movie.Year === selectedYear)
  }, [searchResults, selectedYear])

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery)
  }

  const handleYearChange = (year: string) => {
    setSelectedYear(year === "all" ? undefined : year)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <SearchBar onSearch={handleSearch} initialQuery={query} />
        <Select onValueChange={handleYearChange} value={selectedYear || "all"}>
          <SelectTrigger className="w-[180px] flex-shrink-0">
            <SelectValue placeholder="Filter by Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {searchLoading && (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner />
        </div>
      )}

      {searchError && (
        <div className="text-center text-red-500 text-lg p-8 border border-red-300 rounded-lg bg-red-50">
          <p className="font-semibold">Search Error:</p>
          <p>{searchError}</p>
          <p className="mt-4 text-sm text-gray-600">
            Troubleshooting tips:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Check if your OMDB API key is valid in `lib/api.ts`.</li>
              <li>Try searching for popular movies like "Batman" or "Avengers".</li>
              <li>Ensure your network connection is stable.</li>
            </ul>
          </p>
        </div>
      )}

      {!searchLoading && !searchError && query.length < 3 && (
        <div className="text-center text-gray-500 text-lg p-8">Start typing to search for movies...</div>
      )}

      {!searchLoading && !searchError && query.length >= 3 && filteredMovies.length === 0 && (
        <div className="text-center text-gray-500 text-lg p-8">
          No movies found for "{query}"{selectedYear ? ` in ${selectedYear}` : ""}. Please try a different search term
          or year.
        </div>
      )}

      {!searchLoading && !searchError && filteredMovies.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredMovies.map((movie) => (
            <motion.div key={movie.imdbID} variants={itemVariants}>
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

import type { MovieSearchResponse, MovieDetail } from "@/types/movie"

// Your OMDB API Key
// IMPORTANT: For production, consider using environment variables and proxying requests
// through a Next.js API route to avoid exposing your key directly in client-side code.
const API_KEY = "ced1c040" // Replace with your actual OMDB API key
const BASE_URL = "https://www.omdbapi.com"

export async function searchMovies(query: string, year?: string): Promise<MovieSearchResponse> {
  if (!API_KEY || API_KEY === "YOUR_OMDB_API_KEY_HERE") {
    return {
      Response: "False",
      Error: "OMDB API key is missing or invalid. Please set it in lib/api.ts.",
    }
  }

  const url = new URL(BASE_URL)
  url.searchParams.append("s", query)
  url.searchParams.append("apikey", API_KEY)
  url.searchParams.append("type", "movie") // Only search for movies

  if (year) {
    url.searchParams.append("y", year)
  }

  console.log("Final OMDB API URL:", url.toString())

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      // Handle HTTP errors (e.g., 401 Unauthorized, 404 Not Found)
      if (response.status === 401) {
        return { Response: "False", Error: "Unauthorized" }
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: MovieSearchResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching movies:", error)
    return { Response: "False", Error: (error as Error).message || "Failed to fetch" }
  }
}

export async function getMovieDetails(imdbID: string): Promise<MovieDetail | null> {
  if (!API_KEY || API_KEY === "YOUR_OMDB_API_KEY_HERE") {
    console.error("OMDB API key is not set.")
    return null
  }

  const url = new URL(BASE_URL)
  url.searchParams.append("i", imdbID)
  url.searchParams.append("apikey", API_KEY)
  url.searchParams.append("plot", "full") // Request full plot summary

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      console.error(`HTTP error fetching details: ${response.status}`)
      return null
    }
    const data: MovieDetail = await response.json()
    if (data.Response === "True") {
      return data
    } else {
      console.error("OMDB API error for details:", data.Error)
      return null
    }
  } catch (error) {
    console.error("Error fetching movie details:", error)
    return null
  }
}

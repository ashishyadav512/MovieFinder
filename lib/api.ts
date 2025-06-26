const API_KEY = "ced1c040"
const BASE_URL = "https://www.omdbapi.com"

export async function searchMovies(query: string, year?: string) {
  console.log("searchMovies called with:", { query, year }) // Log incoming parameters

  let url = `${BASE_URL}/?s=${encodeURIComponent(query)}&apikey=${API_KEY}&type=movie`
  if (year && year !== "undefined") {
    url += `&y=${encodeURIComponent(year)}`
  }
  console.log("Final OMDB API URL:", url) // Log the constructed URL

  try {
    const response = await fetch(url)

    if (response.status === 401) {
      throw new Error("Unauthorized – API key is invalid or expired")
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("API Response:", data)

    if (data.Response === "False") {
      if (data.Error === "Movie not found!") {
        return []
      }
      if (data.Error === "Too many results.") {
        throw new Error("Too many results – please be more specific (e.g. add a year or extra keywords).")
      }
      throw new Error(data.Error || "Failed to search movies")
    }

    return data.Search || []
  } catch (error) {
    console.error("Search error:", error)
    throw error
  }
}

export async function getMovieDetails(imdbId: string) {
  const url = `${BASE_URL}/?i=${imdbId}&apikey=${API_KEY}&plot=full`

  try {
    const response = await fetch(url)

    if (response.status === 401) {
      throw new Error("Unauthorized – API key is invalid or expired")
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.Response === "False") {
      throw new Error(data.Error || "Movie not found")
    }

    return data
  } catch (error) {
    console.error("Movie details error:", error)
    throw error
  }
}

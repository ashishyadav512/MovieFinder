import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { searchMovies, getMovieDetails } from "@/lib/api"
import type { Movie, MovieDetail, MovieSearchResponse } from "@/types/movie"

// Define the state for the movies slice
interface MoviesState {
  searchResults: Movie[]
  movieDetail: MovieDetail | null
  searchLoading: boolean
  detailLoading: boolean
  searchError: string | null
  detailError: string | null
}

const initialState: MoviesState = {
  searchResults: [],
  movieDetail: null,
  searchLoading: false,
  detailLoading: false,
  searchError: null,
  detailError: null,
}

// Async thunk for searching movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ query, year }: { query: string; year?: string }, { rejectWithValue }) => {
    try {
      const data: MovieSearchResponse = await searchMovies(query, year)
      if (data.Response === "True") {
        return data.Search || []
      } else {
        // OMDB API returns an Error property on failure
        return rejectWithValue(data.Error || "Failed to search movies.")
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An unknown error occurred during search.")
    }
  },
)

// Async thunk for fetching movie details
export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (imdbID: string, { rejectWithValue }) => {
    try {
      const data: MovieDetail = await getMovieDetails(imdbID)
      if (data.Response === "True") {
        return data
      } else {
        return rejectWithValue(data.Error || "Failed to fetch movie details.")
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An unknown error occurred during detail fetch.")
    }
  },
)

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = []
      state.searchError = null
    },
    clearMovieDetail: (state) => {
      state.movieDetail = null
      state.detailError = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchMovies
      .addCase(fetchMovies.pending, (state) => {
        state.searchLoading = true
        state.searchError = null
        state.searchResults = [] // Clear previous results on new search
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.searchLoading = false
        state.searchResults = action.payload
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.searchLoading = false
        state.searchError = action.payload as string // Payload is the error message from rejectWithValue
        state.searchResults = []
      })
      // Handle fetchMovieDetail
      .addCase(fetchMovieDetail.pending, (state) => {
        state.detailLoading = true
        state.detailError = null
        state.movieDetail = null // Clear previous detail on new fetch
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action: PayloadAction<MovieDetail>) => {
        state.detailLoading = false
        state.movieDetail = action.payload
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.detailLoading = false
        state.detailError = action.payload as string
        state.movieDetail = null
      })
  },
})

export const { clearSearchResults, clearMovieDetail } = moviesSlice.actions
export default moviesSlice.reducer

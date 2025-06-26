"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { LoadingSpinner } from "@/components/loading-spinner"
import { MovieDetails } from "@/components/movie-details"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { fetchMovieDetail, clearMovieDetail } from "@/features/movies/moviesSlice"

interface MovieClientPageProps {
  imdbID: string
}

export default function MovieClientPage({ imdbID }: MovieClientPageProps) {
  const dispatch = useAppDispatch()
  const { movieDetail, detailLoading, detailError } = useAppSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID))

    // Cleanup function to clear movie detail when component unmounts
    return () => {
      dispatch(clearMovieDetail())
    }
  }, [imdbID, dispatch])

  if (detailLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    )
  }

  if (detailError) {
    return (
      <div className="text-center text-red-500 text-lg p-8 border border-red-300 rounded-lg bg-red-50">
        <p className="font-semibold">Error loading movie details:</p>
        <p>{detailError}</p>
        <p className="mt-4 text-sm text-gray-600">Please check the movie ID or your network connection.</p>
      </div>
    )
  }

  if (!movieDetail) {
    return <div className="text-center text-gray-500 text-lg p-8">Movie details not found.</div>
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <MovieDetails movie={movieDetail} />
    </motion.div>
  )
}

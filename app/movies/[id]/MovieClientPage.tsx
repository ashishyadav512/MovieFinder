"use client"

import { MovieDetails } from "@/components/movie-details"
import { getMovieDetails } from "@/lib/api"
import { notFound } from "next/navigation"
import { motion } from "framer-motion" // Import motion

interface MoviePageProps {
  params: { id: string }
}

export default async function MovieClientPage({ params }: MoviePageProps) {
  const { id } = params

  try {
    const movie = await getMovieDetails(id)

    if (!movie || movie.Response === "False") {
      notFound()
    }

    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <MovieDetails movie={movie} />
      </motion.div>
    )
  } catch (error) {
    console.error("Error fetching movie details:", error)
    notFound()
  }
}

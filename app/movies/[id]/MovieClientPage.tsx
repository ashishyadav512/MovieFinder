"use client"

import { MovieDetails } from "@/components/movie-details"
import { motion } from "framer-motion"
import type { MovieDetail } from "@/types/movie"

interface MovieClientPageProps {
  movie: MovieDetail
}

export default function MovieClientPage({ movie }: MovieClientPageProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <MovieDetails movie={movie} />
    </motion.div>
  )
}

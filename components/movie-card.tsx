"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Movie } from "@/types/movie"
import { motion } from "framer-motion"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/movies/${movie.imdbID}`} aria-label={`View details for ${movie.Title}`}>
        <Card className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
          <CardHeader className="p-0">
            <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {movie.Poster && movie.Poster !== "N/A" ? (
                <Image
                  src={movie.Poster || "/placeholder.svg"}
                  alt={movie.Title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  priority={true} // Prioritize loading for initial cards
                />
              ) : (
                <div className="text-gray-400 dark:text-gray-600 text-center p-4">No Poster Available</div>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">{movie.Title}</CardTitle>
            <p className="text-sm text-gray-600 dark:text-gray-400">{movie.Year}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
              {movie.Type}
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

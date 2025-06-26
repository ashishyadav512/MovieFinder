"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movies/${movie.imdbID}`} passHref>
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800 overflow-hidden">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <Image
                src={movie.Poster || "/placeholder.svg"}
                alt={movie.Title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=256&width=192&text=No+Poster"
                }}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-muted-foreground text-sm">
                No Poster Available
              </div>
            )}
          </div>
          <CardContent className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold leading-tight mb-1 line-clamp-2">{movie.Title}</h3>
              <p className="text-sm text-muted-foreground">{movie.Year}</p>
            </div>
            {movie.Type && (
              <p className="text-xs text-primary-foreground bg-primary px-2 py-0.5 rounded-full self-start mt-2">
                {movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}

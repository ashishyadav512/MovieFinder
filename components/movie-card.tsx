"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/types/movie"
import { motion } from "framer-motion" // Import motion

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.2 }}
      className="rounded-lg overflow-hidden"
    >
      <Link href={`/movies/${movie.imdbID}`}>
        <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-[2/3] relative overflow-hidden rounded-t-lg">
              <Image
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.svg?height=450&width=300&query=movie poster"}
                alt={movie.Title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                {movie.Title}
              </h3>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {movie.Year}
                </Badge>
                <span className="text-xs text-muted-foreground capitalize">{movie.Type}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

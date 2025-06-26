"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "./star-rating"
import { useMovieRating } from "@/hooks/use-movie-rating"
import type { MovieDetail } from "@/types/movie"

interface MovieDetailsProps {
  movie: MovieDetail
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const { rating, handleRatingChange } = useMovieRating(movie.imdbID)

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-96 sm:h-[450px] md:h-[500px] lg:h-[600px] bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-t-lg">
          {movie.Poster && movie.Poster !== "N/A" ? (
            <Image
              src={movie.Poster || "/placeholder.svg"}
              alt={movie.Title}
              layout="fill"
              objectFit="cover"
              className="object-top"
              priority
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=600&width=400&text=No+Poster"
              }}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground text-xl">
              No Poster Available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <CardTitle className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              {movie.Title} ({movie.Year})
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {movie.Genre.split(", ").map((genre) => (
                <Badge key={genre} variant="secondary" className="text-sm px-3 py-1">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">Your Rating:</span>
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </div>
          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <div className="text-lg font-semibold">
              IMDb Rating: <span className="text-primary">{movie.imdbRating}</span> / 10
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Plot Summary</h3>
            <p className="text-muted-foreground leading-relaxed">{movie.Plot}</p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <p>
                <span className="font-medium">Director:</span> {movie.Director}
              </p>
              <p>
                <span className="font-medium">Actors:</span> {movie.Actors}
              </p>
              <p>
                <span className="font-medium">Runtime:</span> {movie.Runtime}
              </p>
              <p>
                <span className="font-medium">Released:</span> {movie.Released}
              </p>
              <p>
                <span className="font-medium">Country:</span> {movie.Country}
              </p>
              <p>
                <span className="font-medium">Language:</span> {movie.Language}
              </p>
              <p>
                <span className="font-medium">Awards:</span> {movie.Awards}
              </p>
            </div>
          </div>
        </div>

        {movie.Ratings && movie.Ratings.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Other Ratings</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {movie.Ratings.map((rating, index) => (
                <li key={index}>
                  {rating.Source}: {rating.Value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

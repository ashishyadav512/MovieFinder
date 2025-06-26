"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarRating } from "./star-rating"
import type { MovieDetail } from "@/types/movie"

interface MovieDetailsProps {
  movie: MovieDetail
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
          {movie.Poster && movie.Poster !== "N/A" ? (
            <Image
              src={movie.Poster || "/placeholder.svg"}
              alt={movie.Title}
              layout="fill"
              objectFit="cover"
              className="object-center"
              priority
            />
          ) : (
            <div className="text-gray-400 dark:text-gray-600 text-center p-4 text-xl">No Poster Available</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <CardTitle className="text-3xl font-bold">{movie.Title}</CardTitle>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {movie.Year} &bull; {movie.Rated} &bull; {movie.Runtime}
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 mt-1">
              <span className="font-semibold">Genre:</span> {movie.Genre}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <StarRating imdbID={movie.imdbID} />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              IMDb Rating: {movie.imdbRating} ({movie.imdbVotes} votes)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p>
              <span className="font-semibold">Writer:</span> {movie.Writer}
            </p>
            <p>
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Language:</span> {movie.Language}
            </p>
            <p>
              <span className="font-semibold">Country:</span> {movie.Country}
            </p>
            <p>
              <span className="font-semibold">Awards:</span> {movie.Awards}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Plot Summary</h3>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{movie.Plot}</p>
        </div>

        {movie.Ratings && movie.Ratings.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Ratings</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
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

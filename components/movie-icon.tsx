"use client"

import { Film } from "lucide-react"
import type { LucideProps } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * MovieFinder brand icon – wraps Lucide’s Film icon.
 */
export function MovieIcon({ className, ...props }: LucideProps) {
  return <Film className={cn("h-6 w-6", className)} {...props} />
}

/* Optional default export so either import style works */
export default MovieIcon

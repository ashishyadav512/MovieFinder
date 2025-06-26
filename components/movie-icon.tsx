"use client"

/**
 * A simple movie icon component that re-exports Lucide’s “Clapperboard”.
 * The Header imports it with:  import { MovieIcon } from '@/components/movie-icon'
 */
import { Clapperboard } from "lucide-react"
import type { SVGProps } from "react"

export function MovieIcon(props: SVGProps<SVGSVGElement>) {
  return <Clapperboard aria-hidden="true" {...props} />
}

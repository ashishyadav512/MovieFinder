"use client"

import * as React from "react"
import { Film } from "lucide-react"
import { cn } from "@/lib/utils"

export interface MovieIconProps extends React.SVGProps<SVGSVGElement> {
  label?: string
}

/**
 * A small movie-reel icon + optional text label.
 * Used in the site header and landing page.
 */
export const MovieIcon = React.forwardRef<SVGSVGElement, MovieIconProps>(
  ({ className, label = "MovieFinder", ...props }, ref) => (
    <span className="inline-flex items-center gap-2 text-primary">
      <Film ref={ref} {...props} className={cn("h-6 w-6 shrink-0", className)} aria-hidden="true" />
      <span className="font-semibold text-lg tracking-tight">{label}</span>
    </span>
  ),
)

MovieIcon.displayName = "MovieIcon"

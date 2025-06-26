"use client"

import { Film } from "lucide-react"
import { cn } from "@/lib/utils"
import type { SVGProps } from "react"

export interface MovieIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

/**
 * A simple movie-reel icon that can be reused anywhere in the UI.
 */
export function MovieIcon({ className, size = 24, ...props }: MovieIconProps) {
  return <Film width={size} height={size} className={cn("text-primary", className)} aria-hidden="true" {...props} />
}

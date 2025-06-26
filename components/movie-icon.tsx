"use client"

import type React from "react"

/**
 * MovieIcon – simple wrapper around Lucide’s Film icon so Header (and anyone
 * else) can `import { MovieIcon } from "@/components/movie-icon"`.
 */
import { Film } from "lucide-react"
import { cn } from "@/lib/utils"

export interface MovieIconProps extends React.ComponentPropsWithoutRef<"svg"> {}

export function MovieIcon({ className, ...rest }: MovieIconProps) {
  return <Film aria-hidden="true" className={cn("h-8 w-8", className)} {...rest} />
}

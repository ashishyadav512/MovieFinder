"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useEffect, useState } from "react"

interface SearchBarProps {
  onSearch: (query: string) => void
  initialQuery?: string
  placeholder?: string
}

export function SearchBar({ onSearch, initialQuery = "", placeholder = "Search..." }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    onSearch(newQuery) // Call onSearch immediately for live feedback
  }

  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 text-lg h-12"
        aria-label={placeholder}
      />
    </div>
  )
}

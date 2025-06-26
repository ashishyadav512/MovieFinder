import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">Page Not Found</p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The movie you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Button asChild className="mt-6">
        <Link href="/movies">Go to Movies List</Link>
      </Button>
    </div>
  )
}

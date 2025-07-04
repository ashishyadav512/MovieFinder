import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/movies" passHref>
        <Button size="lg">Go to Movies</Button>
      </Link>
    </div>
  )
}

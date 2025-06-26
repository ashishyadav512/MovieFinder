import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirect to the /movies page as the main entry point
  redirect("/movies")
}

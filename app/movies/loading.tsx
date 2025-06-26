import { LoadingSpinner } from "@/components/loading-spinner"

export default function MoviesLoading() {
  return (
    <div className="flex justify-center items-center h-64">
      <LoadingSpinner />
    </div>
  )
}

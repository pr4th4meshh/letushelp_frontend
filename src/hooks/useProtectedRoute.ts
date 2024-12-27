import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export const useProtectedRoute = () => {
  const { token, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !token) {
      router.push("/login")
    }
  }, [token, loading, router])

  return { isAuthenticated: !!token, isLoading: loading }
}

"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { setCookie, deleteCookie } from "cookies-next"

type AuthContextType = {
  token: string | null
  loading: boolean
  setToken: (token: string | null) => void
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  loading: true,
  setToken: () => {},
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken()
        localStorage.setItem("luh_token", token)
        setCookie("luh_token", token, { maxAge: 30 * 24 * 60 * 60 }) // 30 days
        setToken(token)
      } else {
        localStorage.removeItem("luh_token")
        deleteCookie("luh_token")
        setToken(null)
      }
      setLoading(false)
    })

    // check for token in localStorage on initial load / mounting
    const storedToken = localStorage.getItem("luh_token")
    if (storedToken) {
      setToken(storedToken)
      setCookie("luh_token", storedToken, { maxAge: 30 * 24 * 60 * 60 }) // 30 days
      setLoading(false)
    }

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ token, loading, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

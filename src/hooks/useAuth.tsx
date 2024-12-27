import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { auth } from "@/lib/firebase"

interface UserDetails {
  firstName: string
  lastName: string
  email: string
}

interface User {
  uid: string
  email: string
  displayName?: string
}

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const token = await firebaseUser.getIdToken()
        localStorage.setItem("luh_token", token)
        setUser(firebaseUser as User)

        // Fetch additional user info from Firestore
        const db = getFirestore()
        const userDocRef = doc(db, "users", firebaseUser.uid)
        const userDoc = await getDoc(userDocRef)

        if (userDoc.exists()) {
          const userData = userDoc.data()
          if (userData) {
            setUserDetails(userData as UserDetails)
          }
        } else {
          console.log("User document does not exist in Firestore.")
        }
      } else {
        localStorage.removeItem("luh_token")
        setUser(null)
        setUserDetails(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return { user, userDetails }
}

export default useUser

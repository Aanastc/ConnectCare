import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const userOnLocalStorage = JSON.parse(localStorage.getItem('user'))

    if (userOnLocalStorage) {
      setUser(userOnLocalStorage)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

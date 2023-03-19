import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const UserContext = createContext(undefined)

export function UserProvider({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const userOnLocalStorage = JSON.parse(localStorage.getItem('user'))

    if (userOnLocalStorage) {
      supabase.get(`users/${userOnLocalStorage.id}`).then(res => setUser(res.data))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
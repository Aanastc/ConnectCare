import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { useAuth } from './AuthCtx'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [refetchIndex, setRefetchIndex] = useState(1)
  const { session, authed } = useAuth()

  useEffect(() => {
    if (!authed) return

    const getUser = async () => {
      const {
        data: [profile]
      } = await supabase.from('profiles').select('*').eq('id', session.user.id)

      setUser(profile)
      setLoading(false)

      return profile
    }

    getUser()
  }, [authed, refetchIndex])

  function refetchUser() {
    setRefetchIndex(prev => prev + 1)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        refetchUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  return useContext(UserContext)
}

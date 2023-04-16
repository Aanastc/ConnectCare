import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [metadata, setMetadata] = useState(undefined)
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    const retriveSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (error) {
        setError(error)
        return
      }

      if (data.session) {
        setMetadata(data.session?.user.user_metadata)
        setAuthed(true)
      }
    }

    retriveSession()
  }, [])

  async function singUp({ name, birthdate, gender, role, email, password }) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          birthdate,
          gender,
          role
        },
        emailRedirectTo: 'http://localhost:5173/Inicio'
      }
    })

    if (error) {
      setError(error)
      return
    }
  }

  async function singIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      setError(error)
      return
    }

    setMetadata(data.session.user.user_metadata)
    setAuthed(true)
    return data.session.user.user_metadata
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      setError(error)
      return
    }

    setMetadata(undefined)
    setAuthed(false)
  }

  return (
    <UserContext.Provider
      value={{ metadata, authed, error, singUp, singIn, signOut }}
    >
      {children}
    </UserContext.Provider>
  )
}

import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [metadata, setMetadata] = useState(undefined)
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState(undefined)
  const [profile, setProfile] = useState(undefined)

  async function fetchProfile(id) {
    const {
      data: [profile],
      error
    } = await supabase.from('profiles').select('*').eq('id', id)

    setProfile(profile)

    return profile
  }

  useEffect(() => {
    const retriveSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log(data)
      if (error) {
        setError(error)
        return
      }

      if (data.session) {
        setMetadata(data.session?.user)
        setAuthed(true)
        fetchProfile(data.session.user.id)
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
        emailRedirectTo:
          role === 'patient'
            ? 'http://localhost:5173/Paciente/visaoGeral'
            : 'http://localhost:5173/Profissional/visaoGeral'
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

    setMetadata(data.session.user)
    setAuthed(true)
    fetchProfile(data.session.user.id)
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
    setProfile(undefined)
  }

  return (
    <UserContext.Provider
      value={{
        metadata,
        authed,
        error,
        singUp,
        singIn,
        signOut,
        profile,
        fetchProfile
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

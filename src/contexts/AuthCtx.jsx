import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export const AuthContext = createContext(null)

const roleRoute = {
  patient: 'Paciente/visaoGeral',
  caregiver: 'Profissional/visaoGeral'
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined)
  const [authed, setAuthed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      if (!data.session || error) {
        setLoading(false)
        return
      }

      setSession(data.session)
      setAuthed(true)
      setLoading(false)

      return data
    }

    getSession()
  }, [])

  async function singUp({ name, birthdate, gender, role, email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          birthdate,
          gender,
          role
        },
        emailRedirectTo: `http://localhost:5173/${roleRoute[role]}`
      }
    })

    if (error) {
      throw new Error(error)
    }

    return data
  }

  async function singIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if (error) {
      throw new Error(error)
    }

    setSession(data.session)
    setAuthed(true)

    return data
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      throw new Error(error)
    }

    setSession(undefined)
    setAuthed(false)
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        authed,
        loading,
        singUp,
        singIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

import { createContext, useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

// fluxo entrar:
//                      setar usuário no contexto (react)
//                                    |
// email + senha -> supabase -> erro ou dados -> redireciona /Inicio
//                                    |
//                              local storage (supabase)
//
// fluxo cadastrar:
// dados cadastrar -> supabase -> erro ou sucesso -> verificar email
//
// TODO:
// [x] Após verificar o email o usuário deve ser redirecionado para /Inicio
// [x] Se o usuário clicar em entrar e tiver uma sessão deve ser redirecionado para /Inicioo
// [x] Criar componente para proteger rotas autenticadas
// [x] Não permitir usuário não autenticado acessar rotas do aplicativo
// [ ] Logar Google e Facebook (diz a Leticia q é a msm configuração, eu confio)

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

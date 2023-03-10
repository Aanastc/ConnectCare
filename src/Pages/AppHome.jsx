import { useState } from 'react'
import { supabase } from '../services/supabase'

export function AppHome() {
  const [user, setUser] = useState(null)

  async function getUser(email, password) {
    await supabase.auth.signInWithPassword({
      email,
      password
    })

    const { data } = await supabase.auth.getUser()

    setUser(data.user)
  }

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          getUser(e.target.email.value, e.target.password.value)
        }}
      >
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">entrar</button>
      </form>
      <strong>Usuário logado:</strong>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

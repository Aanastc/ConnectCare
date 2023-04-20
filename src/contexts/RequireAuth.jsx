import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from './UserCtx'

export function RequireAuth({ children }) {
  const { authed } = useContext(UserContext)

  return authed ? children : <Navigate to="/auth/sign-in" replace />
}

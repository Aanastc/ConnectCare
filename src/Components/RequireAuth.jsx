import { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/UserCtx'

export function RequireAuth({ children }) {
  const navigate = useNavigate()

  const { authed } = useContext(UserContext)
  // useEffect(() => {
  //   if (!authed) {
  //     navigate("/auth/sign-in")
  //   }
  // }, [])

  // return authed ? children : <Navigate to="/auth/sign-in" replace />
  return children
}

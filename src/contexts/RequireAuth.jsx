import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthCtx'

const roleRoute = {
  patient: '/Paciente/visaoGeral',
  caregiver: '/Profissional/visaoGeral'
}

export function RequireAuth({ roles, component }) {
  const { session, authed, loading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const role = session?.user?.user_metadata.role
  const allowedRole = roles.includes(role)

  if (loading) {
    return null
  }

  if (authed && allowedRole) {
    return component
  }

  if (authed && !allowedRole) {
    return <Navigate to={roleRoute[role]} replace />
  }

  return (
    <Navigate to="/auth/sign-in" replace state={{ path: location.pathname }} />
  )
}

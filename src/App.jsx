import { Route, Routes } from 'react-router-dom'

import { RequireAuth } from './Components/RequireAuth'
import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp/SignUp'
import { Role } from './Pages/SignUp/components/Role'
import { UserEmail } from './Pages/SignUp/components/UserEmail'
import { PersonalDetails } from './Pages/SignUp/components/PersonalDetails'
import { Auth } from './Layouts/Auth'
import { Verifique } from './Pages/SignUp/components/Verifique'
import { InicioPac } from './Pages/Perfis/Paciente/InicioPac'

import './index.css'

export function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />}>
            <Route path="" element={<Role />} />
            <Route path="email" element={<UserEmail />} />
            <Route path="info" element={<PersonalDetails />} />
            <Route path="autenticacao" element={<Verifique />} />
          </Route>
        </Route>
        <Route
          path="/InicioPaciente"
          element={
            <RequireAuth>
              <InicioPac />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

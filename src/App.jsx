import { Route, Routes } from 'react-router-dom'
import { Auth } from './Layouts/Auth'
import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp/SignUp'
import { PersonalDetails } from './Pages/SignUp/components/PersonalDetails'
import { Role } from './Pages/SignUp/components/Role'
import { UserEmail } from './Pages/SignUp/components/UserEmail'
import { Verifique } from './Pages/SignUp/components/Verifique'

import { Paciente } from './Layouts/Paciente'
import { EditarPerfil } from './Pages/Perfis/Paciente/EditarPerfil'
import { VisaoGeral } from './Pages/Perfis/Paciente/VisaoGeral'
import { PerfilProf } from './Pages/Perfis/Paciente/PerfilProf'
import { ContratoDados } from './Pages/Perfis/Paciente/ContratoDados'

import { Profissional } from './Layouts/Profissional'
import { VisaoGeralProf } from './Pages/Perfis/Profissional/VisaoGeralProf'
import { EditarPerfilProf } from './Pages/Perfis/Profissional/EditarPerfilProf'
import { Solicitacoes } from './Pages/Perfis/Profissional/Solicitacoes'

import './index.css'

export function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />}>
          <Route path="" element={<Role />} />
          <Route path="email" element={<UserEmail />} />
          <Route path="info" element={<PersonalDetails />} />
          <Route path="autenticacao" element={<Verifique />} />
          <Route />
        </Route>
      </Route>
      <Route path="/Paciente" element={<Paciente />}>
        <Route path="visaoGeral" element={<VisaoGeral />} />
        <Route path="editarPerfil" element={<EditarPerfil />} />
        <Route path="perfilDoProfissional" element={<PerfilProf />} />
        <Route path="InfoContract" element={<ContratoDados />} />
      </Route>
      <Route path="/Profissional" element={<Profissional />}>
        <Route path="visaoGeral" element={<VisaoGeralProf />} />
        <Route path="editarPerfil" element={<EditarPerfilProf />} />
        <Route path="solicitacoes" element={<Solicitacoes />} />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

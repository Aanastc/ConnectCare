import { Route, Routes } from 'react-router-dom'

import { Auth } from './Layouts/Auth'
import { Home } from './Pages/Home'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp/SignUp'
import { PersonalDetails } from './Pages/SignUp/components/PersonalDetails'
import { Role } from './Pages/SignUp/components/Role'
import { UserEmail } from './Pages/SignUp/components/UserEmail'
import { Verifique } from './Pages/SignUp/components/Verifique'
import { RequireAuth } from './contexts/RequireAuth'

import { Paciente } from './Layouts/Paciente'
import { ContratoDados } from './Pages/Perfis/Paciente/ContratoDados'
import { EditarPerfil } from './Pages/Perfis/Paciente/EditarPerfil'
import { PerfilProf } from './Pages/Perfis/Paciente/PerfilProf'
import { Servicos } from './Pages/Perfis/Paciente/Servicos'
import { VisaoGeral } from './Pages/Perfis/Paciente/VisaoGeral'

import { Profissional } from './Layouts/Profissional'
import { EditarPerfilProf } from './Pages/Perfis/Profissional/EditarPerfilProf'
import { PerfilPaciente } from './Pages/Perfis/Profissional/PerfilPaciente'
import { Solicitacoes } from './Pages/Perfis/Profissional/Solicitacoes'
import { VisaoGeralProf } from './Pages/Perfis/Profissional/VisaoGeralProf'

import { Chat } from './Pages/Chat'

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
      <Route
        path="/Paciente"
        element={<RequireAuth roles={['patient']} component={<Paciente />} />}
      >
        <Route path="visaoGeral" element={<VisaoGeral />} />
        <Route path="editarPerfil" element={<EditarPerfil />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="perfilDoProfissional/:id" element={<PerfilProf />} />
        <Route
          path="perfilDoProfissional/:id/InfoContract"
          element={<ContratoDados />}
        />
        <Route path="chat" element={<Chat />} />
      </Route>
      <Route
        path="/Profissional"
        element={
          <RequireAuth roles={['caregiver']} component={<Profissional />} />
        }
      >
        <Route path="visaoGeral" element={<VisaoGeralProf />} />
        <Route path="editarPerfil" element={<EditarPerfilProf />} />
        <Route path="solicitacoes" element={<Solicitacoes />} />
        <Route path="perfilPaciente/:id" element={<PerfilPaciente />} />
        <Route path="chat" element={<Chat />} />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

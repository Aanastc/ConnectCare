import { Route, Routes } from 'react-router-dom'

import { Home } from './Pages/Home'
import { Cadastro } from './Pages/Cadastro'

import './index.css'
import { Login } from './Pages/Login'

export function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro/>}></Route>
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

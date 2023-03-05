import { Route, Routes } from 'react-router-dom'

import { ModalUsuario } from './Components/ModalUsuario'
import { Home } from './Pages/Home'

import './index.css'

export function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={<Home />} />
        <Route path="Usuario" element={<ModalUsuario />} />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

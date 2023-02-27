import { Route, Routes } from 'react-router-dom'
import './index.css'

import { Home } from './Pages/Home'
import { Sac } from './Pages/Sac'
import { FaleConosco } from './Pages/FaleConosco'
import { Sobre } from './Pages/Sobre'
import { ModalUsuario } from './Components/ModalUsuario'
import { Servicos } from './Pages/Servicos'

export function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={<Home />} />
        <Route path="SAC" element={<Sac />} />
        <Route path='FaleConosco' element={<FaleConosco />} />
        <Route path='Sobre' element={<Sobre />} />
        <Route path='Servicos' element={<Servicos />} />
        <Route path='Usuario' element={<ModalUsuario />} />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

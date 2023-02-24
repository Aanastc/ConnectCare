import { Route, Routes } from 'react-router-dom'
import './index.css'

import { Home } from './Pages/Home'
import { Sac } from './Pages/Sac'
import { FaleConosco } from './Pages/FaleConosco'

export function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Route path="/" element={<Home />} />
        <Route path="SAC" element={<Sac />} />
        <Route path='FaleConosco' element={<FaleConosco />} />
      </Route>
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>
  )
}

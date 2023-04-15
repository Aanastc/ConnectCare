import { Filtro } from '../Componetes/Filtro'
import { Saudacao } from '../Componetes/saudacao'
import { Card } from './Card'
import {
  Baby,
  Bed,
  Syringe,
  Heartbeat,
  FaceMask,
  FirstAidKit,
  Wheelchair,
  Pill
} from 'phosphor-react'

export function ConteudoPac() {
  const especialidade =
    'border-purple-400 border-2 rounded flex flex-col justify-center items-center h-24 w-24 m-2 p-2 hover:bg-purple-400 hover:shadow-md'

  return (
    <main className="p-5 pt-32">
      <Saudacao />
      <div className="flex flex-row mb-4 w-full gap-5 justify-center items-center">
        <button className={especialidade}>
          <Baby size={32} color="#0a0a0b" />
          <span className="mt-2">Neonatal</span>
        </button>
        <button className={especialidade}>
          <Bed size={32} color="#0a0a0b" />
          <span className="mt-2">internação</span>
        </button>
        <button className={especialidade}>
          <Syringe size={32} color="#0a0a0b" />
          <span className="mt-2">Vacinas</span>
        </button>
        <button className={especialidade}>
          <Heartbeat size={32} color="#0a0a0b" />
          <span className="mt-2">Idoso</span>
        </button>
        <button className={especialidade}>
          <FaceMask size={32} color="#0a0a0b" />
          <span className="mt-2">Paliativo</span>
        </button>
        <button className={especialidade}>
          <FirstAidKit size={32} color="#0a0a0b" />
          <span className="mt-2">Curativo</span>
        </button>
        <button className={especialidade}>
          <Wheelchair size={32} color="#0a0a0b" />
          <span className="mt-2">Cadeirante</span>
        </button>
        <button className={especialidade}>
          <Pill size={32} color="#0a0a0b" />
          <span className="mt-2">Medicação</span>
        </button>
      </div>
      <Filtro />
      <div className="flex flex-wrap gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

import { UserContext } from '../../../contexts/UserCtx'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Filtro } from '../Componetes/Filtro'
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

import homePaciente from '../../../../src/assets/icons/homePaciente.svg'

export function Conteudo() {
  const { metadata } = useContext(UserContext)
  const [horario, setHorario] = useState(new Date().getHours())

  useEffect(() => {
    const interval = setInterval(() => {
      setHorario(new Date().getHours())
    }, 1000 * 60)
    return () => clearInterval(interval)
  }, [])

  let saudacao
  if (horario >= 6 && horario < 12) {
    saudacao = 'Bom dia'
  } else if (horario >= 12 && horario < 18) {
    saudacao = 'Boa tarde'
  } else {
    saudacao = 'Boa noite'
  }

  const especialidade =
    'border-purple-400 border-2 rounded flex flex-col justify-center items-center h-24 w-24 m-2 p-2 hover:bg-purple-400 hover:shadow-md'

  return (
    <main className="p-5 pt-32">
      <div className="flex flex-row justify-center items-center bg-purple-600 rounded-full shadow-md w-full h-20 mb-4">
        <img
          src={homePaciente}
          alt=""
          className="flex items-start absolute top-0 left-28"
        />
        <h1 className="text-3xl font-normal text-black flex items-center uppercase">
          {saudacao}, {metadata?.name}!
        </h1>
      </div>
      <div className="flex flex-row mb-4 w-full gap-5">
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
      <Card />
    </main>
  )
}

import {
  Baby,
  Bed,
  FaceMask,
  FirstAidKit,
  Heartbeat,
  Pill,
  Syringe,
  Wheelchair
} from 'phosphor-react'
import { Filtro } from './Filtro'
import { Saudacao } from '../Componetes/Saudacao'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import { supabase } from '../../../services/supabase'

export function VisaoGeral() {
  const [profissionais, setProfissionais] = useState([])

  useEffect(() => {
    async function getProfissionais() {
      const { data, error } = await supabase
        .from('profiles')
        .select(
          `
          id,
          name,
          profissional (
            especialidade
          )`
        )
        .eq('role', 'caregiver')
      if (error) console.log('Erro ao buscar profissionais:', error)
      else setProfissionais(data)
    }
    getProfissionais()
  }, [])

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
      <div className="flex flex-wrap gap-12 justify-center">
        {profissionais.map(perfilDoProfissional => (
          <Card
            profissionalId={perfilDoProfissional.id}
            name={perfilDoProfissional.name}
            especialidade={perfilDoProfissional?.profissional?.especialidade}
            atendimentos={perfilDoProfissional.atendimentos}
          />
        ))}
      </div>
    </main>
  )
}

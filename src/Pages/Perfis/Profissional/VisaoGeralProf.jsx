import { useState, useEffect } from 'react'
import { Saudacao } from '../Componetes/Saudacao'
import { CardAtendimento } from './CardAtendimento'
// import { CardFinalizados } from './CardFinalizados'
import { supabase } from '../../../services/supabase'

export function VisaoGeralProf() {
  const [paciente, setpaciente] = useState([])

  useEffect(() => {
    async function getpaciente() {
      const { data, error } = await supabase
        .from('profiles')
        .select(
          `
      name,
      paciente (
        casoClinico
      )`
        )
        .eq('role', 'patient')
      if (error) console.log('Erro ao buscar paciente:', error)
      else setpaciente(data)
    }
    getpaciente()
  }, [])

  return (
    <main className="p-5 pt-32">
      <Saudacao />
      <h1 className="font-medium text-2xl mb-4">Atendimentos em andamento:</h1>
      <div className="flex flex-wrap gap-10 justify-center mb-4">
        {paciente.map(pacienteEmAtendimento => (
          <CardAtendimento
            nome={pacienteEmAtendimento.name}
            casoClinico={pacienteEmAtendimento?.paciente?.casoClinico}
            horario={pacienteEmAtendimento.horario}
            dias={pacienteEmAtendimento.dias}
          />
        ))}
      </div>
      <h1 className="font-medium text-2xl mb-4">Atendimentos finalizados:</h1>
      <span className="text-gray-400 text-sm">
        Ainda não há atendimentos finalizados
      </span>
      <div className="flex flex-wrap gap-10 justify-center">
        {/* {pacientes.map(pacienteEmFinalizado => (
          <CardFinalizados
            nome={pacienteEmFinalizado.nome}
            casoClinico={pacienteEmFinalizado.casoClinico}
            horario={pacienteEmFinalizado.horario}
            dias={pacienteEmFinalizado.dias}
          />
        ))} */}
      </div>
    </main>
  )
}

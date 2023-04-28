import { useState, useEffect } from 'react'
import { Saudacao } from '../Componetes/Saudacao'
import { CardAtendimento } from './CardAtendimento'
import { CardFinalizados } from './CardFinalizados'
import { supabase } from '../../../services/supabase'
import { useUser } from '../../../contexts/UserCtx'

const CONTRATO_STATUS = {
  PENDENTE: 'pendente',
  ACEITO: 'aceito',
  REJEITADO: 'rejeitado'
}

export function VisaoGeralProf() {
  const [paciente, setpaciente] = useState([])
  const { user, loading } = useUser()

  useEffect(() => {
    if (loading) return
    async function getpaciente() {
      const { data, error } = await supabase
        .from('contrato')
        .select(
          `
          horario,
          dias:dias_semana,
          paciente (
            casoClinico,
            profiles (
              name
            )
          )
        `
        )
        .eq('status', CONTRATO_STATUS.PENDENTE)
        .eq('profissinal_id', user.id)

      if (error) console.log('Erro ao buscar paciente:', error)
      else setpaciente(data)
    }
    getpaciente()
  }, [loading])

  return (
    <main className="p-5 pt-32">
      <Saudacao />
      <h1 className="font-medium text-2xl mb-4">Atendimentos em andamento:</h1>
      {paciente.length ? (
        <div className="flex flex-wrap gap-10 justify-center mb-4">
          {paciente.map(pacienteEmAtendimento => (
            <CardAtendimento
              nome={pacienteEmAtendimento.paciente.profiles.name}
              casoClinico={pacienteEmAtendimento?.paciente?.casoClinico}
              horario={pacienteEmAtendimento.horario}
              dias={pacienteEmAtendimento.dias.join(' - ')}
            />
          ))}
        </div>
      ) : (
        <span className="text-gray-400 text-sm">Ainda não há atendimentos</span>
      )}
      {/* <h1 className="font-medium text-2xl mb-4">Atendimentos finalizados:</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {paciente.map(pacienteEmFinalizado => (
          <CardFinalizados
            nome={pacienteEmFinalizado.nome}
            casoClinico={pacienteEmFinalizado?.paciente?.casoClinico}
            horario={pacienteEmFinalizado.horario}
            dias={pacienteEmFinalizado.dias}
          />
        ))}
      </div> */}
    </main>
  )
}

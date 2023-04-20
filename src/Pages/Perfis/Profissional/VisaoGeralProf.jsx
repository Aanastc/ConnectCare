import { Saudacao } from '../Componetes/Saudacao'
import { CardAtendimento } from './CardAtendimento'
import { CardFinalizados } from './CardFinalizados'

const pacientes = [
  {
    nome: 'Julia de Sousa',
    casoClinico: 'Fratura em MID',
    horario: 'Manhã',
    dias: 'Segunda - Quarta - Sexta'
  },
  {
    nome: 'Antony Marques',
    casoClinico: 'Falência Pulmonar derivada de Câncer',
    horario: 'Manhã',
    dias: 'Terça - Quinta'
  }
]

export function VisaoGeralProf() {
  return (
    <main className="p-5 pt-32">
      <Saudacao />
      <h1 className="font-medium text-2xl mb-4">Atendimentos em andamento:</h1>
      <div className="flex flex-wrap gap-10 justify-center mb-4">
        {pacientes.map(pacienteEmAtendimento => (
          <CardAtendimento
            nome={pacienteEmAtendimento.nome}
            casoClinico={pacienteEmAtendimento.casoClinico}
            horario={pacienteEmAtendimento.horario}
            dias={pacienteEmAtendimento.dias}
          />
        ))}
      </div>
      <h1 className="font-medium text-2xl mb-4">Atendimentos finalizados:</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {pacientes.map(pacienteEmFinalizado => (
          <CardFinalizados
            nome={pacienteEmFinalizado.nome}
            casoClinico={pacienteEmFinalizado.casoClinico}
            horario={pacienteEmFinalizado.horario}
            dias={pacienteEmFinalizado.dias}
          />
        ))}
      </div>
    </main>
  )
}

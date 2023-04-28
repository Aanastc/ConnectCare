import { useEffect, useState } from 'react'
import { differenceInDays } from 'date-fns'
import { useUser } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'

const CONTRATO_STATUS = {
  PENDENTE: 'pendente',
  ACEITO: 'aceito',
  REJEITADO: 'rejeitado'
}

export function Solicitacoes() {
  // const solicitacaoPacientes = [
  //   {
  //     nome: 'Clarissa Cabral ',
  //     Diagnostico: 'Fratura em MID',
  //     horario: 'Integral',
  //     dias: 'Segunda - Quarta - Sexta',
  //     Contratacao: 'Por período',
  //     PeriodoDoContrato: '180 dias',
  //     Beneficios: 'Motorista',
  //     Pernoite: 'Sim',
  //     Endereco: 'Rua Flores, 1123 - Aldeota',
  //     Observacoes:
  //       'Preciso que dê os remédios, trocar curativo, ajudar na compressa de gelo, auxiliar na locomoção.'
  //   },
  //   {
  //     nome: 'Pedro Cardoso',
  //     Diagnostico: 'Perna Quebrada',
  //     horario: 'Tarde',
  //     dias: 'Segunda - Quinta',
  //     Contratacao: 'Por hora',
  //     PeriodoDoContrato: '7 dias',
  //     Beneficios: 'Almoço',
  //     Pernoite: 'Não',
  //     Endereco: 'Avenida João Pereira, 123 - Água Fria',
  //     Observacoes: 'Auxiliar na locomoção e banho'
  //   }
  // ]
  const [solicitacaoPacientes, setSolicitacaoPacientes] = useState([])
  const [
    refreshSolicitacaoPacientesIndex,
    setRefreshSolicitacaoPacientesIndex
  ] = useState(0)
  const { user, loading } = useUser()

  async function aceitarContrato(contratoId) {
    await supabase
      .from('contrato')
      .update({
        status: CONTRATO_STATUS.ACEITO
      })
      .eq('id', contratoId)

    setRefreshSolicitacaoPacientesIndex(prev => prev + 1)
  }

  async function rejeitarContrato(contratoId) {
    await supabase
      .from('contrato')
      .update({
        status: CONTRATO_STATUS.REJEITADO
      })
      .eq('id', contratoId)

    setRefreshSolicitacaoPacientesIndex(prev => prev + 1)
  }

  useEffect(() => {
    if (loading) return

    async function getContratos() {
      const { data, error } = await supabase
        .from('contrato')
        .select(
          `
          id,
          diagnostico,
          horario,
          dias:dias_semana,
          periodo_inicial,
          periodo_final,
          pernoite,
          paciente (
            profiles (
              name
            )
          )
        `
        )
        .eq('status', CONTRATO_STATUS.PENDENTE)
        .eq('profissinal_id', user.id)

      if (error) console.log('Erro ao buscar paciente:', error)
      else setSolicitacaoPacientes(data)
    }

    getContratos()
  }, [loading, refreshSolicitacaoPacientesIndex])

  return (
    <div className="p-2 mb-4">
      <h1 className="font-medium text-2xl mb-4">Solicitaçõees</h1>
      <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg justify-center">
        {solicitacaoPacientes.length ? (
          solicitacaoPacientes.map(item => (
            <div
              className="border border-purple-500 rounded-lg flex justify-between p-4 mb-4 pr-10"
              key={item.id}
            >
              <div>
                <h2 className="text-purple-400 text-2xl font-semibold">
                  {item.paciente.profiles.name}
                </h2>
                <p className="font-semibold">
                  Diagnóstico:
                  <span className="font-normal"> {item.diagnostico}</span>
                </p>
                <p className="font-semibold">
                  Horário:
                  <span className="font-normal"> {item.horario}</span>
                </p>
                <p className="font-semibold">
                  Dias:
                  <span className="font-normal"> {item.dias?.join(' - ')}</span>
                </p>
                <p className="font-semibold">
                  Período do contrato:
                  <span className="font-normal">
                    {' '}
                    {`${differenceInDays(
                      new Date(item.periodo_final),
                      new Date(item.periodo_inicial)
                    )} dias`}
                  </span>
                </p>
                <p className="font-semibold">
                  Pernoite:
                  <span className="font-normal"> {item.pernoite}</span>
                </p>
                <p className="font-semibold">
                  Endereço:
                  {/* ainda não tem */}
                  {/* <span className="font-normal"> {item.Endereco}</span> */}
                </p>
                <p className="font-semibold">
                  Observações:
                  {/* ainda não tem */}
                  {/* <span className="font-normal"> {item.Observacoes}</span> */}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <button
                  className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600"
                  onClick={() => aceitarContrato(item.id)}
                >
                  ACEITAR
                </button>
                <button
                  className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600"
                  onClick={() => rejeitarContrato(item.id)}
                >
                  REJEITAR
                </button>
                <button className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600">
                  CONVERSAR COM PACIENTE
                </button>
              </div>
            </div>
          ))
        ) : (
          <span>Não há solicitações pendentes</span>
        )}
      </div>
    </div>
  )
}

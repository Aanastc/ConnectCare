export function Solicitacoes() {
  const solicitacaoPacientes = [
    {
      nome: 'Clarissa Cabral ',
      Diagnostico: 'Fratura em MID',
      horario: 'Integral',
      dias: 'Segunda - Quarta - Sexta',
      Contratacao: 'Por período',
      PeriodoDoContrato: '180 dias',
      Beneficios: 'Motorista',
      Pernoite: 'Sim',
      Endereco: 'Rua Flores, 1123 - Aldeota',
      Observacoes:
        'Preciso que dê os remédios, trocar curativo, ajudar na compressa de gelo, auxiliar na locomoção.'
    },
    {
      nome: 'Pedro Cardoso',
      Diagnostico: 'Perna Quebrada',
      horario: 'Tarde',
      dias: 'Segunda - Quinta',
      Contratacao: 'Por hora',
      PeriodoDoContrato: '7 dias',
      Beneficios: 'Almoço',
      Pernoite: 'Não',
      Endereco: 'Avenida João Pereira, 123 - Água Fria',
      Observacoes: 'Auxiliar na locomoção e banho'
    }
  ]
  return (
    <div className="p-2 mb-4">
      <h1 className="font-medium text-2xl mb-4">Solicitaçõees</h1>
      <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg justify-center">
        {solicitacaoPacientes.map(item => (
          <div
            className="border border-purple-500 rounded-lg flex justify-between p-4 mb-4 pr-10"
            key={item}
          >
            <div>
              <h2 className="text-purple-400 text-2xl font-semibold">
                {item.nome}
              </h2>
              <p className="font-semibold">
                Diagnóstico:
                <span className="font-normal"> {item.Diagnostico}</span>
              </p>
              <p className="font-semibold">
                Horário:
                <span className="font-normal"> {item.horario}</span>
              </p>
              <p className="font-semibold">
                Dias:
                <span className="font-normal"> {item.dias}</span>
              </p>
              <p className="font-semibold">
                Período do contrato:
                <span className="font-normal"> {item.PeriodoDoContrato}</span>
              </p>
              <p className="font-semibold">
                Pernoite:
                <span className="font-normal"> {item.Pernoite}</span>
              </p>
              <p className="font-semibold">
                Endereço:
                <span className="font-normal"> {item.Endereco}</span>
              </p>
              <p className="font-semibold">
                Observações:
                <span className="font-normal"> {item.Observacoes}</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <button className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600">
                ACEITAR
              </button>
              <button className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600">
                REJEITAR
              </button>
              <button className="bg-purple-400 text-white rounded-lg px-2 py-1 w-56 font-light text-sm hover:bg-purple-600">
                CONVERSAR COM PACIENTE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PerfilPaciente() {
  return (
    <main className="flex justify-center">
      <div className="flex justify-between items-center">
        <div className="border-2 border-purple-600 rounded-full w-72 h-72 shadow-md shadow-purple-500">
          <img src="" className="rounded-full w-full" />
        </div>
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
            // onClick={() => {
            //   setIsConta(true)
            //   setIsInformacao(false)
            // }}
            // className={`font-bold ${
            //   isConta && !isInformacao ? 'text-purple-600' : ''
            // }`}
            >
              Conta
            </button>

            <button
            // onClick={() => {
            //   setIsConta(true)
            //   setIsInformacao(false)
            // }}
            // className={`font-bold ${
            //   isConta && !isInformacao ? 'text-purple-600' : ''
            // }`}
            >
              Dados Profissionais
            </button>
          </div>
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <div className="w-72 flex flex-row px-4 py-2 mb-2">
              <p className="font-semibold text-base mr-1">Nome:</p>
              <p>Lara</p>
            </div>
            <div className="w-72 flex flex-row px-4 py-2 mb-2">
              <p className="font-semibold text-base mr-1">Email:</p>
              <p>lara@email.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

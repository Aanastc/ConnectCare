import { CaretRight } from 'phosphor-react'
export function ContratoDados() {
  return (
    <main>
      <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
        <div className="border-b-2 border-b-black mb-4">
          <h2 className="text-purple-400 text-lg font-medium">
            Detalhes do Contrato
          </h2>
        </div>
        <div className="flex flex-col gap-8 mb-4">
          <p className="text-base font-bold">Período</p>
          <div className="flex flex-row border-gray-300 border-2 rounded-lg text-base w-96">
            <CaretRight
              size={32}
              color="#A3A3A3"
              weight="thin"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

import { useState } from 'react'
import { ContratoDado } from './ContratoDado'
import { Pagamento } from './Pagamento'

export function EditarPerfilProf() {
  const [isContratoDado, setIsContratoDado] = useState(true)
  const [isPagamento, setIsPagamento] = useState(false)

  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
              onClick={() => {
                setIsContratoDado(true)
                setIsPagamento(false)
              }}
              className={`font-bold ${
                isContratoDado && !isPagamento ? 'text-purple-600' : ''
              }`}
            >
              ContratoDado
            </button>
            <button
              onClick={() => {
                setIsContratoDado(false)
                setIsPagamento(true)
              }}
              className={`font-bold ${
                !isContratoDado && isPagamento ? 'text-purple-600' : ''
              }`}
            >
              Informações
            </button>
            <button
              onClick={() => {
                setIsContratoDado(false)
                setIsPagamento(false)
              }}
              className={`font-bold ${
                !isContratoDado && !isPagamento ? 'text-purple-600' : ''
              }`}
            >
              ContratoDado
            </button>
          </div>
          {isContratoDado ? <ContratoDado /> : <Pagamento />}
        </div>
      </div>
    </main>
  )
}

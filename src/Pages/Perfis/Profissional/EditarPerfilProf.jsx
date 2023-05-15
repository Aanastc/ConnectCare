import { useState } from 'react'
import { Conta } from '../Componetes/Conta'
import { FotoPerfil } from '../Componetes/PerfilFoto'
import { Documentos } from './Documentos'
import { Informacao } from './Informacao'

export function EditarPerfilProf() {
  const [isConta, setIsConta] = useState(true)
  const [isInformacao, setIsInformacao] = useState(false)

  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <FotoPerfil />
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
              onClick={() => {
                setIsConta(true)
                setIsInformacao(false)
              }}
              className={`font-bold ${
                isConta && !isInformacao ? 'text-purple-600' : ''
              }`}
            >
              Conta
            </button>
            <button
              onClick={() => {
                setIsConta(false)
                setIsInformacao(true)
              }}
              className={`font-bold ${
                !isConta && isInformacao ? 'text-purple-600' : ''
              }`}
            >
              Informações
            </button>
            <button
              onClick={() => {
                setIsConta(false)
                setIsInformacao(false)
              }}
              className={`font-bold ${
                !isConta && !isInformacao ? 'text-purple-600' : ''
              }`}
            >
              Documentos
            </button>
          </div>
          {isConta ? <Conta /> : isInformacao ? <Informacao /> : <Documentos />}
        </div>
      </div>
    </main>
  )
}

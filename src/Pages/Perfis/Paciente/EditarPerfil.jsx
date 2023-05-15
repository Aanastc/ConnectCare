import { useState } from 'react'
import { Conta } from '../Componetes/Conta'
import { FotoPerfil } from '../Componetes/PerfilFoto'
import { DadosClinicos } from './DadosClinicos'

export function EditarPerfil() {
  const [isConta, setIsConta] = useState(true)

  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <FotoPerfil />
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
              onClick={() => setIsConta(true)}
              className={`font-bold ${isConta && 'text-purple-600'}`}
            >
              Conta
            </button>
            <button
              onClick={() => setIsConta(false)}
              className={`font-bold ${!isConta && 'text-purple-600'}`}
            >
              Dados Clinicos
            </button>
          </div>
          {isConta ? <Conta /> : <DadosClinicos />}
        </div>
      </div>
    </main>
  )
}

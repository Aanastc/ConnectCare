import { Eyedropper, Trash } from 'phosphor-react'
import { useState } from 'react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { Conta } from '../Componetes/Conta'
import { DadosClinicos } from './DadosClinicos'

export function EditarPerfil() {
  const [isConta, setIsConta] = useState(true)

  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex justify-center flex-col p-3 border border-purple-500 rounded-lg items-center shadow-lg h-56 ">
          <img src={fotoPerfil} alt="" className="h-40 rounded-3xl mb-4" />
          <div className="flex flex-row gap-8">
            <Trash size={28} />
            <Eyedropper size={28} />
          </div>
        </div>
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

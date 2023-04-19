import { Eyedropper, Trash } from 'phosphor-react'
import { useState } from 'react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { Conta } from '../Componetes/Conta'

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
          {isConta ? (
            <Conta />
          ) : (
            <>
              <div className="flex flex-row gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="peso" className="text-sm font-bold">
                    Peso
                  </label>
                  <input
                    id="peso"
                    type="text"
                    placeholder="Insira seu peso"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="altura" className="text-sm font-bold">
                    Altura
                  </label>
                  <input
                    id="altura"
                    type="text"
                    placeholder="Insira sua altura"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 checked:bg-purple-600 checked:border-gray-500 rounded"
                    />
                    <label htmlFor="" className="ml-2">
                      Asma
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                    <label htmlFor="" className="ml-2">
                      Bronquite
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                    <label htmlFor="" className="ml-2">
                      Pneumonia
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                    <label htmlFor="" className="ml-2">
                      Úlcera
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" className="w-4 h-4" />
                    <label htmlFor="" className="ml-2">
                      Outro:
                    </label>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

import { Eyedropper, Trash, PlusCircle, CloudArrowUp } from 'phosphor-react'
import { useState } from 'react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { Conta } from '../Componetes/Conta'

export function EditarPerfilProf() {
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
              Informações
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
              <div className="flex flex-col mb-4">
                <div className="flex flex-col">
                  <label htmlFor="resumo" className="block text-sm font-bold">
                    Resumo
                  </label>
                  <textarea
                    name="resumo"
                    id="resumo"
                    placeholder="Fale um pouco sobre você"
                    className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
                    style={{ verticalAlign: 'top' }}
                  />
                </div>
              </div>
              <h2 className="text-lg font-bold mb-2">Experiências</h2>
              <div className="flex flex-row gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cargo" className="text-sm font-bold">
                    Cargo
                  </label>
                  <input
                    id="cargo"
                    type="text"
                    placeholder="Insira seu cargo"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="duracao" className="text-sm font-bold">
                    Duração
                  </label>
                  <input
                    id="duracao"
                    type="text"
                    placeholder="Insira a duração"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex flex-col">
                  <label htmlFor="resumo" className="block text-sm font-bold">
                    Resumo
                  </label>
                  <textarea
                    name="atividade"
                    id="atividade"
                    placeholder="Descreva suas atividades"
                    className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
                    style={{ verticalAlign: 'top' }}
                  />
                </div>
              </div>
              <button className="flex flex-row justify-end items-center gap-2 font-bold mb-4">
                Adicionar
                <PlusCircle size={32} />
              </button>
              <div className="flex flex-row justify-between">
                <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
                  Upload curriculo
                  <CloudArrowUp size={28} />
                </button>
                <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
                  Upload doc conselho
                  <CloudArrowUp size={28} />
                </button>
                <button className="flex flex-row border-2 border-gray-400 p-2 rounded-lg gap-4 items-center w-64 justify-between">
                  Upload certificados
                  <CloudArrowUp size={28} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

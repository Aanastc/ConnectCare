import { Eyedropper, Trash } from 'phosphor-react'
import { useState } from 'react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserCtx'

export function EditarPerfilProf() {
  const { metadata } = useContext(UserContext)
  const [isConta, setIsConta] = useState(true)

  return (
    <main>
      <div className="flex flex-row gap-8">
        <div className="flex justify-center flex-col p-6 border border-purple-500 rounded-lg items-center shadow-lg ">
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
            <div>
              <div className="flex flex-row gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={metadata?.name}
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={metadata?.email}
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="birthdate" className="text-sm font-bold">
                    Data de Aniversario
                  </label>
                  <input
                    id="birthdate"
                    type="text"
                    value={metadata?.birthdate}
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="text-sm font-bold">
                    Sexo
                  </label>
                  <input
                    id="gender"
                    type="text"
                    value={metadata?.gender}
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-full value:text-black"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-bold">
                    Perfil
                  </label>
                  <input
                    id="role"
                    type="text"
                    value={metadata?.role}
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-full value:text-black"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>snnipengipnignodnongn</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

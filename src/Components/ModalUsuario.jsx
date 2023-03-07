import React from 'react'
import { CaretLeft, FacebookLogo, GoogleLogo } from 'phosphor-react'
import { Modal } from './Modal'

export function ModalUsuario() {
  const [showRegistrar, setShowRegistrar] = React.useState(false)
  const [showEntrar, setShowEntrar] = React.useState(false)

  return (
    <div className="flex gap-2 items-center">
      <button
        className="font-bold text-purple-600 py-2 px-4 hover:text-purple-800 hover:bg-gray-100 rounded-full"
        type="button"
        onClick={() => setShowRegistrar(true)}
      >
        Registrar
      </button>
      {showRegistrar ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center p-3 mb-4">
                  <h3 className="text-xl font-semibold">
                    Faça seu cadastro gratuitamente
                  </h3>
                </div>
                <div className="relative px-6 flex-auto mb-4">
                  <button
                    className="bg-white text-black w-full active:bg-purple-700 font-bold uppercase text-xs px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-2 ease-linear transition-all duration-150 border-purple-600 border-2"
                    type="button"
                    href="#"
                  >
                    {/* <GoogleLogo size={32} color="#0c0c0d" weight="light" /> */}
                    Continuar com Google
                  </button>
                  <button
                    className="bg-white text-black w-full active:bg-purple-700 font-bold uppercase text-xs px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-2 ease-linear transition-all duration-150 border-purple-600 border-2"
                    type="button"
                    href="#"
                  >
                    {/* <FacebookLogo size={32} color="#3136b9" weight="light" /> */}
                    Continuar com Facebook
                  </button>
                  <form className="mb-4">
                    <label className="text-gray-700 text-sm font-bold mb-2">
                      Qual o seu email?
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Insira seu email"
                    />
                  </form>
                  <button
                    className="bg-purple-600 text-white w-full active:bg-purple-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowRegistrar(false)}
                  >
                    Continuar
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <button
                    className="text-purple-600 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex items-center justify-start"
                    type="button"
                    onClick={() => setShowRegistrar(false)}
                  >
                    <CaretLeft size={22} color="#9063CD" weight="light" />
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Modal />
    </div>
  )
}

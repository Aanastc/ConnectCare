import * as Dialog from '@radix-ui/react-dialog'
import { CaretLeft, FacebookLogo, GoogleLogo, X } from 'phosphor-react'
import { useState } from 'react'

export function Modal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="font-bold bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-800"
          type="button"
        >
          Entrar
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="opacity-40 fixed inset-0 z-50 bg-black" />
        <Dialog.Content className="flex items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-[500px]">
            <div className="p-6 rounded-xl shadow-lg bg-white">
              <div className="flex justify-center mb-6 relative">
                <Dialog.Title className="text-xl font-semibold justify-center">
                  Bem vindo de volta
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    className="hover:bg-purple-100 rounded-full p-1 background-transparent outline-none focus:outline-none ease-linear transition-all duration-150 absolute right-0"
                    type="button"
                  >
                    <X size={16} weight="bold" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
                  type="button"
                  href="#"
                >
                  <GoogleLogo size={22} weight="bold" />
                  Continuar com Google
                </button>
                <button
                  className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
                  type="button"
                  href="#"
                >
                  <FacebookLogo size={22} weight="bold" />
                  Continuar com Facebook
                </button>
              </div>
              <div className="flex items-center gap-4 my-5">
                <span className="border-t-2 border-gray-400 flex-1"></span>
                <span className="text-gray-400">ou</span>
                <span className="border-t-2 border-gray-400 flex-1"></span>
              </div>

              <form className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="email" className="text-sm font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Insira seu email"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-3border-gray-300"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="password" className="text-sm font-bold">
                    Senha
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Insira sua senha"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-3border-gray-300"
                  />
                  <button
                    type="button"
                    className="text-sm hover:text-purple-600"
                  >
                    Equeceu a senha?
                  </button>
                </div>
                <button
                  className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800"
                  type="submit"
                  // onClick={() => setShowEntrar(false)}
                >
                  Entrar
                </button>
              </form>
              <div className="mt-4 flex justify-center ">
                <span>
                  Não tem conta?{' '}
                  <button className="text-purple-600 hover:text-purple-400">
                    Faça seu cadastro.
                  </button>
                </span>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

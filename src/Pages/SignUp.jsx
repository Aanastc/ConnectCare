import { FacebookLogo, GoogleLogo } from 'phosphor-react'

import Logo from '../assets/icons/Logo.svg'

export function SignUp() {
  return (
    <main className="flex flex-col h-full min-h-screen bg-purple-500">
      <div className="mt-8 ml-8">
        <img src={Logo} alt="Logo" className="mb-4" />
      </div>
      <div className="flex-1 flex items-center">
        <div className="p-6 rounded-xl shadow-lg bg-white mx-auto max-w-[500px] w-full">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-semibold justify-center">
              Faça seu cadastro gratuitamente
            </h2>
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
          <form>
            <label type="email" className="text-sm font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Insira seu email"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-3border-gray-300"
            />
          </form>
          <div>
            <button>Continuar</button>
          </div>
          <div className="mt-4 flex justify-center ">
            <span>
              Já tenho conta?{' '}
              <button className="text-purple-600 hover:text-purple-400">
                Faça seu Login.
              </button>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  )
}

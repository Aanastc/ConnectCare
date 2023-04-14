import { CaretLeft, FacebookLogo, GoogleLogo } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export function UserEmail() {
  const { register } = useFormContext()

  const navigate = useNavigate()

  function handleOnSubmit(event) {
    event.preventDefault()
    navigate('/auth/sign-up/info')
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold text-center mb-8">
        Faça seu cadastro gratuitamente
      </h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={async () => {
            await supabase.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo: 'http://localhost:5173/InicioPaciente'
              }
            })
          }}
          className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
          type="button"
          href="#"
        >
          <GoogleLogo size={22} weight="bold" />
          Continuar com Google
        </button>
        <button
          onClick={async () => {
            await supabase.auth.signInWithOAuth({
              provider: 'facebook',
              options: {
                redirectTo: 'http://localhost:5173/InicioPaciente'
              }
            })
          }}
          className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
          type="button"
          href="#"
        >
          <FacebookLogo size={22} weight="bold" />
          Continuar com Facebook
        </button>
      </div>
      <div className="flex items-center gap-4 my-6">
        <span className="border-t-2 border-gray-400 flex-1"></span>
        <span className="text-gray-400">ou</span>
        <span className="border-t-2 border-gray-400 flex-1"></span>
      </div>

      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Insira seu email"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
            {...register('email')}
          />
        </div>
        <button
          className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800 w-full mt-6"
          type="submit"
        >
          Continuar
        </button>
      </form>
      <div className="mt-4 flex justify-start">
        <button
          className="flex items-center justify-start gap-2 text-purple-600 hover:text-purple-400"
          onClick={() => navigate(-1)}
        >
          <CaretLeft size={18} weight="bold" />
          <span className="text-base font-bold">Voltar</span>
        </button>
      </div>
    </div>
  )
}

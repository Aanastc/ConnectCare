import { FacebookLogo, GoogleLogo } from 'phosphor-react'
import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthCtx'

const roleRoute = {
  patient: '/Paciente/visaoGeral',
  caregiver: '/Profissional/visaoGeral'
}

export function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const { singIn } = useAuth()
  const navigate = useNavigate()
  const { state } = useLocation()

  const valueInput = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const addUser = async e => {
    try {
      e.preventDefault()

      var saveDataForm = true

      for (let u in formData) {
        if (formData[u] === '') {
          saveDataForm = false
        }
      }

      if (!saveDataForm) {
        setStatus({
          type: 'error',
          mensagem: 'Erro: Preencha os campos!'
        })
        return
      }

      const { user } = await singIn({
        email: formData.email,
        password: formData.password
      })

      navigate(state?.path || roleRoute[user.user_metadata.role])
    } catch (error) {
      setStatus({
        type: 'error',
        mensagem: 'Erro: Email ou senha estão incorretos!'
      })
    }
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <div className="flex justify-center mb-6">
        <h2 className="text-xl font-semibold justify-center">
          Bem vindo de volta!
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={async () => {
            await supabase.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo:
                  'http://localhost:5173/{roleRoute[user.user_metadata.role]}'
              }
            })
          }}
          className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
          type="button"
        >
          <GoogleLogo size={22} weight="bold" />
          Continuar com Google
        </button>
        <button
          onClick={async () => {
            await supabase.auth.signInWithOAuth({
              provider: 'facebook',
              options: {
                redirectTo:
                  'http://localhost:5173/{roleRoute[user.user_metadata.role]}'
              }
            })
          }}
          className="flex justify-center gap-4 bg-white text-black font-bold text-base py-3 rounded-lg ease-linear transition-all duration-150 border-purple-600 border-2 hover:bg-purple-100"
          type="button"
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

      {status.type === 'success' ? (
        <p className={'text-green-600'}>{status.mensagem}</p>
      ) : (
        ''
      )}
      {status.type === 'error' ? (
        <p className={'text-red-600'}>{status.mensagem}</p>
      ) : (
        ''
      )}

      <form className="flex flex-col gap-4" onSubmit={addUser}>
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
            onChange={valueInput}
            value={formData.email}
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
            onChange={valueInput}
            value={formData.password}
          />
          <button type="button" className="text-sm hover:text-purple-600">
            Esqueceu a senha?
          </button>
        </div>
        <button
          className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800"
          type="submit"
        >
          Entrar
        </button>
      </form>
      <div className="mt-4 flex justify-center ">
        <span>
          Não tenho conta?{' '}
          <NavLink
            to="/auth/sign-up"
            className="text-purple-600 hover:text-purple-400"
          >
            Faça seu cadastro.
          </NavLink>
        </span>
      </div>
    </div>
  )
}

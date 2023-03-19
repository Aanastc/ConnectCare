import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { FacebookLogo, GoogleLogo } from 'phosphor-react'
import { supabase } from '../services/supabase'

export function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const { setUser } = useContext(UserContext)

  const navigate = useNavigate()

  const valueInput = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const addUser = async e => {
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
    const resposta = await supabase.get('users', {
      params: { email: formData.email }
    })
    const usuario = resposta.data[0]

    if (!usuario || formData.password !== usuario.password) {
      setStatus({
        type: 'error',
        mensagem: 'Erro: Email ou senha estão incorretos!'
      })
      return
    }

    const user = await supabase.get(`users/${usuario.id}`)

    localStorage.setItem('user', JSON.stringify(user.data))
    setUser(user.data)
    navigate('/')
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <div className="flex justify-center mb-6">
        <h2 className="text-xl font-semibold justify-center">
          Bem vindo de volta
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

      {status.type === 'success' ? (
        <p className={text - green - 600}>{status.mensagem}</p>
      ) : (
        ''
      )}
      {status.type === 'error' ? (
        <p className={text - red - 600}>{status.mensagem}</p>
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
            Equeceu a senha?
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

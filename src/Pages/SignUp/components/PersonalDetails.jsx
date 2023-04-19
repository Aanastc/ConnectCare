import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CaretLeft } from 'phosphor-react'
import { UserContext } from '../../../contexts/UserCtx'

export function PersonalDetails() {
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const { register, handleSubmit } = useFormContext()
  const { singUp } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleCreateUser({
    name,
    year,
    month,
    day,
    gender,
    role,
    email,
    password,
    passwordConfirmation
  }) {
    if (password.length < 8) {
      setStatus({
        type: 'error',
        mensagem: 'A senha deve ter no mínimo 8 caracteres.'
      })
      return
    } else if (password !== passwordConfirmation) {
      setStatus({
        type: 'error',
        mensagem: 'As senhas não coincidem.'
      })
      return
    }

    const birthdate = new Date(`${year}/${month}/${day}`).toISOString()

    await singUp({
      name,
      birthdate,
      gender,
      role,
      email,
      password
    })
    navigate('/auth/sign-up/autenticacao')
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold text-center mb-8">
        Queremos saber mais sobre você
      </h2>

      {status.type === 'error' ? (
        <p className="text-red-600">{status.mensagem}</p>
      ) : (
        ''
      )}

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Insira seu nome completo"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('name')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Data de nascimento</label>
            <div className="flex gap-4">
              <input
                id="day"
                type="number"
                placeholder="Dia"
                className="basis-[20%] border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('day')}
              />
              <select
                id="month"
                className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-full"
                {...register('month')}
              >
                <option value="" disabled selected className="text-gray-300">
                  Mês
                </option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>

              <input
                id="year"
                type="number"
                placeholder="Ano"
                className="basis-[30%] border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('year')}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Sexo</label>
            <div className="flex gap-6">
              <div className="flex gap-2">
                <input
                  id="female"
                  type="radio"
                  value="female"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className="flex gap-2">
                <input
                  id="male"
                  type="radio"
                  value="male"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="male">Masculino</label>
              </div>
              <div className="flex gap-2">
                <input
                  id="other"
                  type="radio"
                  value="other"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300 accent-purple-600"
                  {...register('gender')}
                />
                <label htmlFor="other">Outro</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-bold">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="Crie uma senha"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('password')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordConfirmation" className="text-sm font-bold">
              Confirmar senha
            </label>
            <input
              id="passwordConfirmation"
              type="password"
              placeholder="Confirme sua senha"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('passwordConfirmation')}
            />
          </div>
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

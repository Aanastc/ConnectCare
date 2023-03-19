import { useFormContext } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import cardCuidador from '../../../assets/icons/card-cuidador.svg'
import cardPaciente from '../../../assets/icons/card-paciente.svg'

export function Role() {
  const { register } = useFormContext()
  const navigate = useNavigate()

  function handleOnSubmit(event) {
    event.preventDefault()
    navigate('/auth/sign-up/email')
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Como você gostaria de usar o Connect Care?
      </h2>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleOnSubmit}
          className="grid grid-cols-3 gap-2 w-full max-w-screen-sm"
        >
          <div className="flex gap-8">
            <div>
              <input
                class="hidden"
                id="caregiver"
                type="radio"
                value="caregiver"
                {...register('role')}
                checked
              />
              <label
                htmlFor="caregiver"
                class="flex flex-col items-center p-4 border-2 bg-purple-300 rounded-lg cursor-pointer w-44 h-44 hover:bg-purple-600 checked:border-purple-800"
              >
                <span class="text-xs font-semibold uppercase">
                  Desejo cuidar de pessoas
                </span>
                <div className="max-h-36">
                  <img src={cardCuidador} alt="" className="h-28" />
                </div>
              </label>
            </div>
            <div>
              <input
                class="hidden"
                id="patient"
                type="radio"
                value="patient"
                {...register('role')}
              />
              <label
                htmlFor="patient"
                class="flex flex-col items-center p-4 border-2 bg-purple-300 rounded-lg cursor-pointer w-44 h-44 hover:bg-purple-600 checked:border-purple-800"
              >
                <span class="text-xs font-semibold uppercase">
                  Desejo encontrar um profissional da saúde
                </span>
                <div className="max-h-36">
                  <img src={cardPaciente} alt="" className="h-28" />
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>

      <button
        className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800 w-full mt-6"
        type="submit"
      >
        Continuar
      </button>
      <div className="mt-4 flex justify-center">
        <span>
          Já tem uma conta?{' '}
          <NavLink
            className="text-purple-600 hover:text-purple-400"
            to="/auth/sign-in"
          >
            Faça seu Login.
          </NavLink>
        </span>
      </div>
    </div>
  )
}

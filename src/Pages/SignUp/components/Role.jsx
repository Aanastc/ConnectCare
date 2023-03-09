import { useFormContext } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

export function Role() {
  const { register } = useFormContext()
  const navigate = useNavigate()

  function handleOnSubmit(event) {
    event.preventDefault()
    navigate('/auth/sign-up/email')
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold text-center mb-8">
        Como você gostaria de usar o Connect Care?
      </h2>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[auto_1fr] auto-rows-auto gap-2 items-start">
            <input
              id="caregiver"
              type="radio"
              value="caregiver"
              className="row-span-2 col-span-1"
              {...register('role')}
            />
            <label
              htmlFor="caregiver"
              className="text-base font-bold row-span-1 col-span-1"
            >
              Desejo cuidar de pessoas
            </label>
            <p className="row-span-1 col-span-1">
              Reprehenderit laudantium dolorem minus sequi sint dolorem dolor.
              Dolores fuga itaque deserunt totam voluptate quia doloribus. Quia
              dicta occaecati eaque distinctio vero aliquid.{' '}
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] auto-rows-auto gap-2 items-start">
            <input
              id="patient"
              type="radio"
              value="patient"
              className="row-span-2 col-span-1"
              {...register('role')}
            />
            <label
              htmlFor="patient"
              className="text-base font-bold row-span-1 col-span-1"
            >
              Desejo encontrar um profissional da saúde
            </label>
            <p className="row-span-1 col-span-1">
              Reprehenderit laudantium dolorem minus sequi sint dolorem dolor.
              Dolores fuga itaque deserunt totam voluptate quia doloribus. Quia
              dicta occaecati eaque distinctio vero aliquid.{' '}
            </p>
          </div>
        </div>

        <button
          className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800 w-full mt-6"
          type="submit"
        >
          Continuar
        </button>
      </form>
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

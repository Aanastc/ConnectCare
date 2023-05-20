import { useUser } from '../../../contexts/UserCtx'

export function DadosCobranca({ onNextStep, onPreviousStep }) {
  const { user } = useUser()

  return (
    <form>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={user?.name}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cpf" className="text-sm font-bold">
            CPF
          </label>
          <input
            id="cpf"
            type="cpf"
            value={user?.cpf}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user?.email}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cel" className="text-sm font-bold">
            Celular
          </label>
          <input
            id="cel"
            type="cel"
            value={user?.celular}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-purple-500 text-white rounded-full h-10 w-64"
          onClick={onPreviousStep}
        >
          Anterior
        </button>
        <button
          className="bg-purple-500 text-white rounded-full h-10 w-64"
          onClick={onNextStep}
        >
          Próximo
        </button>
      </div>
    </form>
  )
}

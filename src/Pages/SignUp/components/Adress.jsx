import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CaretLeft } from 'phosphor-react'

export function Adress() {
  const { register } = useFormContext()
  const navigate = useNavigate()

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full">
      <h2 className="text-xl font-semibold text-center mb-8">
        Cadastre seu endereço
      </h2>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2 flex-initial w-64">
              <label htmlFor="text" className="text-sm font-bold">
                Rua
              </label>
              <input
                id="rua"
                type="text"
                placeholder="Av. Jorgin Do Grau"
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('rua')}
              />
            </div>
            <div className="flex flex-col gap-2 flex-initial w-32">
              <label htmlFor="text" className="text-sm font-bold">
                Nº
              </label>
              <input
                id="numero"
                type="text"
                placeholder="000"
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('numero')}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="text-sm font-bold">
              Bairro
            </label>
            <input
              id="bairro"
              type="text"
              placeholder="Logradouro ou bairro"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('bairro')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="text-sm font-bold">
              Complemento
            </label>
            <input
              id="complemento"
              type="text"
              placeholder="Bloco4  Ap200"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('complemento')}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2 flex-initial w-32">
              <label htmlFor="text" className="text-sm font-bold">
                Estado
              </label>
              <input
                id="estado"
                type="text"
                placeholder="UF"
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('estado')}
              />
            </div>
            <div className="flex flex-col gap-2 flex-initial w-64">
              <label htmlFor="text" className="text-sm font-bold">
                Cidade
              </label>
              <input
                id="cidade"
                type="text"
                placeholder="Cidade"
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
                {...register('cidade')}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="text-sm font-bold">
              CEP
            </label>
            <input
              id="CEP"
              type="text"
              placeholder="00000-000"
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-full placeholder:text-gray-300"
              {...register('CEP')}
            />
            <a
              type="button"
              className="text-sm hover:text-purple-600"
              href="http://www.buscacep.correios.com.br/"
              target="_blank"
            >
              Não sei meu CEP
            </a>
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

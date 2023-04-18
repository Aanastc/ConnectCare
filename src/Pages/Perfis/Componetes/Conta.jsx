import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserCtx'

export function Conta() {
  const { metadata } = useContext(UserContext)
  return (
    <>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Nome
          </label>
          <input
            id="name"
            type="text"
            value={metadata?.name}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={metadata?.email}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Data de Aniversario
          </label>
          <input
            id="birthdate"
            type="text"
            value={metadata?.birthdate}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Sexo
          </label>
          <input
            id="gender"
            type="text"
            value={metadata?.gender}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 value:text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold">
            Perfil
          </label>
          <input
            id=""
            type="text"
            value={metadata?.role}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 value:text-black"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="cpf" className="text-sm font-bold">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rg" className="text-sm font-bold">
            RG
          </label>
          <input
            id="rg"
            type="text"
            placeholder="00.000.000-00"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="rua" className="text-sm font-bold">
            Rua
          </label>
          <input
            id="rua"
            type="text"
            placeholder="Rua. Almeida de Costa"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="numero" className="text-sm font-bold">
            Nº
          </label>
          <input
            id="numero"
            type="text"
            placeholder="325"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-24 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bairro" className="text-sm font-bold">
            Bairro
          </label>
          <input
            id="bairro"
            type="text"
            placeholder="Confidentes"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="complemento" className="text-sm font-bold">
            Complemento
          </label>
          <input
            id="complemento"
            type="text"
            placeholder="Bloco 9 ap.209"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="uf" className="text-sm font-bold">
            Estado
          </label>
          <input
            id="uf"
            type="text"
            placeholder="325"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-24 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Cidade" className="text-sm font-bold">
            Cidade
          </label>
          <input
            id="Cidade"
            type="text"
            placeholder="Fortaleza"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="cep" className="text-sm font-bold">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            placeholder="00000-000"
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 placeholder:text-black"
          />
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            className="font-bold text-start text-xs text-gray-600 hover:underline"
          >
            Não sei meu CEP
          </a>
        </div>
        <button className="bg-purple-500 text-white rounded-full h-10 w-64">
          Salvar
        </button>
      </div>
    </>
  )
}

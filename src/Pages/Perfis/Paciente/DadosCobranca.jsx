import { useUser } from '../../../contexts/UserCtx'

export function DadosCobranca({ onNextStep, onPreviousStep }) {
  const { user } = useUser()

  return (
    <form>
      <div className="flex flex-col">
        <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
          <h1 className="text-2xl text-purple-400">Dados de cobrança</h1>
        </div>
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

        <div className="flex flex-row gap-8 mb-8">
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
        <div className="flex flex-col gap-2">
          <label htmlFor="cep" className="text-sm font-bold">
            CEP
          </label>
          <input
            id="cep"
            type="text"
            value={user?.cep}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-44 placeholder:text-gray-400"
          />
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            className="text-xs text-gray-500 font-medium italic text-start"
          >
            *Não sei meu CEP
          </a>
        </div>
        <div className="flex flex-row gap-8 mb-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="rua" className="text-sm font-bold">
              Rua
            </label>
            <input
              id="rua"
              type="text"
              value={user?.rua}
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
              value={user?.numero}
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
              value={user?.bairro}
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 mb-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="complemento" className="text-sm font-bold">
              Complemento
            </label>
            <input
              id="complemento"
              type="text"
              value={user?.complemento}
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Estado</p>
            <select
              id="UF"
              name="UF"
              className="basis-[50%] border-gray-300 border-2 rounded-lg p-3 text-base w-24"
            >
              <option className="text-gray-400" value={user?.estado}></option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Cidade" className="text-sm font-bold">
              Cidade
            </label>
            <input
              id="Cidade"
              type="text"
              value={user?.cidade}
              className="border-gray-300 border-2 rounded-lg p-3 text-base w-64 placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="flex justify-between ">
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
      </div>
    </form>
  )
}

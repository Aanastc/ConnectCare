import { CaretRight } from 'phosphor-react'
export function ContratoDados() {
  return (
    <form>
      <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
        <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
          <h1 className="text-2xl text-purple-400">Detalhes do Contrato</h1>
        </div>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-col">
            <p className="text-sm font-bold">Período</p>
            <div className="border-gray-300 border-2 rounded-lg w-96 flex justify-center items-center">
              <div className="pl-2 flex flex-col">
                <label for="dia" className="text-sm text-gray-500 font-medium">
                  De
                </label>
                <input type="date" id="dia" name="dia" className="font-bold" />
              </div>
              <CaretRight
                size={40}
                color="#A3A3A3"
                weight="thin"
                // className="absolute top-0 left-28"
              />
              <div className="pl-2 flex flex-col">
                <label for="dia" className="text-sm text-gray-500 font-medium">
                  Até
                </label>
                <input type="date" id="dia" name="dia" className="font-bold" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold">Horário</p>
            <div className="flex flex-row gap-2">
              <div>
                <input
                  class="input-role hidden"
                  id="manha"
                  type="radio"
                  value="manha"
                />
                <label
                  htmlFor="manha"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Manhã</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="tarde"
                  type="radio"
                  value="tarde"
                />
                <label
                  htmlFor="tarde"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Tarde</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="noite"
                  type="radio"
                  value="noite"
                />
                <label
                  htmlFor="noite"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Noite</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="integral"
                  type="radio"
                  value="integral"
                />
                <label
                  htmlFor="integral"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Integral</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 mb-4">
          <div>
            <p className="text-sm font-bold">Dias da semana</p>
            <div className="flex flex-row gap-2">
              <div>
                <input
                  class="input-role hidden"
                  id="domingo"
                  type="radio"
                  value="domingo"
                />
                <label
                  htmlFor="domingo"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>D</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="segunda"
                  type="radio"
                  value="segunda"
                />
                <label
                  htmlFor="segunda"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>S</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="terca"
                  type="radio"
                  value="terca"
                />
                <label
                  htmlFor="terca"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>T</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="quarta"
                  type="radio"
                  value="quarta"
                />
                <label
                  htmlFor="quarta"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>Q</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="quinta"
                  type="radio"
                  value="quinta"
                />
                <label
                  htmlFor="quinta"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>Q</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="sexta"
                  type="radio"
                  value="sexta"
                />
                <label
                  htmlFor="sexta"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>S</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="sabado"
                  type="radio"
                  value="sabado"
                />
                <label
                  htmlFor="sabado"
                  class="label-role border-gray-300 border-2 rounded-full w-7 flex justify-center items-center cursor-pointer"
                >
                  <span>S</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold">Pernoite</p>
            <div className="flex flex-row gap-2">
              <div>
                <input
                  class="input-role hidden"
                  id="sim"
                  type="radio"
                  value="sim"
                />
                <label
                  htmlFor="sim"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Sim</span>
                </label>
              </div>
              <div>
                <input
                  class="input-role hidden"
                  id="nao"
                  type="radio"
                  value="nao"
                />
                <label
                  htmlFor="nao"
                  class="label-role border-gray-300 border-2 rounded-lg w-20 h-12 flex justify-center items-center cursor-pointer"
                >
                  <span>Não</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
          <h1 className="text-2xl text-purple-400">Detalhes do Caso Clínico</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-4">
            <div className="flex flex-col">
              <label htmlFor="diagnostico" className="block text-sm font-bold">
                Diagnóstico
              </label>
              <textarea
                name="diagnostico"
                id="diagnostico"
                placeholder="Descreva o diagnóstico"
                className="border-gray-300 border-2 rounded-lg p-3 h-20 w-56 text-base placeholder:text-gray-400 mt-2 resize-none"
                style={{ verticalAlign: 'top' }}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-col">
              <label htmlFor="descricao" className="block text-sm font-bold">
                Descrição
              </label>
              <textarea
                name="descricao"
                id="descricao"
                className="border-gray-300 border-2 rounded-lg p-3 h-36 text-base placeholder:text-gray-400 mt-2 resize-none"
                style={{ verticalAlign: 'top' }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

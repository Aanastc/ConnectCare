import { CaretRight } from 'phosphor-react'

export function ContratoInfos() {
  return (
    <form>
      <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
        <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
          <h1 className="text-2xl text-purple-400">Detalhes do Contrato</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Estado</p>
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
        <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
          <h1 className="text-2xl text-purple-400">Detalhes do Caso Clínico</h1>
        </div>
      </div>
    </form>
  )
}

import { CaretDown, CaretUp } from 'phosphor-react'
import { useState } from 'react'

export function Filtro() {
  const [isOpenEspecialidade, setIsOpenEspecialidade] = useState(false)
  const [selectedEspecialidade, setSelectedEspecialidade] = useState(null)
  const especialidades = [
    'Neonatal',
    'Internação',
    'Vacinas',
    'Idoso',
    'Paliativo',
    'Curativo',
    'Cadeirante',
    'Medicação'
  ]

  const handleToggleEspecialidade = () => {
    setIsOpenEspecialidade(!isOpenEspecialidade)
  }

  const handleEspecialidadeClick = especialidade => {
    setSelectedEspecialidade(especialidade)
    setIsOpenEspecialidade(false)
  }

  const [isOpenOrdernar, setIsOpenOrdernar] = useState(false)
  const [selectedOrdernar, setSelectedOrdernar] = useState(null)
  const ordernarPor = [
    'N º de atendimentos',
    'Avaliação',
    'Tipo de Atendimento',
    'Disponibilidade',
    'Localização'
  ]

  const handleToggleOrdernar = () => {
    setIsOpenOrdernar(!isOpenOrdernar)
  }

  const handleOrdernarClick = ordernar => {
    setSelectedOrdernar(ordernar)
    setIsOpenOrdernar(false)
  }

  return (
    <div className="border-purple-400 border-2 rounded-lg shadow-md w-full h-20 mb-4 flex items-center justify-around">
      <div className="pl-2 flex flex-col">
        <div className="text-sm text-gray-500 font-medium">
          Tipo de Atendimento
        </div>
        <div className="relative">
          <button
            type="button"
            className="font-bold text-left w-full flex flex-row gap-14"
            onClick={handleToggleEspecialidade}
          >
            {selectedEspecialidade || 'Selecione'}
            {isOpenEspecialidade ? (
              <CaretUp size={20} className="text-gray-400" />
            ) : (
              <CaretDown size={20} className="text-gray-400" />
            )}
          </button>
          {isOpenEspecialidade && (
            <ul className="absolute top-full left-0 z-10 mt-2 w-full border-purple-400 border-2 rounded-lg shadow-md bg-white max-h-32 overflow-auto">
              {especialidades.map(especialidade => (
                <li key={especialidade}>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-purple-400 hover:text-white focus:bg-purple-400 focus:text-white"
                    onClick={() => handleEspecialidadeClick(especialidade)}
                  >
                    {especialidade}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="h-16 border-r-2 border-neutral-400"></div>
      <div className="pl-2 flex flex-col">
        <div className="text-sm text-gray-500 font-medium">Localização</div>
        <input
          type="text"
          name="local"
          id="local"
          placeholder="Fortaleza,CE"
          className="placeholder:font-bold placeholder:text-black"
        />
      </div>
      <div className="h-16 border-r-2 border-neutral-400"></div>
      <div className="pl-2 flex flex-col">
        <label htmlFor="dia" className="text-sm text-gray-500 font-medium">
          Disponibilidade
        </label>
        <input type="date" id="dia" name="dia" className="font-bold" />
      </div>
      <div className="h-16 border-r-2 border-neutral-400"></div>
      <div className="relative">
        <button
          onClick={handleToggleOrdernar}
          className="border-purple-400 border rounded-lg p-2 flex flex-row gap-24 items-center"
        >
          <p className="text-sm text-purple-400">
            {selectedOrdernar || 'Ordenar por:'}
          </p>
          {isOpenOrdernar ? (
            <CaretUp size={22} color="#9063CD" />
          ) : (
            <CaretDown size={22} color="#9063CD" />
          )}
        </button>
        {isOpenOrdernar && (
          <ul className="border-purple-400 border-2 rounded-lg shadow-md bg-white absolute z-10 right-0 top-full w-full max-h-32 overflow-auto">
            {ordernarPor.map(ordernar => (
              <li key={ordernar}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-purple-400 hover:text-white focus:bg-purple-400 focus:text-white"
                  onClick={() => handleOrdernarClick(ordernar)}
                >
                  {ordernar}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

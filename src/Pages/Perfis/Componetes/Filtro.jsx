import { CaretDown, CaretUp } from 'phosphor-react'
import { useState } from 'react'

export function Filtro() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const options = ['meidco 1', 'enfermeira 2', 'Opção 3']
  const optionslocal = ['local 1', 'local 2', 'local 3']

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  const handleOrderByClick = (option) => {
  setOrderBy(option)
  setIsOpenOrderBy(false)
}


  return (
    <div className="border-purple-400 border-2 rounded-lg shadow-md w-full h-20 mb-4 flex items-center justify-center gap-10 p-2">
      <div className="pl-2 flex flex-col">
        <div className="text-sm text-gray-500 font-medium">Especialidade</div>
        <div className="relative">
          <button
            type="button"
            className="font-bold text-left w-full"
            onClick={handleToggle}
          >
            {selectedOption || 'Selecione'}
            {isOpen ? (
              <CaretUp size={20} className="ml-2 text-gray-400" />
            ) : (
              <CaretDown size={20} className="ml-2 text-gray-400" />
            )}
          </button>
          {isOpen && (
            <ul className="absolute top-full left-0 mt-2 w-full border-purple-400 border-2 rounded-lg shadow-md bg-white">
              {options.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-purple-400 hover:text-white focus:bg-purple-400 focus:text-white"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
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
      <label for="dia" className="text-sm text-gray-500 font-medium">
          Disponibilidade
        </label>
        <input type="date" id="dia" name="dia" className="font-bold" />
      </div>
      <div className="h-16 border-r-2 border-neutral-400"></div>
      <div className="border-purple-400 border rounded-lg p-2 flex flex-row gap-24 items-center">
        <p className="text-sm text-purple-400">Ordernar por:{}</p>
        <CaretDown size={22} color="#9063CD" />
      </div>
    </div>
  )
}


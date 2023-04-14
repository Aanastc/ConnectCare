import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

export function Filtro() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="border-purple-400 border-2 rounded-lg shadow-md w-full h-20 mb-4 flex items-center justify-center gap-10 p-2">
      <div className="pl-2 flex flex-col">
        <span className="text-sm text-gray-500 font-medium">Especialidade</span>
        <div className="flex flex-row items-center gap-14">
          <p className="font-bold">Selecione</p>
          <button onClick={handleToggle}>
            <CaretDown
              size={22}
              color="#9063CD"
              className="mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
          {/* pendente arrumar  */}
          {isOpen && (
            <ul>
              <li>Item 1</li>
            </ul>
          )}
        </div>
      </div>
      <div className="h-16 border-r-2 border-neutral-400"></div>
      <div className="pl-2 flex flex-col">
        <label htmlFor="local" className="text-sm text-gray-500 font-medium">
          Localização
        </label>
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

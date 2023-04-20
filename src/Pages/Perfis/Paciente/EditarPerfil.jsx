import { Eyedropper, Trash } from 'phosphor-react'
import Switch from 'react-switch'

import { useState } from 'react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { Conta } from '../Componetes/Conta'

const switches = [
  { id: 1, text: 'Faz uso de dispositivo invasivo', checked: false },
  { id: 2, text: 'Possui riscos cirúrgicos', checked: false },
  { id: 3, text: 'Tem alergia a algum medicamento', checked: false },
  { id: 4, text: 'Faz uso de medicamento controlado', checked: false },
  { id: 5, text: 'Possui alguma comorbidade', checked: false }
]

export function EditarPerfil() {
  const [isConta, setIsConta] = useState(true)
  const [switchState, setSwitchState] = useState(switches)

  function handleSwitchChange(id, checked) {
    const updatedSwitchState = switchState.map(item =>
      item.id === id ? { ...item, checked } : item
    )
    setSwitchState(updatedSwitchState)
  }

  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex justify-center flex-col p-3 border border-purple-500 rounded-lg items-center shadow-lg h-56 ">
          <img src={fotoPerfil} alt="" className="h-40 rounded-3xl mb-4" />
          <div className="flex flex-row gap-8">
            <Trash size={28} />
            <Eyedropper size={28} />
          </div>
        </div>
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
              onClick={() => setIsConta(true)}
              className={`font-bold ${isConta && 'text-purple-600'}`}
            >
              Conta
            </button>
            <button
              onClick={() => setIsConta(false)}
              className={`font-bold ${!isConta && 'text-purple-600'}`}
            >
              Dados Clinicos
            </button>
          </div>
          {isConta ? (
            <Conta />
          ) : (
            <>
              <div className="flex flex-row gap-8 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="peso" className="text-sm font-bold">
                    Peso
                  </label>
                  <input
                    id="peso"
                    type="text"
                    placeholder="Insira seu peso"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="altura" className="text-sm font-bold">
                    Altura
                  </label>
                  <input
                    id="altura"
                    type="text"
                    placeholder="Insira sua altura"
                    className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="grid grid-flow-col justify-stretch gap-12 mb-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor="" className="ml-2">
                      Asma
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor="" className="ml-2">
                      Bronquite
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor="" className="ml-2">
                      Pneumonia
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor="" className="ml-2">
                      Úlcera
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label htmlFor="" className="ml-2">
                      Outro:
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="outro" className="text-sm font-bold" />
                    <input
                      id="outro"
                      type="text"
                      placeholder="Anemia, Catapora, Diabetes...."
                      className="rounded-lg p-3 text-base placeholder:text-gray-400 bg-gray-200 w-80"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {switchState.map(item => (
                    <div className="flex flex-row items-center" key={item.id}>
                      <Switch
                        checked={item.checked}
                        onChange={checked =>
                          handleSwitchChange(item.id, checked)
                        }
                        onColor="#9063CD"
                        offColor="#D1D5DB"
                        handleDiameter={24}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        className="mr-2"
                      />
                      <p className="font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex flex-col">
                  <label htmlFor="motivo" className="block text-sm font-bold">
                    Motivo
                  </label>
                  <textarea
                    name="motivo"
                    id="motivo"
                    placeholder="Descreva o motivo do atendimento"
                    className="border-gray-300 border-2 rounded-lg p-3 h-36 text-base placeholder:text-gray-400 mt-2 resize-none"
                    style={{ verticalAlign: 'top' }}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-purple-500 text-white rounded-full h-10 w-64">
                  Salvar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

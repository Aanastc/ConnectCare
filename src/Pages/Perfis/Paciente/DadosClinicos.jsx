import { useState } from 'react'
import Switch from 'react-switch'
import { UserContext } from '../../../contexts/UserCtx'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../../../services/supabase'

const switches = [
  { id: 1, text: 'Faz uso de dispositivo invasivo', checked: false },
  { id: 2, text: 'Possui riscos cirúrgicos', checked: false },
  { id: 3, text: 'Tem alergia a algum medicamento', checked: false },
  { id: 4, text: 'Faz uso de medicamento controlado', checked: false }
]

export function DadosClinicos() {
  const [switchState, setSwitchState] = useState(switches)

  function handleSwitchChange(id, checked) {
    const updatedSwitchState = switchState.map(item =>
      item.id === id ? { ...item, checked } : item
    )
    setSwitchState(updatedSwitchState)
  }

  const { metadata } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  async function handlePaciente(data) {
    console.log(data)
    const { data: res, error } = await supabase
      .from('paciente')
      .update({
        peso: data.peso,
        altura: data.altura,
        comobirdades: data.comobirdades,
        casoClinico: data.motivo,
        cuidados: switchState
      })
      .eq('id', metadata?.id)

    console.log(res, error, metadata?.id)
  }

  return (
    <form onSubmit={handleSubmit(handlePaciente)}>
      <div className="flex flex-row gap-8 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="peso" className="text-sm font-bold">
            Peso
          </label>
          <input
            id="peso"
            type="text"
            {...register('peso')}
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
            {...register('altura')}
            className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-flow-col justify-stretch gap-12 mb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="asma"
              id="asma"
              {...register('comobirdades.asma')}
              className="w-4 h-4 accent-purple-600"
            />
            <label htmlFor="asma" className="ml-2">
              Asma
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="bronquite"
              id="bronquite"
              {...register('comobirdades.bronquite')}
              className="w-4 h-4 accent-purple-600"
            />
            <label htmlFor="bronquite" className="ml-2">
              Bronquite
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="pneumonia"
              id="pneumonia"
              {...register('comobirdades.pneumonia')}
              className="w-4 h-4 accent-purple-600"
            />
            <label htmlFor="pneumonia" className="ml-2">
              Pneumonia
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="ulcera"
              id="ulcera"
              {...register('comobirdades.ulcera')}
              className="w-4 h-4 accent-purple-600"
            />
            <label htmlFor="ulcera" className="ml-2">
              Úlcera
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="outro" className="text-sm font-bold">
              Outro:
            </label>
            <input
              id="outro"
              type="text"
              placeholder="Anemia, Catapora, Diabetes...."
              {...register('comobirdades.outro')}
              className="rounded-lg p-3 text-base placeholder:text-gray-400 bg-gray-200 w-80"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {switchState.map(item => (
            <div className="flex flex-row items-center" key={item.id}>
              <Switch
                checked={item.checked}
                onChange={checked => handleSwitchChange(item.id, checked)}
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
            {...register('motivo')}
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
    </form>
  )
}

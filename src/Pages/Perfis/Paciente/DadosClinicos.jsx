import { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { Controller, useForm } from 'react-hook-form'
import { useUser } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'

const comobirdades = [
  { label: 'Asma', value: 'asma' },
  { label: 'Bronquite', value: 'bronquite' },
  { label: 'Pneumonia', value: 'pneumonia' },
  { label: 'Úlcera', value: 'ulcera' }
]

const cuidados = [
  { label: 'Faz uso de dispositivo invasivo', value: 'dispositivo_invasivo' },
  { label: 'Possui riscos cirúrgicos', value: 'risco_cirurgico' },
  { label: 'Tem alergia a algum medicamento', value: 'alergia' },
  {
    label: 'Faz uso de medicamento controlado',
    value: 'medicamento_controlado'
  }
]

export function DadosClinicos() {
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const { register, handleSubmit, control, reset } = useForm()
  const { user, loading } = useUser()

  async function getDadosPaciente() {
    const {
      data: [paciente]
    } = await supabase.from('paciente').select('*').eq('id', user.id)

    if (!paciente) return

    reset({
      peso: paciente.peso,
      altura: paciente.altura,
      comobirdades: paciente.comobirdades,
      cuidados: paciente.cuidados,
      motivo: paciente.casoClinico
    })
  }

  async function handlePaciente(data) {
    setLoadingUpdate(true)

    await supabase
      .from('paciente')
      .update({
        peso: data.peso,
        altura: data.altura,
        comobirdades: data.comobirdades,
        cuidados: data.cuidados,
        casoClinico: data.motivo
      })
      .eq('id', user?.id)

    setLoadingUpdate(false)
  }

  useEffect(() => {
    if (loading) return

    getDadosPaciente()
  }, [user, loading])

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
          {comobirdades.map(item => (
            <div className="flex items-center" key={item.value}>
              <input
                id={item.value}
                type="checkbox"
                {...register(`comobirdades.${item.value}`)}
                className="w-4 h-4 accent-purple-600"
              />
              <label htmlFor={item.value} className="ml-2">
                {item.label}
              </label>
            </div>
          ))}
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
          {cuidados.map(item => (
            <Controller
              key={item.value}
              control={control}
              name={`cuidados.${item.value}`}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <>
                  <div className="flex flex-row items-center">
                    <Switch
                      checked={value}
                      onChange={onChange}
                      onColor="#9063CD"
                      offColor="#D1D5DB"
                      handleDiameter={24}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      className="mr-2"
                    />
                    <p className="font-medium">{item.label}</p>
                  </div>
                </>
              )}
            />
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
          {loadingUpdate ? (
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          ) : (
            'Salvar'
          )}
        </button>
      </div>
    </form>
  )
}

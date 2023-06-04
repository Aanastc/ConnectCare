import { useState, useEffect } from 'react'
import { supabase } from '../../../services/supabase'
import { useParams } from 'react-router-dom'
import { format, parseISO, differenceInYears } from 'date-fns'

const comorbidadesData = [
  { label: 'Asma', value: 'asma' },
  { label: 'Bronquite', value: 'bronquite' },
  { label: 'Pneumonia', value: 'pneumonia' },
  { label: 'Úlcera', value: 'ulcera' }
]

export function PerfilPaciente() {
  const [isConta, setIsConta] = useState(true)
  const [paciente, setPaciente] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function getPaciente() {
      const { data, error } = await supabase
        .from('contrato')
        .select(
          `
          diagnostico,
          horario,
          dias_semana,
          paciente (
            casoClinico,
            peso,
            comobirdades,
            altura,
            profiles (
              id,
              name,
              birthdate,
              avatarPath
            )
          )
        `
        )
        .eq('paciente_id', id)
        .limit(1)
        .single()

      if (error) {
        console.log('Erro ao buscar paciente:', error)
        return
      }

      if (data) {
        const pacienteData = data

        const birthdate = parseISO(pacienteData.paciente.profiles.birthdate)
        const age = calculateAge(birthdate)

        const updatedPaciente = {
          ...pacienteData,
          paciente: {
            ...pacienteData.paciente,
            profiles: {
              ...pacienteData.paciente.profiles,
              age: age,
              formattedBirthdate: formatBirthdate(birthdate)
            }
          }
        }

        setPaciente(updatedPaciente)
      }
    }

    getPaciente()
  }, [id])

  const calculateAge = birthdate => {
    const ageDiff = Date.now() - birthdate.getTime()
    const ageDate = new Date(ageDiff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const formatBirthdate = birthdate => {
    const formattedBirthdate = format(birthdate, 'dd/MM/yyyy')
    const age = differenceInYears(new Date(), birthdate)
    return `${formattedBirthdate} - ${age} anos`
  }

  if (!paciente) {
    return <div>Carregando...</div>
  }

  const { profiles, casoClinico, peso, altura, comobirdades } =
    paciente.paciente
  const { diagnostico, horario, dias_semana } = paciente

  const formattedComobirdades = comobirdades
    ? Object.entries(comobirdades)
        .filter(([, value]) => value)
        .map(([key]) => {
          const comorbidade = comorbidadesData.find(item => item.value === key)
          return comorbidade ? comorbidade.label : ''
        })
        .filter(Boolean)
        .join(', ')
    : ''

  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex justify-center flex-col p-4 border border-purple-500 rounded-lg items-center shadow-lg h-60 w-48">
          <img
            src={profiles.avatarPath}
            alt={profiles.name}
            className="h-40 w-36 rounded-3xl m-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-purple-900 uppercase">
              {profiles.name}
            </h3>
            <p className="text-gray-500 mt-2">{profiles.formattedBirthdate}</p>
          </div>
        </div>
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg w-full sm:w-[880px]">
          <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
            <button
              onClick={() => setIsConta(true)}
              className={`font-bold ${isConta && 'text-purple-600'}`}
            >
              Prontuário
            </button>
            <button
              onClick={() => setIsConta(false)}
              className={`font-bold ${!isConta && 'text-purple-600'}`}
            >
              Dados Contrato
            </button>
          </div>
          {isConta ? (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">Nome:</h3>
                <p>{profiles.name}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Idade:
                </h3>
                <p>{profiles.age}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Caso Clínico:
                </h3>
                <p>{casoClinico}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">Peso:</h3>
                <p>{peso}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Altura:
                </h3>
                <p>{altura}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Comorbidades:
                </h3>
                <p>{formattedComobirdades}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Diagnóstico:
                </h3>
                <p>{diagnostico}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Horário:
                </h3>
                <p>{horario}</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900">
                  Dias da Semana:
                </h3>
                <p>{dias_semana.join(' - ')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

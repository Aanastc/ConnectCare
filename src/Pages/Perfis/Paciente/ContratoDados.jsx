import { Check } from 'phosphor-react'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useParams } from 'react-router-dom'
import { useUser } from '../../../contexts/UserCtx'
import { supabase } from '../../../services/supabase'
import { ContratoInfos } from './ContratoInfos'
import { DadosCobranca } from './DadosCobranca'
import { Pagamento } from './Pagamento'

export function ContratoDados() {
  const [showModal, setShowModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const methods = useForm()
  const { id } = useParams()
  const { user } = useUser()

  async function handleSubmit(data) {
    await supabase.from('contrato').insert({
      horario: 'Integral',
      pernoite: 'Sim',
      periodo_inicial: data.periodo_inicial,
      periodo_final: data.periodo_final,
      dias_semana: ['Segunda', 'Quarta', 'Sexta'],
      diagnostico: data.diagnostico,
      descricao: data.descricao,
      profissinal_id: id,
      paciente_id: user?.id
    })

    setShowModal(true)
  }

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ContratoInfos
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )
      case 2:
        return (
          <DadosCobranca
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
          />
        )
      case 3:
        return (
          <Pagamento
            onNextStep={handleNextStep}
            onPreviousStep={handlePreviousStep}
            onSubmit={handleSubmit}
          />
        )
      default:
        return null
    }
  }

  const steps = [
    { number: 1, label: 'Step 1: Dados do Contrato' },
    { number: 2, label: 'Step 2: Dados de Cobrança' },
    { number: 3, label: 'Step 3: Pagamento' }
  ]

  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-10 mb-4">
        <div className="flex flex-row">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="w-48 bg-purple-600 h-0.5 my-7"></div>
              )}
              <div
                className={`relative ${
                  currentStep > index + 1
                    ? 'text-purple-600'
                    : 'text-purple-600'
                }`}
              >
                <div className="flex flex-col items-center">
                  {currentStep > index + 1 && (
                    <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full w-14 h-14">
                      <Check size={30} color="#fff" weight="fill" />
                    </div>
                  )}
                  <div
                    className={`bg-purple-400 rounded-full text-white flex items-center justify-center w-14 h-14 ${
                      currentStep === index + 1 ? 'bg-purple-600' : ''
                    }`}
                  >
                    {currentStep === index + 1 ? step.number : ''}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <FormProvider {...methods}>{renderStepContent()}</FormProvider>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-purple-100 outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="text-slate-500 font-medium text-lg">
                    PARABÉNS!!!
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Nós da Connect Care agradecemos a confiança. <br />
                    Sua solicitação foi enviada com sucesso, você pode encontrar
                    informações sobre o status dela na barra lateral.
                  </p>
                </div>
                <div className="flex justify-end p-2">
                  <NavLink to="/Paciente/visaoGeral">
                    <button
                      className="bg-purple-500 text-white rounded-full h-10 w-64"
                      onClick={() => setShowModal(false)}
                    >
                      Voltar para home
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

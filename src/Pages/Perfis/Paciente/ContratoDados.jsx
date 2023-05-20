import React, { useState } from 'react'
import { ContratoInfos } from './ContratoInfos'
import { DadosCobranca } from './DadosCobranca'
import { Pagamento } from './Pagamento'
import { Check } from 'phosphor-react'

export function ContratoDados() {
  const [currentStep, setCurrentStep] = useState(1)

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
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="flex flex-row">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="w-48 bg-purple-600 h-0.5 my-4"></div>
              )}
              <div className="flex flex-col items-center">
                <div
                  className={`relative ${
                    currentStep > index + 1
                      ? 'text-green-500'
                      : 'text-purple-600'
                  }`}
                >
                  {currentStep > index + 1 && (
                    <Check
                      size={24}
                      color="#fff"
                      weight="fill"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  )}
                  <div
                    className={`bg-purple-600 rounded-full text-white flex items-center justify-center w-8 h-8 ${
                      currentStep === index + 1 ? 'bg-green-500' : ''
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
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Pagamento({ onPreviousStep }) {
  const [showModal, setShowModal] = useState(false)

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  if (setShowModal == true) {
    setStatus({
      type: 'success',
      mensagem: 'Solicitação enviada!'
    })
    return
  }

  return (
    <main>
      <button
        className="bg-purple-500 text-white rounded-full h-10 w-64"
        onClick={onPreviousStep}
      >
        Anterior
      </button>
      <button
        className="bg-purple-500 text-white rounded-full h-10 w-64"
        onClick={() => setShowModal(true)}
      >
        Enviar
      </button>
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
    </main>
  )
}

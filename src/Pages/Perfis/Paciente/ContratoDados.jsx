import { useState } from 'react'
import { ContratoInfos } from './ContratoInfos'
import { Pagamento } from './Pagamento'

export function ContratoDados() {
  const [isContratoDado, setIsContratoDado] = useState(true)
  const [isPagamento, setIsPagamento] = useState(false)

  return (
    <div className="max-w-xl mx-auto my-4 border-b-2 pb-4">
      <div className="flex pb-3">
        <div className="flex-1"></div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white text-center w-full">
              <i className="fa fa-check w-full fill-current white"></i>
            </span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
            <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-green mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white text-center w-full">
              <i className="fa fa-check w-full fill-current white"></i>
            </span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
            <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-grey-darker text-center w-full">3</span>
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
            <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded "></div>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-grey-darker text-center w-full">4</span>
          </div>
        </div>

        <div className="flex-1"></div>
      </div>

      <div className="flex text-xs content-center text-center">
        <div className="w-1/4">Invitation received</div>

        <div className="w-1/4">Personal details</div>

        <div className="w-1/4">Application details</div>

        <div className="w-1/4">Confirmation</div>
      </div>
    </div>
    // <main>
    //   <div classNameName="flex flex-row gap-6 mb-4 justify-center">
    //     <div classNameName="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
    //       <div classNameName="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
    //         <button
    //           onClick={() => {
    //             setIsContratoDado(true)
    //             setIsPagamento(false)
    //           }}
    //           classNameName={`font-bold ${
    //             isContratoDado && !isPagamento ? 'text-purple-600' : ''
    //           }`}
    //         >
    //           ContratoDado
    //         </button>
    //         <button
    //           onClick={() => {
    //             setIsContratoDado(false)
    //             setIsPagamento(true)
    //           }}
    //           classNameName={`font-bold ${
    //             !isContratoDado && isPagamento ? 'text-purple-600' : ''
    //           }`}
    //         >
    //           Informações
    //         </button>
    //         <button
    //           onClick={() => {
    //             setIsContratoDado(false)
    //             setIsPagamento(false)
    //           }}
    //           classNameName={`font-bold ${
    //             !isContratoDado && !isPagamento ? 'text-purple-600' : ''
    //           }`}
    //         >
    //           ContratoDado
    //         </button>
    //       </div>
    //       {isContratoDado ? <ContratoInfos /> : <Pagamento />}
    //     </div>
    //   </div>
    // </main>
  )
}

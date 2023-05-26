import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Pix from '../../../assets/icons/Pix.svg'

export function Pagamento({ onPreviousStep, onSubmit }) {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [boletoField, setBoletoField] = useState('')
  const [pagadorName, setPagadorName] = useState('')
  const [cpfCnpj, setCpfCnpj] = useState('')
  const { handleSubmit } = useFormContext()

  const handleInputChange = (e, stateSetter) => {
    stateSetter(e.target.value)
  }

  const handlePaymentMethodChange = method => {
    setPaymentMethod(method)
  }

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   if (paymentMethod === 'card') {
  //     console.log('Método de pagamento: Cartão')
  //     console.log('Número do Cartão:', cardNumber)
  //     console.log('Nome do Titular:', cardName)
  //     console.log('Data de Expiração:', expiryDate)
  //     console.log('CVV:', cvv)
  //   } else if (paymentMethod === 'boleto') {
  //     console.log('Método de pagamento: Boleto')
  //   } else if (paymentMethod === 'pix') {
  //     console.log('Método de pagamento: PIX')
  //   }

  //   setCardNumber('')
  //   setCardName('')
  //   setExpiryDate('')
  //   setCvv('')
  //   setPagadorName('')
  //   setCpfCnpj('')
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-8 pb-2 border-b-2 border-b-black mb-4">
        <h1 className="text-2xl text-purple-400">Pagamento</h1>
      </div>
      <div className="flex gap-8 mb-8">
        <div>
          <input
            type="radio"
            id="cardMethod"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => handlePaymentMethodChange('card')}
            className="hidden"
          />
          <label
            htmlFor="cardMethod"
            className={`label-role flex flex-col items-center p-4 bg-purple-100 rounded-lg cursor-pointer w-80 h-80 border-2 ${
              paymentMethod === 'card'
                ? 'border-purple-200'
                : 'border-purple-100'
            } hover:bg-purple-200 hover:border-purple-200`}
          >
            <span className="text-lg font-bold text-purple-500 uppercase text-center mb-2">
              Crédito
            </span>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="text-sm font-bold">
                Número do Cartão:
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={e => handleInputChange(e, setCardNumber)}
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cardName" className="text-sm font-bold">
                Nome do Titular:
              </label>
              <input
                type="text"
                id="cardName"
                value={cardName}
                onChange={e => handleInputChange(e, setCardName)}
                className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                placeholder="Nome Sobrenome"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label htmlFor="expiryDate" className="text-sm font-bold">
                  Data de Vencimento:
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={e => handleInputChange(e, setExpiryDate)}
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                  placeholder="MM/AA"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label htmlFor="cvv" className="text-sm font-bold">
                  CVV:
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={e => handleInputChange(e, setCvv)}
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                  placeholder="123"
                />
              </div>
            </div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="boletoMethod"
            name="paymentMethod"
            value="boleto"
            checked={paymentMethod === 'boleto'}
            onChange={() => handlePaymentMethodChange('boleto')}
            className="hidden"
          />
          <label
            htmlFor="boletoMethod"
            className={`label-role flex flex-col items-center p-4 bg-purple-100 rounded-lg cursor-pointer w-80 h-80 border-2 ${
              paymentMethod === 'boleto'
                ? 'border-purple-200'
                : 'border-purple-100'
            } hover:bg-purple-200 hover:border-purple-200`}
          >
            <span className="text-lg font-bold text-purple-500 uppercase text-center mb-2">
              Boleto
            </span>
            <div className="max-h-36">
              <div className="mb-4">
                <label htmlFor="pagadorName" className="text-sm font-bold">
                  Nome do Pagador:
                </label>
                <input
                  type="text"
                  id="pagadorName"
                  value={pagadorName}
                  onChange={e => handleInputChange(e, setPagadorName)}
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                  placeholder="Nome do Pagador"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cpfCnpj" className="text-sm font-bold">
                  CPF / CNPJ:
                </label>
                <input
                  type="text"
                  id="cpfCnpj"
                  value={cpfCnpj}
                  onChange={e => handleInputChange(e, setCpfCnpj)}
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-full focus:outline-none focus:border-purple-500 placeholder:text-gray-400"
                  placeholder="CPF ou CNPJ"
                />
              </div>
            </div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="pixMethod"
            name="paymentMethod"
            value="pix"
            checked={paymentMethod === 'pix'}
            onChange={() => handlePaymentMethodChange('pix')}
            className="hidden"
          />
          <label
            htmlFor="pixMethod"
            className={`label-role flex flex-col items-center p-4 bg-purple-100 rounded-lg cursor-pointer w-80 h-80 border-2 ${
              paymentMethod === 'pix'
                ? 'border-purple-200'
                : 'border-purple-100'
            } hover:bg-purple-200 hover:border-purple-200`}
          >
            <span className="text-lg font-bold text-purple-500 uppercase text-center mb-2">
              PIX
            </span>
            <div className="max-h-36">
              <label htmlFor="pixPayment">
                <img src={Pix} alt="Faça um pix pra mim" className="w-60" />
              </label>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-purple-500 text-white rounded-full h-10 w-64"
          onClick={onPreviousStep}
        >
          Anterior
        </button>
        <button
          type="submit"
          className="bg-purple-500 text-white rounded-full h-10 w-64"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

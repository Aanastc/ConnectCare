import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlass } from 'phosphor-react'

export function Sac() {
  const [isPaciente, setIsPaciente] = useState(true)

  return (
    <>
      <Header />
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-6 mt-2">
          Oi! Como podemos ajudar?
        </h1>
        <form className="w-2/3 flex justify-center items-center mb-4">
          <div class="relative">
            <span class="absolute p-2 insert-y-0">
              <MagnifyingGlass size={22} color="#98A6A5" alt="Search Icon" />
            </span>
            <input
              type="search"
              class="bg-gray-100 text-gray-500 rounded-lg drop-shadow-lg w-full px-8 py-1 focus:outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
        <div className="w-[960px]">
          <div className="flex border-b-2 border-b-purple-600 gap-4 mb-2">
            <button
              onClick={() => setIsPaciente(true)}
              className={`font-bold ${isPaciente && 'text-purple-600'}`}
            >
              Paciente
            </button>
            <button
              onClick={() => setIsPaciente(false)}
              className={`font-bold ${!isPaciente && 'text-purple-600'}`}
            >
              Profissional
            </button>
          </div>
          <div className="container mb-4 w-[960px]">
            <h2 className="font-extrabold text-lg mb-1">Principais</h2>
            {isPaciente ? (
              <div className="flex flex-row gap-6">
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    Tenho que pagar algum valor a mais ao profissional do que
                    foi acordado no aplicativo?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    Não. Nada deve ser pago e nem cobrado fora do acordado.
                    Qualquer cobrança adicional virá através do aplicativo,
                    nunca através do profissional.
                  </p>
                </div>
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    Como faço pra ver as referências do profissional?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    No perfil do profissional, na aba “Referências”.
                  </p>
                </div>
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    Olá. Uma dúvida: como posso cancelar esse serviço?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    Conforme o contrato assinado entre as partes. Existem
                    contratos com períodos definidos e contratos com
                    cancelamento unilateral e que pode ser feito a qualquer
                    momento com aviso prévio.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-3">
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    O que posso fazer caso não queira mais continuar o
                    atendimento?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    Você pode tentar entrar em um acordo com o paciente, feito
                    isso, abriremos a possibilidade de enviar um outro
                    profissional. Caso não entrem em acordo, sugerimos que as
                    partes sigam o que tem no contrato.
                  </p>
                </div>
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    Quanto tempo levará para ficar pronto o relatório da minha
                    checagem de currículo?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    Você só precisa subir todos os certificados para comprovar a
                    veracidade do currículo. Uma vez aprovadas, vamos prosseguir
                    com a sua checagem, pode levar cerca de 10 dias úteis.
                  </p>
                </div>
                <div className="text-left basis-1/3 gap-2 w-80">
                  <a className="underline font-semibold" href="#">
                    Como faço para receber o meu pagamento?
                  </a>
                  <p className="font-light max-h-32 truncate">
                    O pagamento é feito através de acordo com o cliente, podendo
                    ser, pix ou dinheiro. A Connect Care se responsabiliza pelo
                    contrato entre as partes.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="m-8 flex gap-2 items-end justify-end">
            <p className="font-light text-sm">Não encontrou sua dúvida?</p>
            <Link
              to="/FaleConosco"
              className="text-sm font-semibold bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-800"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

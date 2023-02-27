import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlass } from 'phosphor-react'

export function Sac() {
  const [isPaciente, setIsPaciente] = useState(true);

  return (
    <main>
      <Header />
      <div className="container flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-6 mt-2">Oi! Como podemos ajudar?</h1>
        <form className='w-2/3 flex justify-center items-center'>
          <div class="relative">
            <span class="absolute p-2 insert-y-0">
              <MagnifyingGlass size={22} color="#98A6A5" alt="Search Icon" />
            </span>
            <input type="search" class="bg-gray-100 text-gray-500 rounded-lg drop-shadow-lg w-full px-8 py-1 focus:outline-none" placeholder="Buscar" />
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
          <div className="mb-4">
            <h2 className="font-extrabold text-lg">Principais</h2>
            {isPaciente ? (
              <div className="flex flex-row gap-6">
                <a href="" className="h-24 basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    Tenho que pagar algum valor a mais ao profissional do que
                    foi acordado no aplicativo?
                  </span>
                  <br />
                  <span className="font-light h-24 overflow-hidden text-ellipsis ">
                    Não. Nada deve ser pago e nem cobrado fora do acordado.
                    Qualquer cobrança adicional virá através do aplicativo,
                    nunca através do profissional.
                  </span>
                </a>
                <a href="" className="basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    Como faço pra ver as referências do profissional?
                  </span>
                  <br />
                  <span className="font-light">
                    No perfil do profissional, na aba “Referências”.
                  </span>
                </a>
                <a href="" className="basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    Olá. Uma dúvida: como posso cancelar esse serviço?
                  </span>
                  <br />
                  <span className="font-light">
                    Conforme o contrato assinado entre as partes. Existem
                    contratos com períodos definidos e contratos com
                    cancelamento unilateral e que pode ser feito a qualquer
                    momento com aviso prévio.
                  </span>
                </a>
              </div>
            ) : (
              <div className="flex flex-row gap-3">
                <a href="" className="basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    O que posso fazer caso não queira mais continuar o
                    atendimento?
                  </span>
                  <br />
                  <span className="font-light">
                    Você pode tentar entrar em um acordo com o paciente, feito
                    isso, abriremos a possibilidade de enviar um outro
                    profissional. Caso não entrem em acordo, sugerimos que as
                    partes sigam o que tem no contrato.
                  </span>
                </a>
                <a href="" className="basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    Quanto tempo levará para ficar pronto o relatório da minha
                    checagem de currículo?
                  </span>
                  <br />
                  <span className="font-light">
                    Você só precisa subir todos os certificados para comprovar a
                    veracidade do currículo. Uma vez aprovadas, vamos prosseguir
                    com a sua checagem, pode levar cerca de 10 dias úteis.
                  </span>
                </a>
                <a href="" className="basis-1/3 gap-2">
                  <span className="underline font-semibold">
                    Como faço para receber o meu pagamento?
                  </span>
                  <br />
                  <span className="font-light">
                    O pagamento é feito através de acordo com o cliente, podendo
                    ser, pix ou dinheiro. A Connect Care se responsabiliza pelo
                    contrato entre as partes.
                  </span>
                </a>
              </div>
            )}
          </div>
          <div className="m-6 flex gap-2 items-end justify-end">
            <p className="font-thin text-sm">Não encontrou sua dúvida?</p>
            <Link
              to="/FaleConosco"
              className="text-sm font-semibold bg-purple-600 text-white p-1 rounded-lg hover:bg-purple-800"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

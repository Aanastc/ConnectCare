import ImgHome from '../assets/imgs/img-home.png'
import ImgSobre from '../assets/imgs/img-sobre.png'
import fotoPerfil from '../assets/imgs/fotoPerfil.png'
import fotoPerfil2 from '../assets/imgs/fotoPerfil2.png'
import ImgFaleConosco from '../assets/imgs/img-faleConosco.png'
import foto1 from '../assets/icons/1.svg'
import foto2 from '../assets/icons/2.svg'
import foto3 from '../assets/icons/3.svg'
import foto4 from '../assets/icons/4.svg'

import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

import { Star, MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'

export function Home() {
  const [isPaciente, setIsPaciente] = useState(true)

  return (
    <main>
      <Header />
      <section
        className="max-w-[1120px] m-auto py-5 flex justify-between items-center"
        id="section-1"
      >
        <div className="grid grid-cols-2 gap-36">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-5xl font-bold leading-snug">
                Cuidamos de vidas conectando pacientes e profissionais da saúde.
              </h1>
              <p className="leading-snug">
                Percebemos, cada vez mais, que o consenso sobre a necessidade de
                qualificação apresenta tendências no sentido de aprovar a
                manutenção do sistema de formação de quadros que corresponde às
                necessidades.
              </p>
            </div>
            <div className="text-center py-2 flex gap-4">
              <a href="https://play.google.com/store/games?hl=pt_BR&gl=US">
                <img
                  width={180}
                  src="https://logodownload.org/wp-content/uploads/2017/04/disponivel-google-play-badge-1.png"
                  alt="Dowload-Android"
                />
              </a>
              <a href="https://www.apple.com/br/app-store/">
                <img
                  width={180}
                  src="https://logodownload.org/wp-content/uploads/2017/05/disponivel-na-app-store-botao-1.png"
                  alt="Dowload-IOS"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={ImgHome} alt="Imagem-Home" />
          </div>
        </div>
      </section>
      <section
        className="max-w-[1120px] m-auto py-5 flex justify-between items-center"
        id="section-2"
      >
        <div>
          <h3 className="text-3xl font-bold mb-4">Nossos Serviços</h3>
          <div className="flex gap-8">
            <div className="rounded-xl bg-purple-200 flex flex-col items-center w-50">
              <div className="max-h-48">
                <img src={foto1} className="h-44" />
              </div>
              <div className="px-5 py-3">
                <h4 className="text-lg font-semibold">
                  Acompanhamento hospitalar
                </h4>
                <p className="text-sm font-normal text-gray-700">
                  Por meio desse serviço, nosso profissionais ocupariam o cargo
                  de acompanhante em caso de internação ou exames e
                  até mesmo consulta.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-purple-200 flex flex-col items-center w-50">
              <div className="max-h-48">
                <img src={foto4} className="h-44" />
              </div>
              <div className="px-5 py-3">
                <h4 className="text-lg font-semibold">Cuidador</h4>
                <p className="text-sm font-normal text-gray-700">
                  Com o serviço de cuidador disponível na plataforma, os
                  pacientes podem ter acesso a uma gama de cuidados, incluindo
                  ajuda com a higiene pessoal, alimentação, mobilidade e
                  monitoramento de sinais vitais, entre outros. Por sua vez, os
                  profissionais de saúde têm a oportunidade de prestar um
                  atendimento mais personalizado e eficaz, melhorando a
                  qualidade do cuidado oferecido aos pacientes.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-purple-200 flex flex-col items-center w-50">
              <div className="max-h-48">
                <img src={foto2} className="h-44" />
              </div>
              <div className="px-5 py-3">
                <h4 className="text-lg font-semibold">Procedimentos Básicos</h4>
                <p className="text-sm font-normal text-gray-700">
                  Oferecemos serviços de curativos de todos os tipos, aplicação
                  de medicamentos, entre outros serviços básicos relacionados ao
                  cuidado e bem estar do paciente.
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-purple-200 flex flex-col items-center w-50">
              <div className="max-h-48">
                <img src={foto3} className="h-44" />
              </div>
              <div className="px-5 py-3">
                <h4 className="text-lg font-semibold">Outros</h4>
                <p className="text-sm font-normal text-gray-700">
                  Temos profissionais das áreas de geriatras, fisioterapia,
                  doula entre outras diversas especialidades que podem lhe
                  proporcionar serviços extras, tudo através do nosso
                  aplicativo. Clique na opção “Outros” no menu principal e veja
                  o que podemos lhe oferecer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-[1120px] m-auto py-5 flex justify-between items-center"
        id="section-3"
      >
        <div className="grid grid-cols-2 gap-36">
          <div className="flex justify-center">
            <img src={ImgSobre} alt="Imagem-Home" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <h2 className="font-bold text-3xl">Quem Somos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              ipsum maiores consequuntur ullam possimus explicabo similique
              optio quam. Debitis iusto totam praesentium veritatis nemo dolorum
              laudantium modi mollitia architecto soluta. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Vitae velit excepturi
              cupiditate molestiae quos aliquid labore incidunt, reprehenderit
              maiores sequi, nam dolor voluptates. Laudantium illum quod
              possimus minus corrupti ducimus?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione recusandae ducimus maxime
              perferendis, sapiente minus modi neque sed non libero possimus
              quisquam facilis explicabo nisi, praesentium ad, esse a at?
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1120px] m-auto py-5 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold mb-4">
            O que as pessoas dizem do nosso sistema:
          </h3>
          <div className="flex gap-8">
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <img
                  src={fotoPerfil2}
                  alt="Foto de uma mulher de cabelo preto sorrindo com polegares para cima"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div class="flex w-full flex-col gap-0.5">
                  <div class="flex items-center justify-between">
                    <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Maria Madalena
                    </h5>
                    <div class="5 flex items-center gap-0">
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 p-0">
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  "O sistema trouxa uma facilidade enorme para minha vida, a
                  dois meses sofri um acidente de moto e tenho no total 5
                  curativos que precisam ser trocados diaramente. eu não
                  encontrava nenhuma enfermeira para fazer em casa, até que uma
                  amiga me falou do Connect Care. O aplicativo trouxe a
                  comodiade de poder fazer o curativo sem precisar sair de casa
                  para o posto todos os dias, além de terem profissionais
                  competentes e de qualidade o sistema tem uma grande facilidade
                  de uso. Obrigada!"
                </p>
              </div>
            </div>
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  alt="candice wu"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div class="flex w-full flex-col gap-0.5">
                  <div class="flex items-center justify-between">
                    <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Candice Wu
                    </h5>
                    <div class="5 flex items-center gap-0">
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 p-0">
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  "profissionais qualificados e atenciosos."
                </p>
              </div>
            </div>
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <img
                  src={fotoPerfil}
                  alt="Foto de uma mulher de cabelo preto sorrindo"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div class="flex w-full flex-col gap-0.5">
                  <div class="flex items-center justify-between">
                    <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      Ana Vitoria
                    </h5>
                    <div class="5 flex items-center gap-0">
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                      <Star size={22} color="#e2d118" weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-6 p-0">
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  "Tive dificuldade na hora do pagamento e fui muito bem
                  atendida pelo atendente. Além da excelencia do cuidado da
                  enfermeira com meu pai."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="max-w-[1120px] m-auto py-5 flex justify-between items-center mb-4"
        id="section-4"
      >
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
            <div className="container mb-4 max-w-[960px]">
              <h2 className="font-extrabold text-lg mb-1">Principais</h2>
              {isPaciente ? (
                <div className="flex gap-6">
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      Tenho que pagar algum valor a mais ao profissional do que
                      foi acordado no aplicativo?
                    </a>
                    <p className="font-light max-h-16 line-clamp-1">
                      Não. Nada deve ser pago e nem cobrado fora do acordado.
                      Qualquer cobrança adicional virá através do aplicativo,
                      nunca através do profissional.
                    </p>
                  </div>
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      Como faço pra ver as referências do profissional?
                    </a>
                    <p className="font-light max-h-16 line-clamp-2">
                      No perfil do profissional, na aba “Referências”.
                    </p>
                  </div>
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      Olá. Uma dúvida: como posso cancelar esse serviço?
                    </a>
                    <p className="font-light max-h-16 line-clamp-2">
                      Conforme o contrato assinado entre as partes. Existem
                      contratos com períodos definidos e contratos com
                      cancelamento unilateral e que pode ser feito a qualquer
                      momento com aviso prévio.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row gap-3">
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      O que posso fazer caso não queira mais continuar o
                      atendimento?
                    </a>
                    <p className="font-light max-h-16 line-clamp-2">
                      Você pode tentar entrar em um acordo com o paciente, feito
                      isso, abriremos a possibilidade de enviar um outro
                      profissional. Caso não entrem em acordo, sugerimos que as
                      partes sigam o que tem no contrato.
                    </p>
                  </div>
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      Quanto tempo levará para ficar pronto o relatório da minha
                      checagem de currículo?
                    </a>
                    <p className="font-light max-h-16 line-clamp-2">
                      Você só precisa subir todos os certificados para comprovar
                      a veracidade do currículo. Uma vez aprovadas, vamos
                      prosseguir com a sua checagem, pode levar cerca de 10 dias
                      úteis.
                    </p>
                  </div>
                  <div className="text-left flex flex-col max-w-xs">
                    <a className="underline font-semibold" href="#">
                      Como faço para receber o meu pagamento?
                    </a>
                    <p className="font-light max-h-16 line-clamp-2">
                      O pagamento é feito através de acordo com o cliente,
                      podendo ser, pix ou dinheiro. A Connect Care se
                      responsabiliza pelo contrato entre as partes.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1120px] m-auto py-5 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-24">
          <div className="flex justify-center">
            <img
              src={ImgFaleConosco}
              alt="Imagem de uma personagem indicando a seção ao lado"
              className="items-center"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="justify-center items-center">
              <p className="mb-2 text-base font-semibold">
                Não encontrou sua dúvida?
              </p>
              <h2 className="font-bold text-2xl mb-2">Fale Conosco</h2>
            </div>
            <div>
              <form>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Nome
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Escreva seu nome aqui"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="lala123@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-gray-700 text-sm font-bold mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="p-2.5 w-full text-sm shadow border rounded focus:outline-none focus:shadow-outline"
                    placeholder="Escreva sua Mensagem"
                  />
                </div>
              </form>
            </div>
            <div className="flex gap-2 items-end justify-end">
              <a className="text-lg font-semibold bg-purple-600 text-white px-4 py-1 rounded-lg hover:bg-purple-800">
                Enviar
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

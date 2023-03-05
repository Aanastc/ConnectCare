import ImgHome from '../assets/imgs/img-home.png'
import fotoPerfil from '../assets/imgs/fotoPerfil.png'
import fotoPerfil2 from '../assets/imgs/fotoPerfil2.png'
import { Star } from 'phosphor-react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

export function Home() {
  return (
    <main>
      <Header />
      <section className="max-w-[1120px] m-auto py-5 flex justify-between items-center">
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
                  atendida pelo atendentes. Além da excelencia do cuidado da
                  enfermeira com meu pai."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

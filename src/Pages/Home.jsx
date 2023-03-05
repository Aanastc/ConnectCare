import ImgHome from '../assets/imgs/img-home.png'
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
      <Footer />
    </main>
  )
}

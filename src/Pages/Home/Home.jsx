import Logo from '../../assets/icons/Logo.svg'
import ImgHome from '../../assets/imgs/img-home.png'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo
} from 'phosphor-react'

export function Home() {
  return (
    <main>
      <header className="container max-w-[1170px] m-auto py-5 flex justify-between items-center sticky top-0 bg-white">
        <div className="flex gap-8">
          <img src={Logo} alt="Logo" />
          <ul className="flex gap-2 items-center">
            <li>
              <a href="" className="font-bold py-2 px-4 hover:text-purple-600">
                Home
              </a>
            </li>
            <li>
              <a href="" className="font-bold py-2 px-4 hover:text-purple-600">
                Sobre
              </a>
            </li>
            <li>
              <a href="" className="font-bold py-2 px-4 hover:text-purple-600">
                Serviços
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <div>
            <input
              type="text"
              className="bg-gray-100 p-2 text-gray-500 mr-2 rounded-lg"
              placeholder="Buscar"
            />
          </div>
          <button className="font-bold text-purple-600 py-2 px-4 hover:text-purple-800 hover:bg-gray-100 rounded-full">
            Registrar
          </button>
          <button className="font-bold bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-800">
            Entrar
          </button>
        </div>
      </header>
      <section className="max-w-[1170px] m-auto py-5 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-36">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-5xl font-bold leading-snug mb-4">
                Cuidamos de vidas conectando pacientes e profissionais da saúde.
              </h1>
              <p className="leading-snug">
                Percebemos, cada vez mais, que o consenso sobre a necessidade de
                qualificação apresenta tendências no sentido de aprovar a
                manutenção do sistema de formação de quadros que corresponde às
                necessidades.
              </p>
            </div>
            <div className="text-center py-2">
              <img src="" alt="Dowload-Android" />
              <img src="" alt="Dowload-IOS" />
            </div>
          </div>
          <div className="flex justify-center	">
            <img src={ImgHome} alt="Imagem-Home" />
          </div>
        </div>
      </section>
      <footer>
        <div className="px-5 bg-violet-700 grid grid-cols-3">
          <div clasName="">
            <ul>
              <li>
                <a href="#" className="font-bold text-xl">
                  Connect Care
                </a>
              </li>
              <li>
                <a href="#">Site Institucional</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Carreiras</a>
              </li>
              <li>
                <a href="#">Connect Care Canadá</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" className="font-bold text-xl">
                  Outros
                </a>
              </li>
              <li>
                <a href="#">Segurança</a>
              </li>
              <li>
                <a href="#">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
              <li>
                <a href="#">Politicas de Privacidade</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-right">
              <p className="mb-2">Central de Atendimento: (70) 7070-7070</p>
              <p className="mb-0">Av. Jorgin Do Grau, 1111 - Edson Queiroz</p>
              <p> CEP 33678-950 - Fortaleza-CE Brasil</p>
            </div>
            <div>
              <a className="text-white">
                <WhatsappLogo size={16} />
              </a>
              <a></a>
              <a></a>
              <a></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

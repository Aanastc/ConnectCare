import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo
} from 'phosphor-react'

// melhorar responsividade:
export function Footer() {
  return (
    <>
      <footer className="relative w-full bg-violet-700">
        <div className="p-5 max-w-[1120px] m-auto grid grid-cols-3">
          <div className="text-white sm:flex-col">
            <ul>
              <li>
                <a href="#" className="font-semibold text-base">
                  Connect Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Site Institucional
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Connect Care Canadá
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white sm:flex-col">
            <ul>
              <li>
                <a href="#" className="font-semibold text-base">
                  Outros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Politicas de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white sm:flex-col">
            <div className="text-right font-thin">
              <p className="mb-2 text-sm">
                Central de Atendimento: (70) 7070-7070
              </p>
              <p className="mb-0 text-sm">
                Av. Jorgin Do Grau, 1111 - Edson Queiroz
              </p>
              <p className="mb-4 text-sm">
                {' '}
                CEP 33678-950 - Fortaleza-CE Brasil
              </p>
            </div>
            <div className="flex justify-end gap-4">
              <a className="text-white">
                <WhatsappLogo
                  size={24}
                  href="https://www.whatsapp.com/?lang=pt_br"
                />
              </a>
              <a className="text-white" href="https://pt-br.facebook.com/">
                <FacebookLogo size={24} />
              </a>
              <a className="text-white" href="https://twitter.com/">
                <TwitterLogo size={24} />
              </a>
              <a className="text-white" href="https://www.instagram.com/">
                <InstagramLogo size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

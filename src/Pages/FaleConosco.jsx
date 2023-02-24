import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import ImgFaleConosco from '../assets/imgs/img-faleConosco.png'

export function FaleConosco() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-2 gap-36">
        <div className="flex flex-col gap-6">
          <div className="items-center">
            <img
              src={ImgFaleConosco}
              alt="Imagem de uma personagem indicando a seção ao lado"
              className="items-center"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl items-center">Fale Conosco</h2>
          <form></form>
        </div>
      </div>
      <Footer />
    </section>
  )
}

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import ImgFaleConosco from '../assets/imgs/img-faleConosco.png'

export function FaleConosco() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-2 gap-36">
        <div className="flex flex-col justify-center gap-6">
          <div>
            <img src={ImgFaleConosco} alt="Imagem de uma personagem indicando a seção ao lado" />
          </div>
        </div>
        <div className='flex flex-row content-center'>
          <h2 className='font-bold text-3xl items-center'>Fale Conosco</h2>
          <form className='items-start'>
            <input type="text" />
            <label htmlFor="">Nome</label>
            <input type="email" />
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Mensagem</label>
          </form>
          <button>
            Enviar
          </button>
        </div>
      </div>
      <Footer />
    </section>
  )
}

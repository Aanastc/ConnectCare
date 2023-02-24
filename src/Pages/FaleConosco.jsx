import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import ImgFaleConosco from '../assets/imgs/img-faleConosco.png'

export function FaleConosco() {
  return (
    <main>
      <Header />
      <section className="max-w-[1170px] m-auto py-5 flex justify-between items-center">
        <div className="grid grid-cols-2 gap-36">
          <div className="flex justify-center	">
            <img
              src={ImgFaleConosco}
              alt="Imagem de uma personagem indicando a seção ao lado"
              className="items-center"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="justify-center items-center">
              <h2 className="font-bold text-3xl mb-2">Fale Conosco</h2>
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

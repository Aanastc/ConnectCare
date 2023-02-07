import Logo from '../../assets/icons/Logo.svg'
import ImgHome from '../../assets/imgs/img-home.png'

export function Home() {
    return (
        <main>
            <header className="container max-w-[1170px] m-auto py-5 flex justify-between items-center">
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
            <section className='container max-w-[1170px] m-auto py-5 flex justify-between items-center'>
                <div className='flex justify-around'>
                    <div className=''>
                        <h1 className='text-4xl font-bold mb-4'>Cuidamos de vidas conectando pacientes e profissionais da saúde.</h1>
                        <p className='text-xl'>
                            Percebemos, cada vez mais, que o consenso sobre a necessidade de qualificação apresenta tendências no sentido de aprovar a manutenção do sistema de formação de quadros que corresponde às necessidades.
                        </p>
                        <div className='text-center py-2'>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <img src={ImgHome} alt="Imagem-Home" />
                    </div>
                </div>
            </section>
        </main>
    )
}

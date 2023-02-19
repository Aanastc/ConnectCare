import Logo from '../assets/icons/Logo.svg'

export function Header() {
  return (
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
          <li>
            <a href="" className="font-bold py-2 px-4 hover:text-purple-600">
              SAC
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
  )
}

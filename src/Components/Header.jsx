import Logo from '../assets/icons/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  const baseNavLinkClassActive = 'font-bold py-2 px-4 text-purple-600'
  const baseNavLinkClass = 'font-bold py-2 px-4 hover:text-purple-600'

  return (
    <header className="container max-w-[1170px] m-auto py-5 flex justify-between items-center sticky top-0 bg-white mb-4">
      <div className="flex gap-8">
        <img src={Logo} alt="Logo" />
        {/* <List size={32} weight="light" /> */}
        <ul className="flex gap-2 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? baseNavLinkClassActive : baseNavLinkClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sobre"
              className={({ isActive }) =>
                isActive ? baseNavLinkClassActive : baseNavLinkClass
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <a href="" className="font-bold py-2 px-4 hover:text-purple-600">
              Serviços
            </a>
          </li>
          <li>
            <NavLink
              to="/SAC"
              className={({ isActive }) =>
                isActive ? baseNavLinkClassActive : baseNavLinkClass
              }
            >
              SAC
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
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

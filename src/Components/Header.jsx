import Logo from '../assets/icons/Logo.svg'
import { NavLink } from 'react-router-dom'
import React from 'react'
import { ModalUsuario } from '../Components/ModalUsuario'
import { List } from 'phosphor-react'

export function Header({ fixed }) {
  const baseNavLinkClassActive = 'font-bold py-2 px-4 text-purple-600'
  const baseNavLinkClass = 'font-bold py-2 px-4 hover:text-purple-600'

  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto lg:mx-28 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block">
            <img src={Logo} alt="Logo" className='mb-4'/>
            <button
              className="text-bg-purple-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <List size={32} weight="light" />
            </button>
          </div>
          <div
            className={
              'lg:flex justify-between flex-grow items-center ' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:items-center gap-2">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Sobre"
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Servicos"
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Serviços
                </NavLink>
              </li>
              <li className="nav-item">
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
            <ModalUsuario />
          </div>
        </div>
      </nav>
    </>
  )
}

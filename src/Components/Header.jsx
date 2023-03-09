import React from 'react'
import { NavLink } from 'react-router-dom'
import { List } from 'phosphor-react'
import Scrollspy from 'react-scrollspy'

import Logo from '../assets/icons/LogoRoxa.svg'

export function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const baseNavLinkClassActive = 'font-bold py-2 px-4 text-purple-600'
  const baseNavLinkClass = 'font-bold py-2 px-4 hover:text-purple-600'

  return (
    <>
      <nav className="sticky top-0 max-w-[1120px] m-auto flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 z-50">
        <div className="container mx-auto lg:mx-26 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block">
            <img src={Logo} alt="Logo" className="mb-4" />
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
            <Scrollspy
              items={['section-1', 'section-2', 'section-3', 'section-4']}
              className="flex flex-col items-center lg:flex-row list-none lg:items-center gap-2"
            >
              <li className="nav-item">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  Serviços
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? baseNavLinkClassActive : baseNavLinkClass
                  }
                >
                  SAC
                </NavLink>
              </li>
            </Scrollspy>
            <div className="flex justify-end gap-3">
              <NavLink
                className="font-bold bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-800"
                to="/auth/sign-in"
              >
                Entrar
              </NavLink>
              <NavLink
                className="font-bold text-purple-600 py-2 px-4 hover:text-purple-800 hover:bg-gray-100 rounded-full"
                to="/auth/sign-up"
              >
                Registrar
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

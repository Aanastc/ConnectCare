import Logo from '../assets/icons/Logo.svg'
import { NavLink } from 'react-router-dom'
import React from "react";
import { ModalUsuario } from '../Components/ModalUsuario'

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
            <NavLink
              to="/Servicos"
              className={({ isActive }) =>
                isActive ? baseNavLinkClassActive : baseNavLinkClass
              }
            >
              Serviços
            </NavLink>
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
      <ModalUsuario />
    </header>
  )
}

import { FacebookLogo, GoogleLogo } from 'phosphor-react'
import { NavLink, Outlet } from 'react-router-dom'

import Logo from '../assets/icons/Logo.svg'

export function Auth() {
  return (
    <>
      <div className="bg-purple-500">
        <main className="min-h-screen h-full grid grid-rows-[auto_1fr] mx-4">
          <div className="flex py-4">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="flex py-4 items-center justify-center">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

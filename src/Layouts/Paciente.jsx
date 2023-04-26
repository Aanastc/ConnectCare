import { HeaderApp } from '../Pages/Perfis/Componetes/HeaderApp'
import { NavLink, Outlet } from 'react-router-dom'
import { RequireAuth } from '../contexts/RequireAuth'

import {
  ArrowLeft,
  Stack,
  ChatCircleDots,
  CalendarCheck,
  ArrowRight
} from 'phosphor-react'
import logo from '../assets/icons/LogoRoxa.svg'
import { useState } from 'react'

export function Paciente() {
  const [open, setOpen] = useState(true)

  const LinkClassActive =
    'flex mb-4 gap-2 rounded-md cursor-pointer text-purple-500 text-sm items-center'
  const LinkClass =
    'flex mb-4 gap-2 rounded-md cursor-pointer text-black text-sm items-center'

  return (
    <RequireAuth>
      <HeaderApp />
      <>
        <nav
          className={`fixed inset-0 z-30 left-0 top-0 h-screen bg-slate-100 p-5 pt-8 duration-300 drop-shadow-md shadow-right ${
            open ? 'w-56' : 'w-24'
          }`}
        >
          {open ? (
            <>
              <div className="flex flex-row justify-start items-center gap-2 mb-4 p-2">
                <NavLink
                  to="/Paciente/visaoGeral"
                  className="flex flex-row items-center gap-2"
                >
                  <img
                    src={logo}
                    alt="logo roxa"
                    className={`cursor-pointer duration-500 ${
                      open && 'rotate-[360deg]'
                    }`}
                  />
                  <h1
                    className={`text-purple-600 font-medium text-lg duration-500 ${
                      !open && 'scale-50'
                    }`}
                  >
                    Connect Care
                  </h1>
                </NavLink>

                <button
                  className="absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full"
                  onClick={() => setOpen(false)}
                >
                  <ArrowLeft size={24} color="#9063cd" />
                </button>
              </div>
              <div>
                <ul className="p-3">
                  <>
                    <li>
                      <NavLink
                        to="/Paciente/visaoGeral"
                        className={({ isActive }) =>
                          isActive ? LinkClassActive : LinkClass
                        }
                      >
                        <Stack size={26} />
                        <p>Geral</p>
                      </NavLink>
                    </li>
                    <li className="flex flex-row gap-2 mb-4 rounded-md cursor-pointer hover:bg-light-white text-black text-sm items-center">
                      <CalendarCheck size={26} />
                      <p>Servicos</p>

                      <span
                        className={`${
                          !open && 'hidden'
                        } origin-left duration-500`}
                      ></span>
                    </li>
                    <li
                      className={`flex flex-row gap-2 rounded-md cursor-pointer hover:bg-light-white text-black text-sm items-center ${
                        !open && 'scale-50'
                      }`}
                    >
                      <ChatCircleDots size={26} />
                      <p>Chat</p>
                    </li>
                  </>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-row justify-start items-center gap-x-4 mb-4 p-2">
                <NavLink to="/Paciente/visaoGeral">
                  <img
                    src={logo}
                    alt="logo roxa"
                    className={`cursor-pointer duration-500 ${
                      open && 'rotate-[360deg]'
                    }`}
                  />
                </NavLink>
                <button
                  className="absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
              border-2 rounded-full"
                  onClick={() => setOpen(true)}
                >
                  <ArrowRight size={24} color="#9063cd" />
                </button>
              </div>
              <div>
                <ul className="p-3">
                  <>
                    <li>
                      <NavLink
                        to="/Paciente/visaoGeral"
                        className={({ isActive }) =>
                          isActive ? LinkClassActive : LinkClass
                        }
                      >
                        <Stack size={24} />
                      </NavLink>
                    </li>
                    <li className="flex flex-row mb-4 rounded-md cursor-pointer hover:bg-light-white text-black text-sm items-center ">
                      <CalendarCheck size={24} />

                      <span
                        className={`${
                          !open && 'hidden'
                        } origin-left duration-500`}
                      ></span>
                    </li>
                    <li className="flex flex-row rounded-md cursor-pointer hover:bg-light-white text-black text-sm items-center ">
                      <ChatCircleDots size={24} />
                    </li>
                  </>
                </ul>
              </div>
            </>
          )}
        </nav>
        <div className={`relative top-0 z-2 ${open ? 'ml-64' : 'ml-32'}`}>
          <Outlet />
        </div>
      </>
    </RequireAuth>
  )
}

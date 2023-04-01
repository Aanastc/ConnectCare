import {
  ArrowLeft,
  Stack,
  ChatCircleDots,
  CalendarCheck,
  ArrowRight
} from 'phosphor-react'
import logo from '../../../assets/icons/LogoRoxa.svg'
import { useState } from 'react'

export function Inicio() {
  const [open, setOpen] = useState(true)

  return (
    <nav
      className={`fixed left-0 top-0 h-screen bg-slate-50 p-3 transition-all duration-75 ${
        open ? 'w-56' : ''
      }`}
    >
      {open ? (
        <>
          <div className="flex flex-row justify-start items-center gap-2 mb-4">
            <img src={logo} alt="logo roxa" />
            <p className="text-lg text-purple-600 font-medium">Connect Care</p>
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
              <li className="flex flex-row gap-2 mb-4">
                <Stack size={24} />
                <p>Visao Geral</p>
              </li>
              <li className="flex flex-row gap-2 mb-4">
                <ChatCircleDots size={24} />
                <p>Chat</p>
              </li>
              <li className="flex flex-row gap-2">
                <CalendarCheck size={24} />
                <p>Servicos</p>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-start items-center gap-2 mb-4">
            <img src={logo} alt="logo roxa" />
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
              <li className="flex flex-row gap-2 mb-4">
                <Stack size={24} />
              </li>
              <li className="flex flex-row gap-2 mb-4">
                <ChatCircleDots size={24} />
              </li>
              <li className="flex flex-row gap-2">
                <CalendarCheck size={24} />
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

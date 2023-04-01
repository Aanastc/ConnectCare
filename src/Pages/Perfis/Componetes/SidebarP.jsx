import {
  ArrowLeft,
  Stack,
  ChatCircleDots,
  CalendarCheck,
  ArrowRight
} from 'phosphor-react'
import logo from '../../../assets/icons/LogoRoxa.svg'
import { useState } from 'react'

export function SidebarP() {
  const [open, setOpen] = useState(true)
  const Menus = [
  { title: "Visão Geral", src:"1"},
  { title: "Chat"},
  { title: "Serviços"},
  
];

  return (
    <nav
      className={`relative left-0 top-0 h-screen bg-slate-50 p-3 transition-all duration-300 ${
        open ? 'w-56' : 'w-20'
      }`}
    >
      {open ? (
        <>
          <div className="flex flex-row justify-start items-center gap-x-4 mb-4">
            <img src={logo} alt="logo roxa" className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'}`} />
            <h1
            className={`text-purple-600 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Connect Care
          </h1>
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
            {Menus.map((Menu, index) => (
              <>
                <li key={index} 
                className={`flex flex-row gap-2 mb-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                >
                  {/* <Stack size={24} />
                    <p>Geral</p>
                </li><li className="flex flex-row gap-2 mb-4">
                    <ChatCircleDots size={24} />
                    <p>Chat</p>
                </li><li className="flex flex-row gap-2">
                    <CalendarCheck size={24} />
                    <p>Servicos</p> */}
                    <img src={`./../../../assets/icons/${Menu.src}.svg`} />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {Menu.title}
                    </span>
                </li>
              </>
            ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-start items-center gap-2 mb-4 transition-all duration-300">
            <img src={logo} alt="logo roxa" className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'}`}/>
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
            {Menus.map((Menu, index) => (
              <>
                <li key={index} 
                className={`flex flex-row gap-2 mb-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                >
                {/* <Stack size={24} />
                    
                </li><li className="flex flex-row gap-2 mb-4">
                    <ChatCircleDots size={24} />
                    
                </li><li className="flex flex-row gap-2">
                    <CalendarCheck size={24} /> */}
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>   
                </li>
              </>
            ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

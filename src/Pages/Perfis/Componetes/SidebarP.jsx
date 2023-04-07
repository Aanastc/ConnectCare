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
 

  return (
    <nav
      className={`left-0 top-0 h-screen bg-slate-100 p-5 pt-8 relative duration-300 ${open ? 'w-72' : 'w-28'}`}
    >
      {open ? (
        <>
          <div className="flex flex-row justify-start items-center gap-x-4 mb-4 p-2">
            <img src={logo} alt="logo roxa" className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'}`} />
            <h1 className={`text-purple-600 origin-left font-medium text-xl duration-500 ${!open && "scale-50" }`}>Principal</h1>
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
                <li className={`flex gap-2 mb-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 ${!open && "scale-150" }`}>
                   <Stack size={24} />
                    <p>Geral</p>
                </li><li className={`flex flex-row gap-2 mb-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 ${!open && "scale-50" }`}>
                    <ChatCircleDots size={24} />
                    <p>Chat</p>
                </li><li className="flex flex-row gap-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                    <CalendarCheck size={24} />
                    <p>Servicos</p>
                    
                    <span className={`${!open && "hidden"} origin-left duration-500`}>                      
                    </span>
                </li>
              </>
            
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row justify-start items-center gap-x-4 mb-4 p-2">
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
            
              <>
                <li className={`flex flex-row gap-2 mb-4 p-2 cursor-pointer hover:bg-light-white text-black text-xs items-center gap-x-4`}>
                <Stack size={24} />
                    
                </li><li className="flex flex-row gap-2 mb-4 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                <ChatCircleDots size={24} />
                    
                </li><li className="flex flex-row gap-2 rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4">
                <CalendarCheck size={24} />

                <span className={`${!open && "hidden"} origin-left duration-500`}>
                  
                </span>   
                </li>
              </>
            
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

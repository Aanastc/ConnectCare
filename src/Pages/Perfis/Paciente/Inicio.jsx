
import logo from '../../../assets/icons/LogoRoxa.svg'
import { ArrowLeft, Stack, ChatCircleDots, CalendarCheck } from 'phosphor-react'


  
export function Inicio() {
  
  return (
    <nav className={'w-56 fixed left-0 top-0 h-screen bg-slate-50 p-3'} >
      {/*<HeaderApp/>*/}
       <div className='flex flex-row justify-start items-center gap-2 mb-4'>
        <img src={logo} alt="logo roxa"/>
        <p className='text-lg text-purple-600 font-medium'>Connect Care</p>
        <ArrowLeft size={24} color="#9063cd"  className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} />
      </div>
      <div>
        <ul className='p-3'>
          <li className='flex flex-row gap-2 mb-4'>
            <Stack size={24} />
            <p>Visao Geral</p>
          </li>
          <li className='flex flex-row gap-2 mb-4'>
            <ChatCircleDots size={24} />
            <p>Chat</p>
          </li>
          <li className='flex flex-row gap-2'>
            <CalendarCheck size={24} />
            <p>Servicos</p>
          </li>
        </ul>
      </div>             
    </nav>
    
    )
}

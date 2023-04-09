import { HeaderApp } from '../Componetes/HeaderApp'
import { SidebarP } from '../Componetes/SidebarP'
import { Card } from './Card'

export function Inicio() {
  return (
    <div>
      <HeaderApp />
      <SidebarP />
      <div className="relative top-0 right-0 w-full lg:max-w-[1120px] lg:mr-4 m-auto flex flex-wrap gap-5 mb-4">
        {/* <Card /> */}
      </div>
    </div>
  )
}

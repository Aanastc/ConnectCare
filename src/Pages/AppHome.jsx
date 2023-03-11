import { Bell, CaretDown } from 'phosphor-react'
import fotoPerfil from '../assets/imgs/fotoPerfil.png'

export function AppHome() {
  return (
    <nav className="sticky top-0 max-w-[1120px] m-auto flex flex-wrap items-center justify-end px-2 py-3 bg-white mb-3 z-50 gap-4">
      <Bell size={32} color="#9063CD" />
      <div className="flex flex-row items-center gap-4">
        <img
          src={fotoPerfil}
          alt="Foto de uma mulher de cabelo preto sorrindo"
          class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <p className="text-base font-semibold text-purple-600">
          Nome do usaurio
        </p>
        <CaretDown size={22} color="#9063CD" />
      </div>
    </nav>
  )
}

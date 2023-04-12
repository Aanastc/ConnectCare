import { Star, ChatCircleDots } from 'phosphor-react'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'

export function Card() {
  return (
    <div class="w-64 flex flex-col justify-center items-center bg-white border border-purple-500 rounded-lg shadow-md p-6">
      <img
        src={fotoPerfil}
        alt="Foto de uma mulher de cabelo preto sorrindo"
        class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
      />
      <div className="flex flex-row gap-2 m-2">
        <Star size={22} color="#f4ed1a" weight="fill" />
        <Star size={22} color="#f4ed1a" weight="fill" />
        <Star size={22} color="#f4ed1a" weight="fill" />
        <Star size={22} color="#f4ed1a" weight="fill" />
        <Star size={22} color="#f4ed1a" weight="fill" />
      </div>
      <h2 class="text-2xl font-bold mb-4 text-center">Nome do Profissional</h2>
      <p class="text-gray-700">Especialidade:</p>
      <span className="text-purple-500 font-bold">Cuidadora de idosos</span>
      <div className="flex flex-row mb-2">
        <p>Nº de atendimentos:</p>
        <span>12</span>
      </div>
      <div className="flex flex-row justify-between items-center gap-4 mb-0">
        <button className="bg-purple-600 text-white rounded-lg px-2 py-1 w-40 font-light text-base">Ver Perfil</button>
        <ChatCircleDots size={32} color="#9063CD" />
      </div>
    </div>
  )
}

import { ChatCircleDots, Star } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'

export function Card({
  profissionalId,
  name,
  especialidade,
  atendimentos,
  avatar
}) {
  return (
    <NavLink to={`/Paciente/perfilDoProfissional/${profissionalId}`}>
      <div class="w-60 flex flex-col justify-center items-center bg-white border border-purple-400 rounded-lg shadow-md p-4 h-64">
        <img
          src={avatar}
          alt="Foto de uma mulher de cabelo preto sorrindo"
          class="relative inline-block h-14 w-14 !rounded-full object-cover object-center"
        />
        <div className="flex flex-row gap-2 m-2">
          <Star size={22} color="#f4ed1a" weight="fill" />
          <Star size={22} color="#f4ed1a" weight="fill" />
          <Star size={22} color="#f4ed1a" weight="fill" />
          <Star size={22} color="#f4ed1a" weight="fill" />
          <Star size={22} color="#f4ed1a" weight="fill" />
        </div>
        <h2 class="text-lg font-semibold mb-2 text-center">{name}</h2>
        <p class="text-gray-700">Especialidade:</p>
        <span className="text-purple-500 font-bold">{especialidade}</span>
        <div className="flex flex-row mb-2">
          <p>Nº de atendimentos:</p>
          <span>{atendimentos}</span>
        </div>
        <div className="flex flex-row justify-between items-center gap-2 mb-0">
          <button className="bg-purple-400 text-white rounded-lg px-2 py-1 w-36 font-light text-sm">
            Ver Perfil
          </button>
          <NavLink to={`/Paciente/chat/${profissionalId}`}>
            <ChatCircleDots size={28} color="#9063CD" />
          </NavLink>
        </div>
      </div>
    </NavLink>
  )
}

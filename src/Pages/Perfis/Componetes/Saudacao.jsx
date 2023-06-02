import { useEffect, useState } from 'react'
import homePerfil from '../../../../src/assets/icons/homePerfil.svg'
import { useUser } from '../../../contexts/UserCtx'

export function Saudacao() {
  const [horario, setHorario] = useState(new Date().getHours())
  const { user } = useUser()

  useEffect(() => {
    const interval = setInterval(() => {
      setHorario(new Date().getHours())
    }, 1000 * 60)
    return () => clearInterval(interval)
  }, [])

  let saudacao
  if (horario >= 6 && horario < 12) {
    saudacao = 'Bom dia'
  } else if (horario >= 12 && horario < 18) {
    saudacao = 'Boa tarde'
  } else {
    saudacao = 'Boa noite'
  }

  return (
    <div className="flex justify-center items-center bg-purple-400 rounded-full shadow-md w-full h-20 mb-4">
      <img
        src={homePerfil}
        alt=""
        className="hidden md:block absolute top-0 left-28"
      />
      <h1 className="text-2xl md:text-3xl font-normal text-black flex items-center uppercase">
        {`${saudacao}, ${user.name || ''}!`}
      </h1>
    </div>
  )
}

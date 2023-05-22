import { useState, useEffect } from 'react'
import { supabase } from '../../../services/supabase'
import { ServicosStatus } from './ServicosStatus'
import { useUser } from '../../../contexts/UserCtx'

const Solicitacao = [
  {
    protocolo: 'BSK649NDHFF9',
    status: 'Pendente'
  },
  {
    protocolo: 'BSK649NDHFF9',
    status: 'Pendente'
  },
  {
    protocolo: 'BSK649NDHFF9',
    status: 'Pendente'
  }
]

export function Servicos() {
  const { user } = useUser()
  const [isCacel, setCancel] = useState(true)

  return (
    <main>
      {Solicitacao.map(solicitacao => (
        <ServicosStatus
          avatar={user.avatarPath}
          protocolo={solicitacao.protocolo}
          status={solicitacao.status}
        />
      ))}
    </main>
  )
}

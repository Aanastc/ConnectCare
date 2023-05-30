import { useUser } from '../../../contexts/UserCtx'
import { ServicosStatus } from './ServicosStatus'

// PENDENTE TERMINAR

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

import { useState, useEffect } from 'react'
import { supabase } from '../../../services/supabase'
import { ServicosStatus } from './ServicosStatus'

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
  return (
    <main className="flex flex-col w-full max-w-[1090px] border-b-2 border-purple-500 pt-6">
      {Solicitacao.map(solicitacao => (
        <ServicosStatus
          protocolo={solicitacao.protocolo}
          status={solicitacao.status}
        />
      ))}
    </main>
  )
}

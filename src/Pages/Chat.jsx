import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'
import { Conversas } from './Conversas'
import { useUser } from '../contexts/UserCtx'

export function Chat() {
  const [conversaSelecionada, setConversaSelecionada] = useState(undefined)
  const [pessoas, setPessoas] = useState([])
  const { user, loading } = useUser()

  useEffect(() => {
    if (loading) return

    const fetchPessoas = async () => {
      const { data: pessoasData, error } = await supabase
        .from('Participantes_chat')
        .select(
          `
            id,
            profissionais_id,
            paciente_id,
            profissional (
              profiles (
                name,
                avatarPath
              )
            ),
            paciente (
              profiles (
                name,
                avatarPath
              )
            )
          `
        )
        .or(`profissionais_id.eq.${user.id},paciente_id.eq.${user.id}`)

      if (error) {
        console.error('Erro ao buscar pessoas:', error)
      } else {
        setPessoas(pessoasData)
      }
    }

    fetchPessoas()
  }, [loading])

  const handleConversaClick = conversa => {
    setConversaSelecionada(conversa)
  }

  return (
    <div className="flex min-h-[50rem]">
      <div className="flex flex-col w-50 p-2 bg-purple-100 rounded-md h-full min-w-[20rem]">
        <h2 className="text-lg font-semibold mb-4 text-center">Conversas</h2>
        {pessoas.map(pessoa => (
          <div
            key={pessoa.id}
            className={`flex items-center gap-2 p-2 cursor-pointer ${
              conversaSelecionada?.id === pessoa.id
                ? 'bg-purple-300 rounded-lg'
                : ''
            }`}
            onClick={() => handleConversaClick(pessoa)}
          >
            {pessoa.profissionais_id === user.id ? (
              <>
                <img
                  src={pessoa.paciente.profiles.avatarPath}
                  alt={pessoa.paciente.profiles.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{pessoa.paciente.profiles.name}</span>
              </>
            ) : (
              <>
                <img
                  src={pessoa.profissional.profiles.avatarPath}
                  alt={pessoa.profissional.profiles.name}
                  className="w-10 h-10 rounded-full"
                />
                <span>{pessoa.profissional.profiles.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="flex-grow p-4">
        {conversaSelecionada && <Conversas conversa={conversaSelecionada} />}
      </div>
    </div>
  )
}

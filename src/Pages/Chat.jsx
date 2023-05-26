import { useState, useEffect } from 'react'
import { supabase } from '../services/supabase'
import { Conversas } from './Conversas'
import { useUser } from '../contexts/UserCtx'
import { useSearchParams } from 'react-router-dom'

export function Chat() {
  const [conversaSelecionada, setConversaSelecionada] = useState(undefined)
  const [pessoas, setPessoas] = useState([])
  const { user, loading } = useUser()
  const [searchParams, setSearchParams] = useSearchParams()
  const [loadingPessoas, setloadingPessoas] = useState(true)
  const to = searchParams.get('to')

  const createNewConversation = async () => {
    const { data: newConversationData } = await supabase
      .from('Participantes_chat')
      .insert({
        profissionais_id: user.role === 'caregiver' ? user.id : to,
        paciente_id: user.role === 'patient' ? user.id : to
      })
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
    const [newConversation] = newConversationData

    searchParams.delete('to')

    setSearchParams(searchParams)
    setPessoas(prev => [...prev, newConversation])
    setConversaSelecionada(newConversation)
  }

  useEffect(() => {
    if (loading) return

    const fetchPessoas = async () => {
      setloadingPessoas(true)

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
        setloadingPessoas(false)
      }
    }

    fetchPessoas()
  }, [loading])

  useEffect(() => {
    if (!to || loadingPessoas || loading) return

    const [converaExistente] = pessoas.filter(p => {
      if (p.profissionais_id === to || p.paciente_id === to) {
        return p
      }
    })

    if (converaExistente) {
      setConversaSelecionada(converaExistente)
      return
    }

    if (conversaSelecionada) return

    createNewConversation()
  }, [to, pessoas, loading])

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

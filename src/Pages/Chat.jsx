import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../services/supabase'
import { Conversas } from './Conversas'

export function Chat() {
  const { id } = useParams()
  const [conversaId, setConversaId] = useState(id)
  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    const fetchPessoas = async () => {
      const { data: pessoasData, error } = await supabase
        .from('profiles')
        .select('id, name, avatarPath')
        .limit(10)

      if (error) {
        console.error('Erro ao buscar pessoas:', error)
      } else {
        setPessoas(pessoasData)
      }
    }

    fetchPessoas()
  }, [])

  const handleConversaClick = conversaId => {
    setConversaId(conversaId)
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-50 p-2 bg-purple-100 rounded-md h-full">
        <h2 className="text-lg font-semibold mb-4 text-center">Conversas</h2>
        {pessoas.map(pessoa => (
          <div
            key={pessoa.id}
            className={`flex items-center gap-2 p-2 cursor-pointer ${
              conversaId === pessoa.id ? 'bg-purple-300 rounded-lg' : ''
            }`}
            onClick={() => handleConversaClick(pessoa.id)}
          >
            <img
              src={pessoa.avatarPath}
              alt={pessoa.name}
              className="w-10 h-10 rounded-full"
            />
            <span>{pessoa.name}</span>
          </div>
        ))}
      </div>
      <div className="flex-grow p-4">
        <Conversas conversaId={conversaId} />
      </div>
    </div>
  )
}

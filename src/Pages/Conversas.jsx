import { PaperPlaneRight, Smiley } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { useUser } from '../contexts/UserCtx'
import { supabase } from '../services/supabase'

export function Conversas({ conversa }) {
  const { user } = useUser()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const conversante =
    conversa.profissionais_id === user.id
      ? conversa.paciente
      : conversa.profissional

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        sender: user.name,
        participantes_chat_id: conversa.id
      }

      const { data, error } = await supabase
        .from('chat')
        .insert(newMessage)
        .select('*')
      const [messageData] = data

      if (error) {
        console.error('Erro ao enviar a mensagem:', error)
      } else {
        setMessages(prev => [...prev, messageData])
        setInputValue('')
      }
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (!conversa) return

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat')
        .select('*')
        .eq('participantes_chat_id', conversa.id)
        .order('created_at')

      if (error) {
        console.error('Erro ao buscar as mensagens:', error)
      } else {
        setMessages(data)
      }
    }

    fetchMessages()
  }, [conversa])

  useEffect(() => {
    const subscription = supabase
      .channel('chat-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat'
        },
        payload => {
          setMessages(prev => {
            const messageAlreadyInChat = prev.some(
              msg => msg.id === payload.new.id
            )

            if (messageAlreadyInChat) return prev

            return [...prev, payload.new]
          })
        }
      )
      .subscribe()

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-full border border-purple-400 rounded-lg">
      <div className="flex flex-row items-center gap-4 border-b-2 border-b-purple-500 p-2">
        <img
          className="w-10 h-10 rounded-full ring-2 ring-gray-300"
          src={conversante.profiles.avatarPath}
          alt={conversante.profiles.name}
        />
        <p className="text-lg font-medium text-purple-500">
          {conversante.profiles.name}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="p-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex my-2 ${
                message.sender === user.name ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg py-2 px-4 ml-2 ${
                  message.sender === user.name
                    ? 'bg-gray-200 border border-purple-500 max-w-[490px] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl'
                    : 'bg-gray-800 text-white rounded-br-3xl rounded-tr-3xl rounded-tl-xl'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="flex border-t-2 border-t-purple-500 p-2 items-center">
        <Smiley size={32} color="#0a0a0b" weight="thin" className="mr-2" />
        <div className="flex-1 pr-2">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-4 p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Digite uma mensagem..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <button className="hover:text-purple-500" onClick={handleSendMessage}>
          <PaperPlaneRight size={32} />
        </button>
      </div>
    </div>
  )
}

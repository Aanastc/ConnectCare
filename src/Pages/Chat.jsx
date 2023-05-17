import { supabase } from '../services/supabase'
import React, { useState, useEffect } from 'react'
import { useUser } from '../contexts/UserCtx'
import { PaperPlaneRight, Smiley, Paperclip } from 'phosphor-react'

import { useParams } from 'react-router-dom'

export function Chat() {
  const { user } = useUser()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        sender: user.name
      }

      const { data, error } = await supabase.from('chat').insert(newMessage) // Insere a nova mensagem na tabela 'chat'

      if (error) {
        console.error('Erro ao enviar a mensagem:', error)
      } else {
        setMessages([...messages, newMessage])
        setInputValue('')
      }
    }
  }

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('chat')
        .select('*')
        .order('id') // Lê todas as mensagens da tabela 'chat'

      if (error) {
        console.error('Erro ao buscar as mensagens:', error)
      } else {
        setMessages(data)
      }
    }

    fetchMessages()

    const subscription = supabase
      .from('chat')
      .on('INSERT', payload => {
        setMessages([...messages, payload.new])
      })
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [messages])

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="border border-purple-500 rounded-lg shadow-lg w-full max-w-[1235px]">
        <div className="flex flex-row items-center gap-4 border-b-2 border-b-purple-500 p-2">
          <img
            className="w-10 h-10 rounded-full ring-2 ring-gray-300"
            src={user.avatarPath}
            alt={user.name}
          />
          <p className="text-lg font-medium text-purple-500">{user.name}</p>
        </div>
        <div className="overflow-y-auto max-h-[500px] bg-gray-100">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex my-2 ${
                message.sender === user.name ? 'justify-end' : 'justify-start'
              }`}
            >
              <div className="flex items-center">
                {message.sender !== user.name && (
                  <div className="flex-shrink-0 bg-purple-500 text-white rounded-br-3xl rounded-tr-3xl rounded-tl-xl h-8 w-8 flex items-center justify-center">
                    <span className="text-sm font-bold">{user.name}</span>
                  </div>
                )}
              </div>
              <div
                className={`rounded-lg py-2 px-4 ml-2 ${
                  message.sender === user.name
                    ? 'bg-gray-200 border border-purple-500 max-w-[490px] h-full rounded-bl-3xl rounded-tl-3xl rounded-tr-xl'
                    : 'bg-gray-800 text-white'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex border-t-2 border-t-purple-500 p-2">
          <div className="flex-1 pr-2">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Smiley size={32} />
              </span>
              <input
                type="text"
                className="w-full pl-12 p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Digite uma mensagem..."
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="hover:text-purple-500" onClick={handleSendMessage}>
            <PaperPlaneRight size={32} />
          </button>
        </div>
      </div>
    </main>
  )
}

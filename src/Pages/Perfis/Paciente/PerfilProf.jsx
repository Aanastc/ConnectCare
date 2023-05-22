import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { supabase } from '../../../services/supabase'
import { differenceInYears } from 'date-fns'
import { Avaliacao } from './Avaliacao'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'
import { ChatCircleDots, ClipboardText } from 'phosphor-react'

export function PerfilProf() {
  const [profissional, setProfissional] = useState(null)
  const [load, setLoad] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    async function getProfissional() {
      const { data, error } = await supabase
        .from('profiles')
        .select(
          `
          name,
          avatarPath,
          birthdate,
          profissional (
            especialidade,
            formacao,
            restricoes
          )
        `
        )
        .eq('id', id)

      if (error) {
        console.log('Erro ao buscar profissional:', error)
        return
      }

      const profissionalData = data[0]
      const birthdate = new Date(profissionalData.birthdate)
      const age = differenceInYears(new Date(), birthdate)
      profissionalData.age = age
      setProfissional(profissionalData)
      setLoad(false)
    }

    getProfissional()
  }, [id])

  return (
    <>
      <div className="flex flex-col gap-6 mb-4 justify-center">
        {!load && (
          <>
            <div className="flex flex-row gap-6 mb-4 justify-center items-center">
              <div className="border-2 border-purple-600 rounded-full w-72 h-72 shadow-md shadow-purple-500">
                <img
                  src={profissional?.avatarPath}
                  className="rounded-full w-full"
                  alt="Avatar"
                />
              </div>
              <div className="flex flex-col p-6">
                <div className="mb-4">
                  <p
                    className="font-light text-purple-500 text-4xl text-start"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                  >{`${profissional?.name} - ${profissional?.age} anos`}</p>
                </div>
                <div className="flex flex-row gap-5">
                  <div className="border-2 border-purple-600 rounded-3xl w-72 flex flex-row px-4 py-2 mb-2">
                    <p className="font-semibold text-base mr-1">Formação:</p>
                    <p>{profissional?.profissional?.formacao}</p>
                  </div>
                  <div className="border-2 border-purple-600 rounded-3xl w-72 flex flex-row px-4 py-2 mb-2">
                    <p className="font-semibold text-base mr-1">
                      Especialidade:
                    </p>
                    <p>{profissional?.profissional?.especialidade}</p>
                  </div>
                </div>
                <div className="border-2 border-purple-600 rounded-3xl w-full flex flex-col px-6 py-3 mb-2">
                  <p className="font-semibold text-base mr-1">Experiências</p>
                  <ul className="ml-2">
                    <li>
                      Hospital de Messejana: Cuidados com pacientes terminais -
                      3 anos;
                    </li>
                    <li>
                      Hospital Geral de Fortaleza: Coordenação geral da
                      emergência - 5 anos
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-purple-600 rounded-3xl w-full flex flex-row px-4 py-3 mb-6">
                  <p className="font-semibold text-base mr-1">Restrições</p>
                  <p> {profissional?.profissional?.restricoes}</p>
                </div>
                <div className="flex justify-start gap-2 mb-8">
                  <NavLink to="/Paciente/chat">
                    <ChatCircleDots
                      size={50}
                      color="#9063CD"
                      className="h-10"
                    />
                  </NavLink>
                  <NavLink to="InfoContract">
                    <button className="bg-purple-500 text-white rounded-full h-10 w-72 flex flex-row justify-center items-center gap-4">
                      <ClipboardText size={32} color="#f5f5f0" />
                      <p>CONTRATAR</p>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="mb-2 flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-2 flex justify-center gap-10">
              <h1 className="text-2xl font-bold mb-4">Avaliações</h1>
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <Avaliacao
                name="João Silva"
                rating="2"
                comment="Ótimo produto! Fiquei muito satisfeito com a qualidade."
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
              <Avaliacao
                name="Maria Santos"
                rating="5"
                comment="Excelente atendimento ao cliente. Recomendo!"
                avatar={fotoPerfil}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

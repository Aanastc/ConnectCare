import React, { useState, useEffect } from 'react'
import {
  Baby,
  Bed,
  FaceMask,
  FirstAidKit,
  Heartbeat,
  Pill,
  Syringe,
  Wheelchair
} from 'phosphor-react'
import { Filtro } from './Filtro'
import { Saudacao } from '../Componetes/Saudacao'
import { Card } from './Card'
import { NavLink } from 'react-router-dom'
import { supabase } from '../../../services/supabase'

export function VisaoGeral() {
  const [profissionais, setProfissionais] = useState([])

  useEffect(() => {
    async function getProfissionais() {
      const { data, error } = await supabase
        .from('profiles')
        .select(
          `
          id,
          name,
          avatarPath,
          profissional (
            especialidade
          )
        `
        )
        .eq('role', 'caregiver')

      if (error) {
        console.log('Erro ao buscar profissionais:', error)
      } else {
        setProfissionais(data)
      }
    }

    getProfissionais()
  }, [])

  // const [showProfileNotification, setShowProfileNotification] = useState(false);

  // useEffect(() => {
  //   const profileNotificationDismissed = localStorage.getItem('profileNotificationDismissed');
  //   setShowProfileNotification(!profileNotificationDismissed);
  // }, []);

  // function handleProfileNotificationClick() {
  //   localStorage.setItem('profileNotificationDismissed', 'true');
  //   setShowProfileNotification(false);
  // }

  const especialidadeButton =
    'border-purple-400 border-2 rounded flex flex-col justify-center items-center h-24 w-24 m-2 p-2 hover:bg-purple-400 hover:shadow-md'

  return (
    <main className="p-5 pt-32">
      {/* {showProfileNotification && (
        <div className="bg-yellow-100 p-4 mb-4 rounded-md">
          <p className="text-yellow-800">
            Por favor, complete seu perfil para ter acesso completo à plataforma.
          </p>
          <NavLink
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-yellow-600"
            to="/Paciente/editarPerfil"
            onClick={handleProfileNotificationClick}
          >
            Completar perfil
          </NavLink>
        </div>
      )} */}
      <Saudacao />
      <div className="flex flex-row flex-wrap mb-4 w-full gap-5 justify-center items-center">
        <button className={especialidadeButton}>
          <Baby size={32} color="#0a0a0b" />
          <span className="mt-2">Neonatal</span>
        </button>
        <button className={especialidadeButton}>
          <Bed size={32} color="#0a0a0b" />
          <span className="mt-2">Internação</span>
        </button>
        <button className={especialidadeButton}>
          <Syringe size={32} color="#0a0a0b" />
          <span className="mt-2">Vacinas</span>
        </button>
        <button className={especialidadeButton}>
          <Heartbeat size={32} color="#0a0a0b" />
          <span className="mt-2">Idoso</span>
        </button>
        <button className={especialidadeButton}>
          <FaceMask size={32} color="#0a0a0b" />
          <span className="mt-2">Paliativo</span>
        </button>
        <button className={especialidadeButton}>
          <FirstAidKit size={32} color="#0a0a0b" />
          <span className="mt-2">Curativo</span>
        </button>
        <button className={especialidadeButton}>
          <Wheelchair size={32} color="#0a0a0b" />
          <span className="mt-2">Cadeirante</span>
        </button>
        <button className={especialidadeButton}>
          <Pill size={32} color="#0a0a0b" />
          <span className="mt-2">Medicação</span>
        </button>
      </div>
      <Filtro />
      <div className="flex flex-wrap gap-12 justify-center">
        {profissionais.map(perfilDoProfissional => (
          <Card
            key={perfilDoProfissional.id}
            profissionalId={perfilDoProfissional.id}
            name={perfilDoProfissional.name}
            especialidade={perfilDoProfissional?.profissional?.especialidade}
            atendimentos={perfilDoProfissional.atendimentos}
            avatar={perfilDoProfissional.avatarPath}
          />
        ))}
      </div>
    </main>
  )
}

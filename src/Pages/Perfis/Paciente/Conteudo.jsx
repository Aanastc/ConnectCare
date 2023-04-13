import { Card } from './Card'
import React from 'react';

export function Conteudo() {
  return (
    <main>
      <div className="bg-purple-400 rounded-lg overflow-hidden p-6">
        {/* Conteúdo do card */}
        <img src="src/assets/animation/Bem-vindo-animate.svg" alt="Imagem de boas-vindas" width='35vw'/>
        <h1 className="text-2xl font-bold mb-2 text-black">Bem-vindo(a) John Goes Monteir</h1>
      </div>
      <div className="my-4 flex justify-center">
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Neonatal</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">internação</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Vacinas</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Idoso</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Cuicado paliativo</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Curativo</span>
        </button>
        <button className="bg-white border-2 border-purple-400 rounded flex justify-center items-center h-[80px] w-[80px] mx-2">
          <i className="icon"></i>
          <span className="ml-2">Medicação</span>
        </button>
        
      </div>
      <Card />
    </main>
  )
}


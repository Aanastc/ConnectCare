import { NavLink } from 'react-router-dom'
import fotoPerfil from '../../../assets/imgs/fotoPerfil.png'

export function PerfilProf() {
  return (
    <main>
      <div className="flex flex-row gap-6 mb-4 justify-center">
        <div className="flex justify-center flex-col p-3 border border-purple-500 rounded-lg items-center shadow-lg h-56 ">
          <img src={fotoPerfil} alt="" className="h-40 rounded-3xl mb-4" />
          <div className="flex flex-row gap-8">
            {/* <p>{nome}{idade}</p> */}
            <p className="text-purple-400 text-base">nome - idade</p>
          </div>
        </div>
        <div className="flex flex-col p-6 border border-purple-500 rounded-lg shadow-lg">
          <div className="border-b-2 border-b-black mb-4">
            <h2 className="text-purple-400 text-lg font-medium">
              Dados Profissionais
            </h2>
          </div>
          <div>
            <div className="flex flex-row gap-8 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="formacao" className="text-sm font-bold">
                  Formação
                </label>
                <input
                  id="formacao"
                  type="text"
                  placeholder="Insira sua formacao"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="especialidade" className="text-sm font-bold">
                  Especialidade
                </label>
                <input
                  id="especialidade"
                  type="text"
                  placeholder="Insira sua especialidade"
                  className="border-gray-300 border-2 rounded-lg p-3 text-base w-96 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="experiencia"
                  className="block text-sm font-bold"
                >
                  Experiência Profissional
                </label>
                <textarea
                  name="experiencia"
                  id="experiencia"
                  placeholder="Hospital de Messejana: Cuidados com pacientes terminais - 3 anos"
                  className="border-gray-300 border-2 rounded-lg p-3 h-28 text-base placeholder:text-gray-400 mt-2 resize-none"
                  style={{ verticalAlign: 'top' }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <div className="flex flex-col">
                <label htmlFor="restricoes" className="block text-sm font-bold">
                  Restrições
                </label>
                <textarea
                  name="restricoes"
                  id="restricoes"
                  placeholder="Não trabalho nos feriados"
                  className="border-gray-300 border-2 rounded-lg p-3 h-44 text-base placeholder:text-gray-400 mt-2 resize-none"
                  style={{ verticalAlign: 'top' }}
                />
              </div>
            </div>
            <div className="mb-2 flex justify-center gap-10">
              <button className="bg-purple-500 text-white rounded-full h-10 w-72">
                CONVERSAR COM PROFISSIONAL
              </button>
              <NavLink to="/Paciente/ContratoInfo">
                <button className="bg-purple-500 text-white rounded-full h-10 w-72">
                  CONTRATAR
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

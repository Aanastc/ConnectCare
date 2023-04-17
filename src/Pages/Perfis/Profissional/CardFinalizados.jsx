import Paciente1 from '../../../assets/imgs/Paciente1.png'

export function CardFinalizados({ nome, casoClinico, horario, dias }) {
  return (
    <div className="flex flex-row gap-4 items-center mb-4">
      <div>
        <img
          src={Paciente1}
          alt=""
          class="relative inline-block h-20 w-20 !rounded-full object-cover object-center grayscale"
        />
      </div>
      <div className="border border-gray-600 bg-gray-500 rounded-lg p-1 justify-start items-center h-32 w-96">
        <h2 className="font-medium text-white text-xl">{nome}</h2>
        <div className="bg-white rounded-lg p-1">
          <p className="font-medium">
            Diagnóstico:{' '}
            <span className="font-normal text-sm">{casoClinico}</span>
          </p>
          <p className="font-medium">
            Horário: <span className="font-normal text-sm">{horario}</span>
          </p>
          <p className="font-medium">
            Dias: <span className="font-normal text-sm">{dias}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

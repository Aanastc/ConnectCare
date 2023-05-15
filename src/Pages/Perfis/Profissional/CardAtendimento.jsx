export function CardAtendimento({ nome, casoClinico, horario, dias, avatar }) {
  return (
    <div className="flex flex-row gap-4 items-center mb-4">
      <div>
        <img
          src={avatar}
          class="relative inline-block h-20 w-20 !rounded-full object-cover object-center"
        />
      </div>
      <div className="border border-purple-600 bg-purple-400 rounded-lg p-1 justify-start items-center h-32 w-96">
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

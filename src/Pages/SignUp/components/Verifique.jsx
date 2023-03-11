
export function Verifique() {

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white max-w-md w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold text-center mb-8">
        Antes de continurmos, por favor verifique seu email!
      </h2>
      <a
        href="https://outlook.live.com/"
        className="bg-purple-600 text-white font-bold px-6 py-3 rounded-lg ease-linear transition-all duration-150 hover:bg-purple-800 w-full mt-6 text-center"
      >
        Verificar email
      </a>
    </div>
  )
}

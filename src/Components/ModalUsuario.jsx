import React from "react";

export function ModalUsuario() {
  const [showRegistrar, setShowRegistrar] = React.useState(false);
  const [showEntrar, setShowEntrar] = React.useState(false);

  return (

    <div className="flex gap-2 items-center">

      <button
        className="font-bold text-purple-600 py-2 px-4 hover:text-purple-800 hover:bg-gray-100 rounded-full"
        type="button"
        onClick={() => setShowRegistrar(true)}
      >
        Registrar
      </button>
      {/* {showRegistrar ? (<div>Cpnteudo do modal vai aqui</div>): null} */}

      <button className="font-bold bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-800"
        type="button"
        onClick={() => setShowEntrar(true)}
      >
        Entrar
      </button>
      {/* {showEntrar ? (<div>Cpnteudo do modal vai aqui</div>): null} */}
    </div>
    // https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
  )
}
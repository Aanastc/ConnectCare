import { CloudArrowUp } from 'phosphor-react'

export function EditarPerfilProf() {
  return (
    <div className="flex flex-row justify-center items-center gap-8">
      <button className="flex flex-row items-center gap-4">
        <p>Upload curriculo</p>
        <CloudArrowUp size={28} />
      </button>
      <button className="flex flex-row items-center gap-4">
        <p>Upload doc conselho</p>
        <CloudArrowUp size={28} />
      </button>
      <button className="flex flex-row items-center gap-4">
        <p>Upload certificados</p>
        <CloudArrowUp size={28} />
      </button>
    </div>
  )
}

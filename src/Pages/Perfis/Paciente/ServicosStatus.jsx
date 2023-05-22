import { XCircle, NotePencil } from 'phosphor-react'

export function ServicosStatus({ avatar, protocolo, status }) {
  return (
    <div className="flex flex-row justify-between items-center p-4 border-t-2 border-purple-500">
      <div className="flex justify-start items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img className="w-full h-full object-cover" src={avatar} />
        </div>
        <p>{protocolo}</p>
      </div>
      <div className="flex justify-end items-center gap-4">
        <p>{status}</p>
        <XCircle size={32} color="#0a0a0b" weight="thin" />
        <NotePencil size={32} color="#0a0a0b" weight="thin" />
      </div>
    </div>
  )
}

export function ServicosStatus({ protocolo, status }) {
  return (
    <div className="flex flex-row justify-between items-center p-4 border-t-2 border-purple-500">
      <p>{protocolo}</p>
      <p>{status}</p>
    </div>
  )
}

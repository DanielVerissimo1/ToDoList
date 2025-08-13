import { ClipboardList } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <ClipboardList className="w-16 h-16 text-gray-600 mb-4" />
      <p className="text-gray-400 font-bold text-lg mb-1">Você ainda não tem tarefas cadastradas</p>
      <p className="text-gray-500">Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

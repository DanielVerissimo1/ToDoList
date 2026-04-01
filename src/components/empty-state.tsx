import { ClipboardList } from "lucide-react"

export function EmptyState() {
  return (
    <div className="border-t border-[#333333] flex flex-col items-center justify-center py-16 text-center">
      <ClipboardList className="w-14 h-14 text-[#333333] mb-4" />
      <p className="text-[#808080] font-bold text-sm mb-1">Você ainda não tem tarefas cadastradas</p>
      <p className="text-[#808080] text-sm">Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

"use client"

import { Check, Trash2 } from "lucide-react"
import type { Task } from "@/lib/types"

interface TaskItemProps {
  task: Task
  onToggle: () => void
  onDelete: () => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="bg-[#262626] border border-[#333333] rounded-lg p-4 flex items-start gap-3">
      <button
        onClick={onToggle}
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
          task.completed
            ? "bg-[#5E60CE] border-[#5E60CE] hover:bg-[#8284FA] hover:border-[#8284FA]"
            : "border-[#4EA8DE] hover:border-[#8284FA] hover:bg-[#8284FA]/10"
        }`}
      >
        {task.completed && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`flex-1 text-sm leading-relaxed ${
          task.completed ? "text-[#808080] line-through" : "text-[#F2F2F2]"
        }`}
      >
        {task.text}
      </span>

      <button
        onClick={onDelete}
        className="text-[#808080] hover:text-[#E25858] p-1 rounded transition-colors cursor-pointer flex-shrink-0"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}

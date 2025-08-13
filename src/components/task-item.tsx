"use client"

import { Check, Trash2 } from "lucide-react"
import type { Task } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface TaskItemProps {
  task: Task
  onToggle: () => void
  onDelete: () => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 flex items-center gap-3">
      <button
        onClick={onToggle}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
          task.completed ? "bg-purple-600 border-purple-600 text-white" : "border-blue-400 hover:border-blue-300"
        }`}
      >
        {task.completed && <Check className="w-3 h-3" />}
      </button>

      <span className={`flex-1 ${task.completed ? "text-gray-400 line-through" : "text-white"}`}>{task.text}</span>

      <Button
        onClick={onDelete}
        variant="ghost"
        size="sm"
        className="text-gray-400 hover:text-red-400 cursor-pointer hover:bg-gray-600 p-2"
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  )
}

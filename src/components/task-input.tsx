"use client"

import type React from "react"
import { useState } from "react"
import { PlusCircle } from "lucide-react"

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTask(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        className="flex-1 bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 text-[#F2F2F2] placeholder-[#808080] text-sm focus:outline-none focus:border-[#8284FA] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#1E6F9F] hover:bg-[#4EA8DE] text-[#F2F2F2] px-4 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer"
      >
        Criar
        <PlusCircle className="w-4 h-4" />
      </button>
    </form>
  )
}

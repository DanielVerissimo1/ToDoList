"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Button
        type="submit"
        className="bg-blue-600 h-full  cursor-pointer hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-bold flex items-center gap-2 transition-colors"
      >
        Criar
        <Plus className="w-4 h-4" />
      </Button>
    </form>
  )
}

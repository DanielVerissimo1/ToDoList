"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { TaskInput } from "@/components/task-input"
import { TaskList } from "@/components/task-list"
import { EmptyState } from "@/components/empty-state"
import type { Task } from "@/lib/types"

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedTasks = localStorage.getItem("todo-tasks")
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks))
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todo-tasks", JSON.stringify(tasks))
    }
  }, [tasks, isLoaded])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const createdTasks = tasks.filter((task) => !task.completed)
  const completedTasks = tasks.filter((task) => task.completed)

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-gray-400">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Header />
        <TaskInput onAddTask={addTask} />

        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-bold">Tarefas criadas</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold">
                {createdTasks.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-bold">Concluídas</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold">
                {tasks.length > 0 ? `${completedTasks.length} de ${tasks.length}` : "0"}
              </span>
            </div>
          </div>

          {tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
          )}
        </div>
      </div>
    </div>
  )
}

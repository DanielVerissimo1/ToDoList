import { Rocket } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-center gap-3 mb-16">
      <Rocket className="w-8 h-8 text-blue-400" />
      <h1 className="text-4xl font-black text-blue-400">
        to<span className="text-purple-400">do</span>
      </h1>
    </header>
  )
}

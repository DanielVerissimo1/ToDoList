import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-center gap-3 mb-16">
      <Image src="/rocket.svg" alt="rocket" width={22} height={36} />
      <h1 className="text-4xl font-extrabold">
        <span className="text-[#4EA8DE] font-extrabold">to</span>
        <span className="text-[#8284FA] font-extrabold">do</span>
      </h1>
    </header>
  )
}

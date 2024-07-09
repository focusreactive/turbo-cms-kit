export function HeroSection({ title }: { title: string }) {
  return (
    <div className="rounded-xl border-2 border-blue-500 px-10 text-5xl font-bold shadow-md">
      hero section

      <p>title:</p>
      <p>{title}</p>
    </div>
  )
}

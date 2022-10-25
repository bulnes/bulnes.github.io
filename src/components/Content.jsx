export function Content({ children }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
      <div className="flex flex-col md:flex-row gap-12">
        {children}
      </div>
    </div>
  )
}

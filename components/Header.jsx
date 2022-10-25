import Link from "next/link";

export function Header() {
  return (
    <header className="mt-8 md:mt-12 mb-8 sm:mb-12 md:mb-16 px-4 xl:px-0 w-full">
      <div className="md:flex items-end max-w-5xl mx-auto">
        <div>
          <h1 className="text-3xl tracking-tight leading-10 font-extrabold text-gray-900">
            <Link href={'/'}>
              <a title="Bruno Bulnes">Bruno Bulnes</a>
            </Link>
          </h1>
          <p className="text-sm text-gray-600">
            Blog com algumas anotações e pensamentos
          </p>
        </div>
      </div>
    </header >
  )
}

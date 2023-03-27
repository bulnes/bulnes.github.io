import Link from "next/link";

export function Header() {
  return (
    <header className="py-5 md:py-9 mb-5 md:mb-9">
      <h1 className="text-5xl mb-3">
        <Link href="/">
          <span className="no-underline">Bruno Bulnes</span>
        </Link>
      </h1>

      <p className="text-xl">Software Engineer</p>
    </header>
  );
}

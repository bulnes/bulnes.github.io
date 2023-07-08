import Link from "next/link";

export function Footer() {
  return (
    <footer className="mb-16">
      <div className="border-t border-solid border-text py-4">
        <div className="text-xs flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2023, Bruno Bulnes</p>

          <nav className="flex items-center justify-center gap-3">
            <Link href={"/"} title="Home">
              Home
            </Link>

            <Link href={"/projects"} title="Projects">
              Projetos
            </Link>

            <Link href={"/thoughts"} title="Thoughts">
              Blog
            </Link>

            <Link href={"/about"} title="About">
              Sobre
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

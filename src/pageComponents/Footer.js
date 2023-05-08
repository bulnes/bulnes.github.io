import Link from "next/link";

export function Footer() {
  return (
    <footer className="mb-8 py-4">
      <div className="border-t border-solid border-text py-4">
        <div className="flex items-center justify-between text-xs">
          <p>&copy; 2023 - Bruno Bulnes</p>

          <nav className="flex items-center justify-center gap-3">
            <Link href={"/"} title="Home">
              Home
            </Link>

            <Link href={"/projects"} title="Projects">
              Projects
            </Link>

            <Link href={"/thoughts"} title="Thoughts">
              Thoughts
            </Link>

            <Link href={"/about"} title="About">
              About
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

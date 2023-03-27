import Link from "next/link";

export function Summary() {
  return (
    <nav className="flex items-center justify-start gap-9 py-3 md:py-5 mb-5 md:mb-9">
      <Link href="/">
        <span className="no-underline text-xl">Home</span>
      </Link>

      <Link href="/about">
        <span className="no-underline text-xl">Sobre</span>
      </Link>

      <Link href="/posts">
        <span className="no-underline text-xl">Posts</span>
      </Link>
    </nav>
  );
}

import Link from "next/link";
import { HeadingSecond } from "./Heading";

export function SectionHeader({ children, pageLink }) {
  return (
    <header className="flex items-center justify-between">
      <HeadingSecond>{children}</HeadingSecond>

      {pageLink && (
        <Link href={pageLink} title="Veja mais">
          <span>Veja mais</span>
        </Link>
      )}
    </header>
  );
}

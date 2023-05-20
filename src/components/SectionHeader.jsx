import { HeadingSecond } from "./Heading";

export function SectionHeader({ children }) {
  return (
    <header className="flex items-center justify-between">
      <HeadingSecond>{children}</HeadingSecond>

      <span>See all</span>
    </header>
  );
}

import { HeadingSecond } from "./Heading";

export function SectionHeader({ children }) {
  return (
    <header className="flex items-center justify-between pt-4 pb-2">
      <HeadingSecond>{children}</HeadingSecond>

      <span>See all</span>
    </header>
  );
}

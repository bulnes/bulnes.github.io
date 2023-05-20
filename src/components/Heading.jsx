import { outfitFont } from "@/utils/fonts";

export function HeadingSecond({ children }) {
  return (
    <h2
      className={`mb-2 font-bold text-heading-second text-text ${outfitFont.className}`}
    >
      {children}
    </h2>
  );
}

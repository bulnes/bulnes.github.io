import { outfitFont } from "@/utils/fonts";
import Image from "next/image";

export function Header() {
  return (
    <header className="mb-8 flex items-center gap-4">
      <Image
        src="/profile.jpeg"
        alt=""
        width={100}
        height={100}
        loading="lazy"
        className="rounded-full"
      />

      <h1
        className={`flex flex-col font-bold text-4xl text-text ${outfitFont.className}`}
      >
        <span>Bruno Bulnes</span>
      </h1>
    </header>
  );
}

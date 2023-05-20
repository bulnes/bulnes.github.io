import { ProfilePicture } from "@/components/ProfilePicture";
import { outfitFont } from "@/utils/fonts";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Link
        href={"/"}
        className="mb-16 flex items-center gap-4 hover:text-text"
      >
        <ProfilePicture width={100} height={100} />

        <p
          className={`flex flex-col font-bold text-4xl text-text ${outfitFont.className}`}
        >
          <span>Bruno Bulnes</span>
        </p>
      </Link>
    </header>
  );
}

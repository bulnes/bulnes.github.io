import { ProfilePicture } from "@/components/ProfilePicture";
import { outfitFont } from "@/utils/fonts";
import Link from "next/link";

export function HomeHeader() {
  return (
    <header className="mb-16 flex flex-col gap-8">
      <ProfilePicture width={175} height={175} />

      <h1
        className={`flex flex-col font-bold text-3xl md:text-4xl text-text ${outfitFont.className}`}
      >
        <span>Olá, me chamo Bruno.</span>
        <span>
          Sou engenheiro de software focado em desenvolvimento front-end.
        </span>
      </h1>

      <p className="font-medium text-base text-text">
        Estou trabalhando em meus próprios projetos, compartilhando meus
        pensamentos e documentando toda a minha jornada no meu blog.
      </p>

      <p className="font-medium text-base text-text">
        <Link href={"/about"} title="Clique aqui para saber mais sobre mim">
          Saiba mais sobre mim aqui.
        </Link>
      </p>
    </header>
  );
}

import { outfitFont } from "@/utils/fonts";
import { marked } from "marked";

export function Post({ title, date, content }) {
  return (
    <article>
      <header className="flex flex-col gap-3 mb-9">
        <h1
          className={`flex flex-col font-bold text-3xl md:text-5xl text-text ${outfitFont.className}`}
        >
          <span>{title}</span>
        </h1>

        <span>
          Publicado em{" "}
          {new Date(date).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
          })}
        </span>
      </header>

      <main
        className={`mb-16 prose prose-xl ${outfitFont.className}`}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></main>
    </article>
  );
}

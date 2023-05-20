import { Footer } from "@/pageComponents/Footer";
import { Header } from "@/pageComponents/Header";
import { Newsletter } from "@/pageComponents/Newsletter";
import { outfitFont } from "@/utils/fonts";
import Head from "next/head";

export default function First() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>First - Bruno Bulnes</title>
      </Head>

      <Header />

      <article className="prose mb-16">
        <h1 className={`mb-2 ${outfitFont.className}`}>
          <span className="font-bold text-3xl md:text-4xl text-text">
            Expedita ipsam dolorum deserunt enim labore debitis vero sed, autem,
            quasi ab pariatur numquam?
          </span>
        </h1>

        <p className="-mt-1 text-gray-500">2023-03</p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio in
          expedita quasi, perspiciatis sed magni corrupti vero necessitatibus
          rerum aliquam. Dolores voluptatum numquam expedita assumenda odio
          dolor qui quam sapiente.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima odio
          praesentium ullam ipsam ea? Iste architecto non laborum? Adipisci
          exercitationem eos quasi quas rerum suscipit, ratione molestias sed
          accusamus nulla.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis
          laboriosam repellendus a ullam. Illum, officiis. Expedita ipsam
          dolorum deserunt enim labore debitis vero sed, autem, quasi ab
          pariatur numquam?
        </p>
      </article>

      <Newsletter />
      <Footer />
    </>
  );
}

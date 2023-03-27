import { Header } from "@/components/Header";
import { Summary } from "@/components/Summary";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Sobre Bruno Bulnes</title>
      </Head>
      <Header />
      <Summary />

      <main>Em breve, mais conteúdo aqui na página Sobre!</main>
    </>
  );
}

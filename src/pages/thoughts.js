import { Footer } from "@/pageComponents/Footer";
import { Header } from "@/pageComponents/Header";
import { Newsletter } from "@/pageComponents/Newsletter";
import { ThoughtsList } from "@/pageComponents/ThoughtsList";
import Head from "next/head";

export default function Thoughts() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Toughts - Bruno Bulnes</title>
      </Head>

      <Header />
      <ThoughtsList />
      <Newsletter />
      <Footer />
    </>
  );
}

import { AboutMe } from "@/pageComponents/AboutMe";
import { Footer } from "@/pageComponents/Footer";
import { Header } from "@/pageComponents/Header";
import { Newsletter } from "@/pageComponents/Newsletter";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About - Bruno Bulnes</title>
      </Head>

      <Header />
      <AboutMe />
      <Newsletter />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

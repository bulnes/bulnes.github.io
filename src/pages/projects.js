import { Footer } from "@/pageComponents/Footer";
import { Header } from "@/pageComponents/Header";
import { Newsletter } from "@/pageComponents/Newsletter";
import { ProjectsList } from "@/pageComponents/ProjectsList";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Projects - Bruno Bulnes</title>
      </Head>

      <Header />
      <ProjectsList />
      <Newsletter />
      <Footer />
    </>
  );
}

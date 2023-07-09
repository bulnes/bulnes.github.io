import { Footer } from "@/pageComponents/Footer";
import { HomeHeader } from "@/pageComponents/HomeHeader";
import { Newsletter } from "@/pageComponents/Newsletter";
import { ProjectsList } from "@/pageComponents/ProjectsList";
import { ThoughtsList } from "@/pageComponents/ThoughtsList";
import getAllPosts from "@/utils/get-all-posts";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Bruno Bulnes</title>
      </Head>

      <HomeHeader />
      <ProjectsList />
      <ThoughtsList posts={posts} maxItems={3} />
      <Newsletter />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}

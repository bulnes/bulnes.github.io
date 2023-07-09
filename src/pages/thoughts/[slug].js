import { Footer } from "@/pageComponents/Footer";
import { Header } from "@/pageComponents/Header";
import { Newsletter } from "@/pageComponents/Newsletter";
import { Post } from "@/pageComponents/Post";
import getAllPosts from "@/utils/get-all-posts";
import getNextPosts from "@/utils/get-next-posts";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import path from "path";

export default function BlogPost({ frontmatter, slug, content, nextPosts }) {
  const { title, date } = frontmatter;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About - Bruno Bulnes</title>
      </Head>

      <Header />
      <Post title={title} date={date} content={content} />
      <Newsletter />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("_posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("_posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const posts = getAllPosts();
  const nextPosts = getNextPosts(posts, slug);

  return {
    props: {
      frontmatter,
      slug,
      content,
      nextPosts,
    },
  };
}

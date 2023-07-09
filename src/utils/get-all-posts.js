import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { sortByDate } from "./sort-by-date";

export default function getAllPosts() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("_posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("_posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}

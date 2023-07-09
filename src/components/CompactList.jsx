import Link from "next/link";

export function CompactList({ posts: allPosts = [], baseLink, maxItems }) {
  const posts = maxItems ? allPosts.slice(0, maxItems) : allPosts;

  return (
    <ul className="list-none border-b border-solid border-text">
      {posts.map((post, index) => {
        const { frontmatter, slug } = post;
        const { title } = frontmatter;
        const postLink = `/${baseLink}/${slug}`;

        return (
          <li
            key={`post-${index}`}
            className="py-4 pr-20 border-t border-solid border-text"
          >
            <Link
              href={postLink}
              title={title}
              className="font-medium text-base text-text no-underline"
            >
              <span>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

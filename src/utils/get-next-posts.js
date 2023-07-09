export default function getNextPosts(allPosts, currentSlug, amount = 2) {
  const currentIndex = allPosts.findIndex(({ slug }) => slug === currentSlug);
  const nextPosts = [];

  let i = 0;
  while (i < amount) {
    const post = allPosts[currentIndex + i + 1];
    if (post) {
      nextPosts.push(post);
    }
    i++;
  }

  return nextPosts;
}

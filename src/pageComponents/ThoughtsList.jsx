import { CompactList } from "@/components/CompactList";
import { SectionHeader } from "@/components/SectionHeader";

export function ThoughtsList({ posts = [], hideLink, maxItems }) {
  const hideContent = posts.length === 0;
  const pageLink = hideLink ? "" : "/thoughts";

  return (
    <>
      {!hideContent && (
        <section className="mb-16">
          <SectionHeader pageLink={pageLink}>Pensamentos</SectionHeader>
          <CompactList
            posts={posts}
            baseLink={"thoughts"}
            maxItems={maxItems}
          />
        </section>
      )}
    </>
  );
}

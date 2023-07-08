import { CompactList } from "@/components/CompactList";
import { SectionHeader } from "@/components/SectionHeader";

export function ThoughtsList({ hideLink }) {
  const pageLink = hideLink ? "" : "/thoughts";

  return (
    <section className="mb-16">
      <SectionHeader pageLink={pageLink}>Blog</SectionHeader>
      <CompactList />
    </section>
  );
}

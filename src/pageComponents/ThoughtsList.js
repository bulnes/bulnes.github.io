import { CompactList } from "@/components/CompactList";
import { SectionHeader } from "@/components/SectionHeader";

export function ThoughtsList() {
  return (
    <section className="mb-8">
      <SectionHeader>Thoughts</SectionHeader>
      <CompactList />
    </section>
  );
}

import { ExpandList } from "@/components/ExpandList";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsList() {
  return (
    <section className="mb-8">
      <SectionHeader>Projects</SectionHeader>
      <ExpandList />
    </section>
  );
}

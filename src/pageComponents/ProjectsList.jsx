import { ExpandList } from "@/components/ExpandList";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsList({ hideLink }) {
  const pageLink = hideLink ? "" : "/projects";

  return (
    <section className="mb-16">
      <SectionHeader pageLink={pageLink}>Projetos</SectionHeader>
      <ExpandList />
    </section>
  );
}

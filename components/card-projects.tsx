import { Anchor } from "@/components/anchor";
import { ArrowLinkIcon } from "@/components/arrow-link-icon";
import { Heading3 } from "@/components/heading-3";
import { Paragraph } from "@/components/paragraph";
import { SectionHeader } from "@/components/section-header";

interface CardProjectsProps {
  projects: {
    title: string;
    year: number;
    description: string;
    link: {
      href: string;
      text: string;
    };
  }[];
}

export function CardProjects({ projects }: CardProjectsProps) {
  return (
    <div className="flex flex-col gap-2">
      {projects.map((project) => (
        <article
          key={project.title}
          className="p-4 pt-0 bg-card-background flex flex-col gap-2 border border-card-background rounded-2xl hover:shadow-lg transition-shadow"
        >
          <SectionHeader removeBottomSpace>
            <Heading3>{project.title}</Heading3>
            <Paragraph>{project.year}</Paragraph>
          </SectionHeader>

          <Paragraph>{project.description}</Paragraph>
          <Paragraph>
            <Anchor href={project.link.href}>
              {project.link.text} <ArrowLinkIcon />
            </Anchor>
          </Paragraph>
        </article>
      ))}
    </div>
  );
}

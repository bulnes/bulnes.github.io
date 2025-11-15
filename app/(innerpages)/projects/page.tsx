import { CardProjects } from "@/components/card-projects";
import { Heading2 } from "@/components/heading-2";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

const projects = [
  {
    title: "minilio",
    year: 2023,
    description: "A minimal portfolio template built on Framer",
    link: {
      href: "#",
      text: "buy this template",
    },
  },
  {
    title: "Staredown",
    year: 2023,
    description: "An online game to test you colour vision",
    link: {
      href: "#",
      text: "staredown.netlify.app",
    },
  },
  {
    title: "88pixels",
    year: 2023,
    description: "A collection of cross-platform website templates.",
    link: {
      href: "#",
      text: "88pixels.framer.website",
    },
  },
  {
    title: "moody",
    year: 2023,
    description: "A minimal web app to track your mood",
    link: {
      href: "#",
      text: "m00dy.netlify.app",
    },
  },
  {
    title: "What To Listen To",
    year: 2022,
    description:
      "Discover new lofi tracks to listen to while working, coding, studying or relaxing",
    link: {
      href: "#",
      text: "whattolisten.to",
    },
  },
];

export default function Projects() {
  return (
    <Section>
      <SectionHeader>
        <Heading2>Projects</Heading2>
      </SectionHeader>

      <CardProjects projects={projects} />
    </Section>
  );
}

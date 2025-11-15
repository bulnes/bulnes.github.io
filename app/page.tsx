import { Anchor } from "@/components/anchor";
import { CardProjects } from "@/components/card-projects";
import { CardThoughts } from "@/components/card-thoughts";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { HeaderProfileFull } from "@/components/header-profile-full";
import { Heading2 } from "@/components/heading-2";
import { Newsletter } from "@/components/newsletter";
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
];

const thoughts = [
  {
    title: "The Importance of UX in Website Design",
    link: {
      href: "#",
    },
  },
  {
    title: "5 Essential Web Design Tools You Need",
    link: {
      href: "#",
    },
  },
  {
    title: "Responsive Web Design: Why It Matters",
    link: {
      href: "#",
    },
  },
];

export default function Home() {
  return (
    <Container>
      <HeaderProfileFull />

      {/* Projects */}
      <Section>
        <SectionHeader>
          <Heading2>Projects</Heading2>
          <Anchor href="#">See all</Anchor>
        </SectionHeader>

        <CardProjects projects={projects} />
      </Section>

      {/* Thoughts */}
      <Section>
        <SectionHeader>
          <Heading2>Thoughts</Heading2>
          <Anchor href="#">See all</Anchor>
        </SectionHeader>

        <CardThoughts thoughts={thoughts} />
      </Section>

      {/* Newsletter */}
      <Section>
        <Newsletter />
      </Section>

      <Footer />
    </Container>
  );
}

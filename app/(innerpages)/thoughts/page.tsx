import { CardThoughts } from "@/components/card-thoughts";
import { Heading2 } from "@/components/heading-2";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

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
  {
    title: "5 Common Web Design Mistakes to Avoid",
    link: {
      href: "#",
    },
  },
  {
    title: "3 Web Design Trends to Watch in 2023",
    link: {
      href: "#",
    },
  },
];

export default function Thoughts() {
  return (
    <Section>
      <SectionHeader>
        <Heading2>Thoughts</Heading2>
      </SectionHeader>

      <CardThoughts thoughts={thoughts} />
    </Section>
  );
}

import { Anchor } from "@/components/anchor";
import { ArrowLinkIcon } from "@/components/arrow-link-icon";
import { Paragraph } from "@/components/paragraph";

interface CardThoughtsProps {
  thoughts: {
    title: string;
    link: {
      href: string;
    };
  }[];
}

export function CardThoughts({ thoughts }: CardThoughtsProps) {
  return (
    <div>
      {thoughts.map((thought) => (
        <div
          key={thought.title}
          className="flex items-start justify-between gap-3 py-4 border-t border-paragraph last:border-b hover:bg-paragraph/5 transition-colors"
        >
          <Paragraph>{thought.title}</Paragraph>
          <Paragraph>
            <Anchor href={thought.link.href}>
              Read <ArrowLinkIcon />
            </Anchor>
          </Paragraph>
        </div>
      ))}
    </div>
  );
}

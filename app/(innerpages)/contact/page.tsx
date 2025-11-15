import { Anchor } from "@/components/anchor";
import { ArrowLinkIcon } from "@/components/arrow-link-icon";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";

export default function Contact() {
  return (
    <Section>
      <Paragraph>Get in touch:</Paragraph>

      <Paragraph>
        Twitter:{" "}
        <Anchor href="https://twitter.com/bulnes">
          twitter.com/bulnes <ArrowLinkIcon />
        </Anchor>
      </Paragraph>

      <Paragraph>
        Email:{" "}
        <Anchor href="mailto:bulnes@example.com">
          bulnes@example.com <ArrowLinkIcon />
        </Anchor>
      </Paragraph>

      <Paragraph>
        LinkedIn:{" "}
        <Anchor href="https://www.linkedin.com/in/bulnes/">
          linkedin.com/in/bulnes <ArrowLinkIcon />
        </Anchor>
      </Paragraph>

      <Paragraph>
        GitHub:{" "}
        <Anchor href="https://github.com/bulnes">
          github.com/bulnes <ArrowLinkIcon />
        </Anchor>
      </Paragraph>
    </Section>
  );
}

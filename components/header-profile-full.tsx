import Image from "next/image";
import { Anchor } from "./anchor";
import { ArrowLinkIcon } from "./arrow-link-icon";
import { Heading1 } from "./heading-1";
import { Paragraph } from "./paragraph";

export function HeaderProfileFull() {
  return (
    <header className="mt-16 mb-8 flex flex-col items-start justify-center gap-8">
      <Image
        src="/me.jpeg"
        alt=""
        width={175}
        height={175}
        className="rounded-full grayscale"
      />

      <Heading1>
        <div>Hey, I'm John Smith.</div>
        <div>I'm a front-end developer & </div>
        <div>designer based in London, UK.</div>
      </Heading1>

      <Paragraph>
        Right now, I've just launched this minimal portfolio template you're
        viewing (get it here). I'm also working on my own projects, sharing my
        thoughts on my blog and I document my whole journey on Twitter.
      </Paragraph>

      <Paragraph>
        <Anchor
          href="https://twitter.com/johnsmith"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch <ArrowLinkIcon />
        </Anchor>
      </Paragraph>
    </header>
  );
}

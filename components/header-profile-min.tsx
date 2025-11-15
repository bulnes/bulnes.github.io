import Image from "next/image";
import Link from "next/link";
import { Heading1 } from "./heading-1";

export function HeaderProfileMin() {
  return (
    <header>
      <Link
        href="/"
        aria-label="Go to homepage"
        className="mt-16 mb-8 flex flex-row items-center justify-start gap-4"
      >
        <Image
          src="/me.jpeg"
          alt=""
          width={100}
          height={100}
          className="rounded-full grayscale"
        />
        <Heading1>Bruno Bulnes</Heading1>
      </Link>
    </header>
  );
}

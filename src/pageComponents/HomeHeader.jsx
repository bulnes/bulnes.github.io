import { ProfilePicture } from "@/components/ProfilePicture";
import { outfitFont } from "@/utils/fonts";

export function HomeHeader() {
  return (
    <header className="mb-16 flex flex-col gap-8">
      <ProfilePicture width={175} height={175} />

      <h1
        className={`flex flex-col font-bold text-3xl md:text-4xl text-text ${outfitFont.className}`}
      >
        <span>Hey, I&apos;m John Smith.</span>
        <span>
          I&apos;m a front-end developer & designer based in London, UK.
        </span>
      </h1>

      <p className="font-medium text-base text-text">
        Right now, I&apos;ve just launched this minimal portfolio template
        you&apos;re viewing (get it here). I&apos;m also working on my own
        projects, sharing my thoughts on my blog and I document my whole journey
        on Twitter.
      </p>

      <p className="font-medium text-base text-text">Get in touch →</p>
    </header>
  );
}

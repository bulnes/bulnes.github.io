import Image from "next/image";

export function ProfilePicture({ width, height }) {
  return (
    <Image
      src="/profile.jpeg"
      alt=""
      width={width}
      height={height}
      loading="lazy"
      className="rounded-full grayscale"
    />
  );
}

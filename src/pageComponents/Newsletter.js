import { HeadingSecond } from "@/components/Heading";

export function Newsletter() {
  return (
    <div className="mb-8 py-4 bg-card-background rounded-2xl">
      <form className="p-4">
        <HeadingSecond>Newsletter</HeadingSecond>

        <p className="mb-4 font-medium text-base text-text">
          Sign up below to receive monthly updates from me straight in your
          inbox.
        </p>

        <div className="grid grid-cols-4 gap-2">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg placeholder:text-text col-span-3"
          />

          <button className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-text text-background">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

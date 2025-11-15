import { Heading2 } from "./heading-2";
import { Paragraph } from "./paragraph";

export function Newsletter() {
  return (
    <form className="bg-card-background p-4 mt-16 border border-card-background rounded-2xl flex flex-col gap-4">
      <Heading2>Newsletter</Heading2>

      <Paragraph>
        Sign up below to receive monthly updates from me straight in your inbox.
      </Paragraph>

      <div className="flex gap-2">
        <input
          type="email"
          id="email"
          placeholder="Email"
          aria-label="Please enter your email address"
          required
          className="px-4 py-2 bg-white border border-white rounded-lg font-monospace text-base font-medium leading-7 tracking-normal text-headings flex-1"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-headings border border-headings rounded-lg cursor-pointer"
        >
          <span className="font-monospace text-base font-medium leading-7 tracking-normal text-white">
            Sign Up
          </span>
        </button>
      </div>
    </form>
  );
}

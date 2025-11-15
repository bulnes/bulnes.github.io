const links = [
  {
    href: "#",
    text: "Home",
  },
  {
    href: "#",
    text: "Projects",
  },
  {
    href: "#",
    text: "Thoughts",
  },
  {
    href: "#",
    text: "Contact",
  },
];

export function Footer() {
  return (
    <footer className="mt-5 border-t border-link py-4 font-monospace text-[12px] font-medium leading-7 tracking-normal text-paragraph">
      <div className="flex items-center justify-between">
        <div>{new Date().getFullYear()} - Bruno Bulnes</div>

        <div className="flex gap-4 items-center justify-end">
          {links.map((link) => (
            <a key={link.text} href={link.href}>
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-4">
        All rights reserved - Made with ❤️ by Bruno Bulnes
      </div>

      <div>
        Design Base: minilio by{" "}
        <a href="https://www.figma.com/@julesvdesign">
          <b>Julien Vier</b>
        </a>
        . Licensed CC BY 4.0. Adapted.{" "}
        <a href="https://www.figma.com/community/file/1218905957486998471">
          Figma
        </a>
        .
      </div>
    </footer>
  );
}

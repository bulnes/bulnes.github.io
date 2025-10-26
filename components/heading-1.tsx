interface Heading1Props extends React.ComponentProps<"h1"> {
  children: React.ReactNode;
}

export function Heading1({ children, ...props }: Heading1Props) {
  return (
    <h1
      {...props}
      className="font-bold text-4xl leading-[43.2px] tracking-[-1.5px] text-headings font-headings"
    >
      {children}
    </h1>
  );
}

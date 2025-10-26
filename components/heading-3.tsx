interface Heading3Props extends React.ComponentProps<"h3"> {
  children: React.ReactNode;
}

export function Heading3({ children, ...props }: Heading3Props) {
  return (
    <h3
      {...props}
      className="font-bold text-2xl leading-[33.6px] tracking-normal text-headings font-headings"
    >
      {children}
    </h3>
  );
}

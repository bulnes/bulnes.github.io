interface Heading2Props extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}

export function Heading2({ children, ...props }: Heading2Props) {
  return (
    <h2
      {...props}
      className="font-bold text-[32px] leading-[44.8px] tracking-[-0.5px] text-headings font-headings"
    >
      {children}
    </h2>
  );
}

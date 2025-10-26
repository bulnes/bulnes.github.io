interface ParagraphProps extends React.ComponentProps<"p"> {
  children: React.ReactNode;
}

export function Paragraph({ children, ...props }: ParagraphProps) {
  return (
    <p
      {...props}
      className="font-monospace text-base font-medium leading-7 tracking-normal text-paragraph"
    >
      {children}
    </p>
  );
}

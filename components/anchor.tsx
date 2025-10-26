interface AnchorProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
}

export function Anchor({ children, ...props }: AnchorProps) {
  return (
    <a
      {...props}
      className="font-monospace font-medium text-base text-link underline-offset-2 hover:underline"
    >
      {children}
    </a>
  );
}

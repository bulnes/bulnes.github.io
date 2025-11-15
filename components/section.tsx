interface SectionProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section {...props} className="mb-8">
      {children}
    </section>
  );
}

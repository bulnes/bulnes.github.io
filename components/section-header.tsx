interface SectionHeaderProps {
  removeBottomSpace?: boolean;
  children: React.ReactNode;
}

export function SectionHeader({
  children,
  removeBottomSpace,
}: SectionHeaderProps) {
  return (
    <header
      className={`flex items-center justify-between gap-2 ${
        removeBottomSpace ? "pt-4" : "py-4"
      }`}
    >
      {children}
    </header>
  );
}

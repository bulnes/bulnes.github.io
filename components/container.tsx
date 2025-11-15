interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div {...props} className="mx-auto max-w-[600px] px-8">
      {children}
    </div>
  );
}

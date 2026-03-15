export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className={`bg-foreground text-white py-2 px-4 cursor-pointer hover:bg-header-text-hover ${className}`}>
      {children}
    </button>
  );
};

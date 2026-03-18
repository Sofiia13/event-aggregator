import Link from "next/link";

export const Button = ({
  children,
  className,
  endpoint,
}: {
  children: React.ReactNode;
  className?: string;
  endpoint: string;
}) => {
  return (
    <Link href={endpoint}>
      <button
        className={`bg-foreground text-white py-2 px-4 cursor-pointer hover:bg-header-text-hover ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

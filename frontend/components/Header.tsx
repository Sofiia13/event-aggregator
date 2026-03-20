import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold text-left text-header-text py-4 px-8">
          Event Aggregator
        </h1>
      </Link>
      {children}
    </div>
  );
};

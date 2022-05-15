import Link from "next/link";

export type NavProps = {};

export const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({
  children,
}) => (
  <nav className="absolute top-5 left-5 lg:left-10 flex items-center gap-4">
    <Link href="/">
      <a>
        <h1 className="text-xl font-bold">✏️ quiller</h1>
      </a>
    </Link>

    {children}
  </nav>
);

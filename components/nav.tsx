import Link from "next/link";
import { Icon } from "./icon";

export type NavProps = {};

export const Nav: React.FC<React.PropsWithChildren<NavProps>> = ({
  children,
}) => (
  <nav className="flex flex-wrap items-center gap-4 p-4 md:px-8">
    <Link href="/">
      <a>
        <h1 className="text-xl font-bold keep-all">✏️ quiller</h1>
      </a>
    </Link>

    {children}
  </nav>
);

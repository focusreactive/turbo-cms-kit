import { Link } from "../../ui/link";
import type { IHeaderProps } from "./types";

export function Header({ links }: IHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex flex-wrap items-center justify-center gap-12 p-3"
        aria-label="main mavigation"
      >
        {links.map((link) => (
          <Link key={link.text} {...link} />
        ))}
      </nav>
    </header>
  );
}

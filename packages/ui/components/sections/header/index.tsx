import { Link } from "../../ui/link";
import type { IHeaderProps } from "./types";

export function Header({ links, className }: IHeaderProps) {
  return (
    <header className={className}>
      <nav
        className="bg-bgColor flex flex-wrap items-center justify-center gap-x-12 gap-y-3 p-6"
        aria-label="main mavigation"
      >
        {links.map((link) => (
          <Link key={link.text} {...link} />
        ))}
      </nav>
    </header>
  );
}

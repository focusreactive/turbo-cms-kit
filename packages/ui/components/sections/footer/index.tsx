import { Image } from "../../ui/image";
import { Link } from "../../ui/link";
import { RichText } from "../../ui/richText";
import type { IFooterProps } from "./types";

export function Footer({ links, text, copywriteText, image }: IFooterProps) {
  return (
    <footer className="space-y-12">
      <div className="h-16">
        <Image {...image} fit="contain" />
      </div>
      <RichText {...text} />
      <nav
        className="flex flex-wrap items-center justify-center gap-3 p-3"
        aria-label="footer mavigation"
      >
        {links.map((link, i) => (
          <Link key={link.text + i} {...link} />
        ))}
      </nav>
      {copywriteText && (
        <p className="text-textColor text-center">{copywriteText}</p>
      )}
    </footer>
  );
}

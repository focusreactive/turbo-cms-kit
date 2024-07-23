import React from "react";

import { Link } from "../../ui/link";
import { RichText } from "../../ui/richText";
import { CtaVariant, type ICtaSectionProps } from "./types";

const CtaVariants = {
  [CtaVariant.Default]: "max-w-screen-md",
  [CtaVariant.Centered]: "text-center",
};

export const CTA: React.FC<ICtaSectionProps> = ({
  richText,
  links,
  variant = CtaVariant.Default,
}) => (
  <section>
    <div className={CtaVariants[variant]}>
      <RichText {...richText} />
      {links.length > 0 && (
        <div className="mt-8 space-x-4">
          {links.map((link) => (
            <Link {...link} key={link.text} />
          ))}
        </div>
      )}
    </div>
  </section>
);

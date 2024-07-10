import React from "react";
import { CtaVariant, type ICtaSectionProps } from "./types";
import RichText from "../../ui/richText";
import { Link } from "../../ui/link";

const CtaVariants = {
    [CtaVariant.Default]: "max-w-screen-md",
    [CtaVariant.Centered]: "text-center",
}

export const CTA: React.FC<ICtaSectionProps> = ({ richText, links, variant = CtaVariant.Default }) => (
    <section className="bg-white dark:bg-gray-900">
        <div className={CtaVariants[variant]}>
            <RichText {...richText} />
            {links.length > 0 && <div className="mt-8">{links.map((link) => <Link className="mr-4 mt-2" {...link} key={link.text} />)}</div>}
        </div>
    </section>
)
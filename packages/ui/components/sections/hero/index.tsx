import React from "react";
import Image from "../../ui/image";
import { Link } from "../../ui/link";
import RichText from "../../ui/richText";
import type { IHeroSectionProps } from "./types";


export const HeroSection: React.FC<IHeroSectionProps> = ({ image, richText, links }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <RichText {...richText} />
          {links.length > 0 && <div className="mt-8">{links.map((link) => <Link className="mr-4 mt-2" {...link} key={link.text} />)}</div>}
        </div>
        <div className="hidden lg:block lg:mt-0 lg:col-span-5 overflow-hidden">
          <Image {...image} />
        </div>
      </div>
    </div>
  );
}
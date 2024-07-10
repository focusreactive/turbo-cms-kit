import React from "react";
import Image from "../../ui/image";
import { Link } from "../../ui/link";
import RichText from "../../ui/richText";
import { LinkVariant } from "../../ui/link/types";

interface IHeroSectionProps {
  richText: any;
  image: any;
}

export const HeroSection: React.FC<IHeroSectionProps> = ({ image, richText }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <RichText richText={richText} />
          <Link href="#" text="Get Started" />
          <Link href="#" text="Speak to Sales" variant={LinkVariant.Secondary} />
        </div>
        <div className="lg:mt-0 lg:col-span-5">
          <Image {...image} />
        </div>
      </div>
    </div>
  );
}
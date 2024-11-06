import { stegaClean } from "@sanity/client/stega";
import imageUrlBuilder from "@sanity/image-url";

import { cn } from "@shared/ui";

import { client } from "@/lib/api/client";

import type { ISectionContainerProps } from "./types";

const builder = imageUrlBuilder(client);

export default function SectionContainer({
  children,
  className,
  sectionData,
}: ISectionContainerProps) {
  const {
    _key,
    marginTop,
    marginBottom,
    paddingX,
    paddingY,
    maxWidth,
    backgroundColor,
    backgroundImage,
  } = sectionData;

  const backgroundImageUrl = backgroundImage
    ? builder.image(backgroundImage).auto("format").fit("max").url()
    : null;

  const cleanMarginTop = stegaClean(marginTop);
  const cleanMarginBottom = stegaClean(marginBottom);
  const cleanBackgroundColor = stegaClean(backgroundColor);

  return (
    <section
      id={_key}
      className={cn("overflow-x-hidden", className, {
        "mt-0": cleanMarginTop === "none",
        "mb-0": cleanMarginBottom === "none",
        "mt-sectionBase": cleanMarginTop === "base",
        "mb-sectionBase": cleanMarginBottom === "base",
        "mt-sectionLg": cleanMarginTop === "lg",
        "mb-sectionLg": cleanMarginBottom === "lg",

        "section-white": cleanBackgroundColor === "white",
        "section-lightGray": cleanBackgroundColor === "lightGray",
        "section-darkGray": cleanBackgroundColor === "darkGray",
        "section-black": cleanBackgroundColor === "black",
      })}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : {}
      }
    >
      <div
        className={cn("mx-auto px-4 py-8", {
          "px-0": paddingX === "none",
          "py-0": paddingY === "none",
          "max-w-screen-xl": stegaClean(maxWidth) === "base",
        })}
      >
        {children}
      </div>
    </section>
  );
}

import { stegaClean } from "@sanity/client/stega";

import { cn } from "@shared/ui";

import type { ISectionContainerProps } from "./types";

export default function SectionContainer({
  children,
  className,
  sectionData,
}: ISectionContainerProps) {
  const { _key, marginTop, marginBottom, paddingX, paddingY, noMaxWidth } =
    sectionData;

  const cleanMarginTop = stegaClean(marginTop);
  const cleanMarginBottom = stegaClean(marginBottom);

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
      })}
    >
      <div
        className={cn("mx-auto max-w-screen-xl px-4 py-8", {
          "px-0": paddingX === "none",
          "py-0": paddingY === "none",
          "max-w-none": noMaxWidth,
        })}
      >
        {children}
      </div>
    </section>
  );
}

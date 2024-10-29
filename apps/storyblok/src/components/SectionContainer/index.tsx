import { storyblokEditable } from "@storyblok/react/rsc";

import { cn } from "@shared/ui";

import type { ISectionContainerProps } from "./types";

const isDraftMode = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

export default function SectionContainer({
  children,
  blok,
  className,
}: ISectionContainerProps) {
  const { _uid, paddingX, paddingY, marginTop, marginBottom } = blok;

  if (isDraftMode) {
    return (
      <section
        {...storyblokEditable(blok)}
        className={cn("bg-bgColor overflow-x-hidden", className, {
          "mt-0": marginTop === "none",
          "mb-0": marginBottom === "none",
          "mt-sectionBase": marginTop === "base",
          "mb-sectionBase": marginBottom === "base",
          "mt-sectionLg": marginTop === "lg",
          "mb-sectionLg": marginBottom === "lg",
        })}
        id={_uid}
      >
        <div
          className={cn("mx-auto max-w-screen-xl px-4 py-8", {
            "px-0": paddingX === "none",
            "py-0": paddingY === "none",
          })}
        >
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn("bg-bgColor", className, {
        "mt-0": marginTop === "none",
        "mb-0": marginBottom === "none",
        "mt-sectionBase": marginTop === "base",
        "mb-sectionBase": marginBottom === "base",
        "mt-sectionLg": marginTop === "lg",
        "mb-sectionLg": marginBottom === "lg",
      })}
      id={_uid}
    >
      <div
        className={cn("mx-auto max-w-screen-xl px-4 py-8", {
          "px-0": paddingX === "none",
          "py-0": paddingY === "none",
        })}
      >
        {children}
      </div>
    </section>
  );
}

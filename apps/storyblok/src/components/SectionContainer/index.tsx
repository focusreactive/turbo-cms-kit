import { storyblokEditable } from "@storyblok/react/rsc";

import { cn } from "@shared/ui";

import type { ISectionContainerProps } from "./types";

const isDraftMode = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

export default function SectionContainer({
  children,
  blok,
  className,
}: ISectionContainerProps) {
  const { theme, _uid } = blok;

  if (isDraftMode) {
    return (
      <section
        {...storyblokEditable(blok)}
        className={cn("bg-bgColor", theme, className)}
        id={_uid}
      >
        <div className="mx-auto max-w-screen-xl px-4">{children}</div>
      </section>
    );
  }

  return (
    <section className={cn("bg-bgColor", theme, className)} id={_uid}>
      <div className="mx-auto max-w-screen-xl px-4">{children}</div>
    </section>
  );
}

import { cn } from "@shared/ui";

import type { ISectionContainerProps } from "./types";

export default function SectionContainer(props: ISectionContainerProps) {
  const { children, id, theme = "light", className } = props;

  return (
    <section className={cn("bg-bgColor", theme)} id={id}>
      <div
        className={cn("mx-auto max-w-screen-xl px-4 py-8", className)}
      >
        {children}
      </div>
    </section>
  );
}

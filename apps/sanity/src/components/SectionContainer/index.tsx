import { cn } from "@shared/ui";

import type { ISectionContainerProps } from "./types";

export default function SectionContainer({
  children,
  id,
  theme = "light",
  className,
}: ISectionContainerProps) {
  return (
    <section className={cn("bg-bgColor", theme, className)} id={id}>
      <div className={cn("mx-auto max-w-screen-xl px-4")}>{children}</div>
    </section>
  );
}

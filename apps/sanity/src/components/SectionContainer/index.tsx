import type { ISectionContainerProps } from "./types";

export default function SectionContainer(props: ISectionContainerProps) {
  const { children, id } = props;

  return (
    <section className="" id={id}>
      <div className="mx-auto max-w-screen-xl px-4 py-8">{children}</div>
    </section>
  );
}

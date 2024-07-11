"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { type ISectionContainerProps } from "./types";

const isDraftMode = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

const SectionContainer: React.FunctionComponent<ISectionContainerProps> = (
  props,
) => {
  const { children, blok } = props;
  const id = blok._uid;

  if (isDraftMode) {
    return (
      <section className="" {...storyblokEditable(blok)} id={id}>
        <div className="mx-auto max-w-screen-xl px-4 py-8">{children}</div>
      </section>
    );
  }

  return (
    <section className="" id={id}>
      <div className="mx-auto max-w-screen-xl px-4 py-8">{children}</div>
    </section>
  );
};

export default SectionContainer;

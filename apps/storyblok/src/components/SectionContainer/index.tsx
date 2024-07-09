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
            <section className="px-2" {...storyblokEditable(blok)} id={id}>
                {children}
            </section>
        );
    }

    return (
        <section className="px-2" id={id}>
            {children}
        </section>
    );
};

export default SectionContainer;

import type { SbBlokData } from "@storyblok/react/rsc";

interface ICopy extends SbBlokData {
    title: string;
}

export interface ICopyProps {
    blok: ICopy;
}

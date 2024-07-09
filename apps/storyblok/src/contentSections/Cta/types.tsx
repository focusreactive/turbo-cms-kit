import type { SbBlokData } from "@storyblok/react/rsc";

interface ICta extends SbBlokData {
    title: string;
}

export interface ICtaProps {
    blok: ICta;
}

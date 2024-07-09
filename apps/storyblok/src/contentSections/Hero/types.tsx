import type { SbBlokData } from "@storyblok/react/rsc";

interface IHero extends SbBlokData {
    title: string;
}

export interface IHeroProps {
    blok: IHero;
}

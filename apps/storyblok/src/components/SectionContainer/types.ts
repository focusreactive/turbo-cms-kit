import { type SbBlokData } from "@storyblok/react/rsc";

interface ISectionContainer extends SbBlokData {
}

export interface ISectionContainerProps {
    children: React.ReactNode[] | React.ReactNode;
    blok: ISectionContainer;
}

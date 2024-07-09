import { type SbBlokData } from "@storyblok/react/rsc";

interface IPageContainer extends SbBlokData {
    /** RichText */
    body: SbBlokData[];
}

export interface IPageContainerProps {
    blok: IPageContainer;
}

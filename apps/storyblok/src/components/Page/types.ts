import type { SbBlokData } from "@storyblok/react/rsc";

interface IPageContainer extends SbBlokData {
  sections: SbBlokData[];
}

export interface IPageContainerProps {
  blok: IPageContainer;
}

import type { SbBlokData } from "@storyblok/react/rsc";

interface IPageContainer extends SbBlokData {
  sections: SbBlokData[];
  showCookieBanner: boolean;
}

export interface IPageContainerProps {
  blok: IPageContainer;
}

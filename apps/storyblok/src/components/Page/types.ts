import { type SbBlokData } from "@storyblok/react/rsc";

// todo: rename body to sections to be mo appropriate on project level
// sectionsBody ?

interface IPageContainer extends SbBlokData {
  /** RichText */
  body: SbBlokData[];
}

export interface IPageContainerProps {
  blok: IPageContainer;
}

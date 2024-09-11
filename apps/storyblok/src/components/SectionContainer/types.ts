import type { SbBlokData } from "@storyblok/react/rsc";

export interface ISectionContainer extends SbBlokData {
  theme: "light" | "dark";
}

export interface ISectionContainerProps {
  children: React.ReactNode;
  blok: ISectionContainer;
}

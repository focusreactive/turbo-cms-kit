import type { SbBlokData } from "@storyblok/react/rsc";

export interface ISectionContainer extends SbBlokData {
  marginTop?: "none" | "base" | "lg";
  marginBottom?: "none" | "base" | "lg";
  paddingX?: "none";
  paddingY?: "none";
  noMaxWidth?: boolean;
}

export interface ISectionContainerProps {
  children: React.ReactNode;
  blok: ISectionContainer;
  className?: string;
}

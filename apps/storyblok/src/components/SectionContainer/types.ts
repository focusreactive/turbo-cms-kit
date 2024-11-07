import type { AssetStoryblok } from "@/generated/extracted-types";
import type { SbBlokData } from "@storyblok/react/rsc";

export interface ISectionContainer extends SbBlokData {
  marginTop?: "none" | "base" | "lg";
  marginBottom?: "none" | "base" | "lg";
  paddingX?: "none";
  paddingY?: "none";
  maxWidth: "none" | "base" | "small";
  backgroundColor: "none" | "light" | "dark" | "light-gray" | "dark-gray";
  backgroundImage?: AssetStoryblok;
}

export interface ISectionContainerProps {
  children: React.ReactNode;
  blok: ISectionContainer;
  className?: string;
}

import { type SanityImageObject } from "@sanity/image-url/lib/types/types";

interface ISectionData {
  _key: string;
  theme?: "light" | "dark"; /// move to page
  paddingX?: "none";
  paddingY?: "none";
  marginTop?: "none" | "base" | "lg";
  marginBottom?: "none" | "base" | "lg";
  maxWidth?: "none" | "base";
  backgroundColor?: "none" | "white" | "lightGray" | "darkGray" | "black";
  backgroundImage?: SanityImageObject;
}

export interface ISectionContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  sectionData: ISectionData;
}

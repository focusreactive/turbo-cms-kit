interface ISectionData {
  _key: string;
  theme?: "light" | "dark"; /// move to page
  paddingX?: "none";
  paddingY?: "none";
  marginTop?: "none" | "base" | "lg";
  marginBottom?: "none" | "base" | "lg";
}

export interface ISectionContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  sectionData: ISectionData;
}

interface ISectionData {
  _key: string;
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

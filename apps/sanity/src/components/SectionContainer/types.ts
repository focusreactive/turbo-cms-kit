interface ISectionData {
  _key: string;
  paddingX?: "none";
  paddingY?: "none";
  marginTop?: "none" | "base" | "lg";
  marginBottom?: "none" | "base" | "lg";
  maxWidth?: "none" | "base";
  backgroundColor?: "none" | "white" | "lightGray" | "darkGray" | "black";
  backgroundImage?:
    | {
        asset?: {
          _ref: string;
          _type: "reference";
        };
        _type: "image";
      }
    | undefined;
}

export interface ISectionContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  sectionData: ISectionData;
}

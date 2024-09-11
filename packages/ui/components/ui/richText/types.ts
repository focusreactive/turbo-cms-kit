export enum AlignVariant {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface IRichTextProps {
  richText: React.ReactNode;
  removeInnerMargins?: boolean;
  alignVariant: AlignVariant;
  className?: string;
}

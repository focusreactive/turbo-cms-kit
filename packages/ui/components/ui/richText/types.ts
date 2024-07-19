import type { ReactNode } from "react";

export enum AlignVariant {
  Left = "left",
  Center = "center",
  Right = "right",
}

export interface IRichTextProps {
  richText: ReactNode | ReactNode[];
  removeInnerMargins?: boolean;
  alignVariant?: AlignVariant;
  className?: string;
}

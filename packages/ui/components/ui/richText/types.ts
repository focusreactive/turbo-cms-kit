import type { ReactNode } from "react";

export interface IRichTextProps {
  richText: ReactNode | ReactNode[];
  removeInnerMargins?: boolean;
  className?: string;
}

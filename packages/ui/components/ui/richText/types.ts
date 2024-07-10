import type { ReactNode } from "react";

export interface IRichTextProps {
    richText: ReactNode | ReactNode[];
    disableInnerMargins?: boolean;
    className?: string;
}

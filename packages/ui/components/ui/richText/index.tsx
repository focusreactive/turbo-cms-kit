import React from "react";
import { cn } from "../../../utils";
import type { IRichTextProps } from "./types";

export const RichText: React.FC<IRichTextProps> = ({
  className,
  richText,
  removeInnerMargins,
}) => {
  return (
    <div
      className={cn(
        "prose max-w-full dark:prose-invert lg:prose-xl",
        {
          "no-children-margins": removeInnerMargins,
        },
        className,
      )}
    >
      {richText}
    </div>
  );
}

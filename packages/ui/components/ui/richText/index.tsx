import React from "react";

import { cn } from "../../../utils";
import { AlignVariant, type IRichTextProps } from "./types";

export const RichText: React.FC<IRichTextProps> = ({
  className,
  richText,
  removeInnerMargins,
  alignVariant,
}) => {
  return (
    <div
      className={cn(
        "text-textColor prose max-w-full dark:prose-invert lg:prose-xl",
        {
          "no-children-margins": removeInnerMargins,
          "text-center": alignVariant === AlignVariant.Center,
          "text-right": alignVariant === AlignVariant.Right,
        },
        className,
      )}
    >
      {richText}
    </div>
  );
};

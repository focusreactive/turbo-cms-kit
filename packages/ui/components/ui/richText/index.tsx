import { cn } from "../../../utils";
import type { IRichTextProps } from "./types";

export default function RichText({
  className,
  richText,
  removeInnerMargins,
}: IRichTextProps) {
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

import type { IRichTextProps } from './types';
import { cn } from "../../../utils";

export default function RichText({ className, richText, removeInnerMargins }: IRichTextProps) {

    return (
        <div
            className={cn(
                "prose dark:prose-invert max-w-full lg:prose-xl",
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

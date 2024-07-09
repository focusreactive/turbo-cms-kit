import type { IRichTextProps } from './types';
import { cn } from "../../../utils";
import { getUiConfig } from '../../config';

export default function RichText({ className, richText }: IRichTextProps) {
    return (
        <div
            className={cn(
                "prose dark:prose-invert max-w-full lg:prose-xl",
                className,
            )}
        >
            {getUiConfig().richTextFormatterFunction(richText)}
        </div>
    );
}
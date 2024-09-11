import { cn } from "../../../utils";
import { RichText } from "../../ui/richText";
import type { ICopyProps } from "./types";

export function Copy({ columns, isReversedOnMobile }: ICopyProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-6 lg:flex-row", {
        "flex-col-reverse": isReversedOnMobile,
      })}
    >
      {columns.map((text, index) => (
        <div
          key={index}
          className={cn("w-full overflow-hidden rounded-lg", {
            "lg:basis-1/2": columns.length === 2,
          })}
        >
          <RichText {...text} />
        </div>
      ))}
    </div>
  );
}

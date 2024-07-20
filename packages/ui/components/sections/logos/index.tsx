import { cn } from "../../../utils";
import LogoItem from "./LogoItem";
import { LogosVariant, type ILogosProps } from "./types";

export function Logos({ items, variant = LogosVariant.Centered }: ILogosProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
        <div
          className={cn("flex flex-wrap items-center justify-center gap-6", {
            "justify-center": variant === LogosVariant.Centered,
            "justify-start": variant === LogosVariant.Left,
            "justify-end": variant === LogosVariant.Right,
          })}
        >
          {items?.map((item) => (
            <div className="h-20" key={item._key}>
              <LogoItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

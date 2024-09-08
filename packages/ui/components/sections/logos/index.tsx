import { cn } from "../../../utils";
import LogoItem from "./LogoItem";
import { LogosVariant, type ILogosProps } from "./types";

export function Logos({ items, variant = LogosVariant.Centered }: ILogosProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center justify-center gap-6", {
        "justify-center": variant === LogosVariant.Centered,
        "justify-start": variant === LogosVariant.Left,
        "justify-end": variant === LogosVariant.Right,
      })}
    >
      {items?.map((item, i) => (
        <div className="h-20" key={i}>
          <LogoItem {...item} />
        </div>
      ))}
    </div>
  );
}

import { cn } from "../../../utils";
import LogoItem from "./LogoItem";
import { AlignVariant, type ILogosProps } from "./types";

export function Logos({ items, alignVariant }: ILogosProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center justify-center gap-6", {
        "justify-center": alignVariant === AlignVariant.Center,
        "justify-start": alignVariant === AlignVariant.Left,
        "justify-end": alignVariant === AlignVariant.Right,
      })}
    >
      {items.map((item, i) => (
        <div className="h-20" key={i}>
          <LogoItem {...item} />
        </div>
      ))}
    </div>
  );
}

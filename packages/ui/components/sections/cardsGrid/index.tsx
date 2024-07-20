import { cn } from "../../../utils";
import DefaultCard from "./DefaultCard";
import type { ICardsGridProps } from "./types";

export function CardsGrid(props: ICardsGridProps) {
  //@ts-ignore
  const { items, columns, style, isFirst, isDarkTheme } = props;
  const withLink = style === "icon-title-inline" || style === "icon-top";

  if (columns === 3) {
    return (
      <dl
        className={cn(
          "not-prose mt-24 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3",
          { "md:grid-cols-2": !withLink },
          { "!mt-0": isFirst },
        )}
      >
        {items?.map((item) => (
          <DefaultCard item={item} isDarkTheme={isDarkTheme} />
        ))}
      </dl>
    );
  }

  if (columns === 2) {
    return (
      <div
        className={cn("mx-auto mt-16 sm:mt-20 lg:mt-24", {
          "!mt-0": isFirst,
        })}
      >
        <dl className="not-prose grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          {items?.map((Item) => (
            <DefaultCard item={Item} isDarkTheme={isDarkTheme} />
          ))}
        </dl>
      </div>
    );
  }

  return (
    <dl
      className={cn(
        "not-prose mt-10 space-y-8 text-base leading-7 text-gray-600",
        {
          "!mt-0": isFirst,
        },
      )}
    >
      {items?.map((Item) => (
        <DefaultCard item={Item} isDarkTheme={isDarkTheme} />
      ))}
    </dl>
  );
}

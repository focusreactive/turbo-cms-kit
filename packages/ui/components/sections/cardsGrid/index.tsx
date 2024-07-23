import { cn } from "../../../utils";
import ClickableImageCard from "./ClickableImageCard";
import DefaultCard from "./DefaultCard";
import type { ICardsGridProps } from "./types";

const getCardComponent: Record<string, any> = {
  "": DefaultCard,
  defaultCard: DefaultCard,
  clickableImageCard: ClickableImageCard,
};

export function CardsGrid(props: ICardsGridProps) {
  const { items, columns } = props;

  if (columns === 3) {
    return (
      <dl
        className={cn(
          "not-prose grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3",
        )}
      >
        {items?.map((item) => {
          const Component = getCardComponent[item?.type || ""];

          return <Component {...item} />;
        })}
      </dl>
    );
  }

  if (columns === 2) {
    return (
      <div className={cn("mx-auto", {})}>
        <dl className="not-prose grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
          {items?.map((item) => {
            const Component = getCardComponent[item?.type || ""];

            return <Component {...item} />;
          })}
        </dl>
      </div>
    );
  }

  return (
    <dl className={cn("not-prose space-y-8 text-base leading-7", {})}>
      {items?.map((item) => {
        const Component = getCardComponent[item?.type || ""];

        return <Component {...item} />;
      })}
    </dl>
  );
}

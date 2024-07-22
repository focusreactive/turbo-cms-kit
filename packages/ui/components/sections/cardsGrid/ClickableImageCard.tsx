import { BasicImage } from "../../ui/image";
import { RichText } from "../../ui/richText";
import type { IClickableImageCard } from "./types";

export default function ClickableImageCard({
  image,
  text,
  //   link,
}: IClickableImageCard) {
  return (
    <div className="">
      {image && (
        <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
          <BasicImage {...image} />
        </div>
      )}
      <RichText {...text} />
    </div>
  );
}

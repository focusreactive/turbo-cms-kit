import { cn } from "../../../utils";
import { BasicImage } from "../../ui/image";
import { ImageAspectRatio } from "../../ui/image/types";
import { Link } from "../../ui/link";
import { LinkVariant } from "../../ui/link/types";
import { LogosVariant, type ILogoItem, type ILogosProps } from "./types";

function LogoItem({ image, link }: ILogoItem) {
  const imageWrapperProps = {
    className: "mx-auto [height:inherit]",
    style: {
      aspectRatio: ImageAspectRatio[image.aspectRatio as ImageAspectRatio],
    },
  };

  if (link) {
    return (
      <Link {...link} {...imageWrapperProps} variant={LinkVariant.Default}>
        {image && <BasicImage {...image} fit="contain" />}
      </Link>
    );
  }

  return (
    <div {...imageWrapperProps}>
      <BasicImage {...image} fit="contain" />
    </div>
  );
}

export function Logos({ items, variant = LogosVariant.Centered }: ILogosProps) {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
        <div
          className={cn("flex flex-wrap items-center justify-center gap-3", {
            "justify-center": variant === LogosVariant.Centered,
            "justify-start": variant === LogosVariant.Left,
            "justify-end": variant === LogosVariant.Right,
          })}
        >
          {items.map((item) => (
            <div className="h-20" key={item._key}>
              <LogoItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

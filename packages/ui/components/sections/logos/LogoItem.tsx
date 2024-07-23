import { BasicImage } from "../../ui/image";
import { ImageAspectRatio } from "../../ui/image/types";
import { Link } from "../../ui/link";
import { LinkVariant } from "../../ui/link/types";
import type { ILogoItem } from "./types";

export default function LogoItem({ image, link }: ILogoItem) {
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

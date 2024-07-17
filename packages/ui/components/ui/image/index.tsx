import BasicNextImage from "next/image";

import { cn } from "../../../utils";
import type { IImageProps } from "./types";

export default function BasicImage({
  aspectRatio,
  fit,
  ...props
}: IImageProps) {
  return (
    <div
      className={cn("relative h-full", {
        "size-full": !aspectRatio,
      })}
      style={{ aspectRatio }}
    >
      <BasicNextImage
        style={{
          marginTop: 0,
          marginBottom: 0,
          objectFit: fit,
        }}
        {...props}
      />
    </div>
  );
}

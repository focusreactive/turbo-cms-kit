import BasicNextImage from "next/image";

import { cn } from "../../../utils";
import type { IImageProps, ImageAspectRatio } from "./types";

export function ImageContainer({
  children,
  aspectRatio,
}: {
  children: React.ReactNode;
  aspectRatio?: ImageAspectRatio;
}) {
  return (
    <div
      className={cn("relative mx-auto h-full", {
        "size-full": !aspectRatio,
      })}
      style={{
        aspectRatio,
      }}
    >
      {children}
    </div>
  );
}

export function BasicImage({ aspectRatio, fit, ...props }: IImageProps) {
  return (
    <ImageContainer aspectRatio={aspectRatio}>
      <BasicNextImage
        style={{
          marginTop: 0,
          marginBottom: 0,
          objectFit: fit,
        }}
        {...props}
      />
    </ImageContainer>
  );
}

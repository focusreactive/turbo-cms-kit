import { PortableText } from "@portabletext/react";
import { LogosVariant } from "@shared/ui/components/sections/logos/types";
import { ImageAspectRatio } from "@shared/ui/components/ui/image/types";

import { BasicImage, Logos } from "@shared/ui";

import { prepareImageProps, type IImage } from "./adapters/prepareImageProps";
import customImage from "./schemas/customImage";

export default function renderRichText(data: any[]) {
  return <PortableText value={data} components={COMPONENTS} />;
}

const COMPONENTS = {
  types: {
    [customImage.name]: ({ value }: { value: IImage }) => {
      return (
        <div
          className="relative mx-auto"
          style={{
            aspectRatio: ImageAspectRatio[value.aspectRatio],
            height: value.height,
          }}
        >
          {value.image && <BasicImage {...prepareImageProps(value)} />}
        </div>
      );
    },

    // todo: infer from schema
    "section.logos": ({
      value,
    }: {
      value: { items: any[]; variant?: LogosVariant };
    }) => {
      const formattedItems = value?.items?.map((item) => ({
        ...item,
        image: prepareImageProps(item.image),
        link:
          item.type === "logoLink" && item.link
            ? prepareImageProps(item.link)
            : undefined,
      }));

      return <Logos items={formattedItems} variant={value?.variant} />;
    },
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    annotations: ({ children, value, ...a }: any) => {
      console.log("value, a");
      console.log(value, a);
      return <span style={{ color: value.color }}>{children}</span>;
    },
  },
};

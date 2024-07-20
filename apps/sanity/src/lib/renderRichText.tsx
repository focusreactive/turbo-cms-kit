import { PortableText } from "@portabletext/react";
import type { LogosVariant } from "@shared/ui/components/sections/logos/types";
import { ImageAspectRatio } from "@shared/ui/components/ui/image/types";

import { BasicImage, CardsGrid, Logos } from "@shared/ui";

import { prepareImageProps, type IImage } from "./adapters/prepareImageProps";
import { prepareLinkProps } from "./adapters/prepareLinkProps";

export default function renderRichText(data: any[]) {
  return <PortableText value={data} components={COMPONENTS} />;
}

const COMPONENTS = {
  types: {
    customImage: ({ value }: { value: IImage }) => {
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
      const formattedItems = value.items?.map((item) => ({
        ...item,
        image: prepareImageProps(item.image),
        link:
          item.type === "logoLink" && item.link
            ? prepareLinkProps(item.link)
            : undefined,
      }));

      return <Logos items={formattedItems} variant={value?.variant} />;
    },
    // todo: infer from schema
    "section.cardsGrid": ({
      value,
    }: {
      value: { items: any[]; columns?: number };
    }) => {
      const formattedItems = value?.items?.map((item) => ({
        ...item,
        icon: item.icon ? prepareImageProps(item.icon) : undefined,
        link: item?.links?.[0]?.type
          ? prepareLinkProps(item.links[0])
          : undefined,
      }));

      return <CardsGrid items={formattedItems} columns={value?.columns || 2} />;
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
    annotations: ({ children, value }: any) => {
      return <span style={{ color: value.color }}>{children}</span>;
    },
  },
};

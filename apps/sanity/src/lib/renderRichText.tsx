import CardsGrid from "@/contentSections/CardsGrid";
import LinksList from "@/contentSections/LinksList";
import Logos from "@/contentSections/Logos";
import type { CustomImage } from "@/generated/extracted-schema-types";
import { PortableText } from "@portabletext/react";
import { stegaClean } from "@sanity/client/stega";
import { ImageAspectRatio } from "@shared/ui/components/ui/image/types";

import { Image } from "@shared/ui";

import { prepareImageProps } from "./adapters/prepareImageProps";

export default function renderRichText(data: any[]) {
  return <PortableText value={data} components={COMPONENTS} />;
}

const COMPONENTS = {
  types: {
    // todo: infer from schema
    break: () => {
      return <hr className="border-textColor" />;
    },

    customImage: ({ value }: { value: CustomImage }) => {
      return (
        <div
          className="relative mx-auto"
          style={{
            aspectRatio:
              ImageAspectRatio[value.aspectRatio || ImageAspectRatio["1/1"]],
            height: value.height,
          }}
        >
          {value.image && <Image {...prepareImageProps(value)} />}
        </div>
      );
    },

    // todo: infer from schema
    "section.logos": ({ value }: { value: any }) => {
      return <Logos data={value} />;
    },
    // todo: infer from schema
    "section.cardsGrid": ({ value }: { value: any }) => {
      return <CardsGrid data={value} />;
    },

    // todo: infer from schema
    "section.linksList": ({ value }: { value: any }) => {
      return <LinksList data={value} />;
    },
  },

  marks: {
    strong: ({ children }: any) => <b>{children}</b>,
    textColor: ({ children, value }: any) => (
      <span style={{ color: stegaClean(value.value) }}>{children}</span>
    ),
    highlightColor: ({ children, value }: any) => (
      <span style={{ background: stegaClean(value.value) }}>{children}</span>
    ),
  },
};

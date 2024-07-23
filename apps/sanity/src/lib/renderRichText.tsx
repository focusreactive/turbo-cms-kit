import CardsGrid from "@/contentSections/CardsGrid";
import LinksList from "@/contentSections/LinksList";
import Logos from "@/contentSections/Logos";
import { PortableText } from "@portabletext/react";
import { stegaClean } from "@sanity/client/stega";
import { ImageAspectRatio } from "@shared/ui/components/ui/image/types";

import { BasicImage } from "@shared/ui";

import { prepareImageProps, type IImage } from "./adapters/prepareImageProps";

export default function renderRichText(data: any[]) {
  return <PortableText value={data} components={COMPONENTS} />;
}

const COMPONENTS = {
  types: {
    // todo: infer from schema
    break: () => {
      return <hr className="lineBreak" />;
    },

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
    textColor: ({ children, value }: any) => (
      <span style={{ color: stegaClean(value.value) }}>{children}</span>
    ),
    highlightColor: ({ children, value }: any) => (
      <span style={{ background: stegaClean(value.value) }}>{children}</span>
    ),
  },
};

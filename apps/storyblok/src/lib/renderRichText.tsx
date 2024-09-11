import { StoryblokComponent, type ISbRichtext } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

import { Image } from "@shared/ui";

import { prepareImageProps, type IImage } from "./adapters/prepareImageProps";

export default function renderRichText(data: ISbRichtext) {
  return render(data, {
    markResolvers: {},
    nodeResolvers: {},
    blokResolvers: {
      image: (props) => {
        return (
          <div
            className="relative mx-auto"
            style={{
              aspectRatio: props.aspectRatio as string,
            }}
          >
            <Image
              {...prepareImageProps({
                ...(props as IImage),
              })}
            />
          </div>
        );
      },

      cardsGrid: (props) => {
        return (
          <StoryblokComponent
            blok={{
              ...props,
              component: "cardsGrid",
            }}
          />
        );
      },

      linksList: (props) => {
        return (
          <StoryblokComponent
            blok={{
              ...props,
              component: "linksList",
            }}
          />
        );
      },

      logos: (props) => {
        return (
          <StoryblokComponent
            blok={{
              ...props,
              component: "logos",
            }}
          />
        );
      },
    },
  });
}

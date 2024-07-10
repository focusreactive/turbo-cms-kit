import { render } from "storyblok-rich-text-react-renderer";
import type { ISbRichtext } from "@storyblok/react/rsc";
import BasicImage from "@shared/ui/components/ui/image";
import { type IImage, prepareImageProps } from "./adapters/prepareImageProps";

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
            <BasicImage
              {...prepareImageProps({
                ...props as IImage
              })}
            />
          </div>
        );
      },
    },
  });
}

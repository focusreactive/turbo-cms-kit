import { BasicImage } from "../../ui/image";
import { RichText } from "../../ui/richText";
import type { IBlogSectionProps } from "./types";

export enum Style {
  threeColumn = "three-column",
  threeColumnWithImages = "three-column-with-images",
}

export const templates: any = {
  [Style.threeColumn]: { header: "mx-auto max-w-2xl lg:mx-0" },
  [Style.threeColumnWithImages]: { header: "w-full text-center" },
  "three-column-with-background-images": { header: "w-full text-center" },
};

export function BlogSection({ text, style, posts }: IBlogSectionProps) {
  return (
    <div className="bg-bgColor py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`${templates[style]?.header}`}>
          <RichText {...text} />
        </div>

        <div className="border-textSecondaryColor mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => {
            return (
              <article className="flex max-w-xl flex-col items-start justify-between">
                {style === Style.threeColumnWithImages ? (
                  <div
                    className={"h-48 w-full rounded-md bg-cover bg-center pb-5"}
                  >
                    <BasicImage {...post.image} />
                  </div>
                ) : null}
                <div className="flex items-center gap-x-4 text-xs">
                  {/* {post.tags.map((tag) => {
                    return (
                      <SmartLink
                        key={getCmsKey(tag)}
                        className={
                          "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        }
                      />
                    );
                  })} */}
                </div>
                {/*<SmartLink {...post.link}>*/}
                <div className="group relative">
                  <RichText {...post.text} />
                </div>
                {/*</SmartLink>*/}

                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="size-10 overflow-hidden rounded-full">
                    <BasicImage {...post.image} />
                  </div>
                  <div className="text-sm leading-6">
                    <p className="text-textColor font-semibold">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {"author.name author.name"}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { cn } from "../../../utils";
import { Image } from "../../ui/image";
import { DefaultCardStyle, type IDefaultCardProps } from "./types";

export default function DefaultCard({
  style,
  image,
  link,
  title,
  description,
}: IDefaultCardProps) {
  switch (style) {
    case DefaultCardStyle.IconTop:
      return (
        <div className="relative flex flex-col text-left">
          <dt className="text-textColor text-base font-semibold leading-7">
            {image && (
              <div className="bg-primaryColor mb-6 flex size-10 h-10 items-center justify-center rounded-lg">
                <div className="size-5">
                  <Image
                    className="text-primaryColor invert"
                    aria-hidden="true"
                    {...image}
                  />
                </div>
              </div>
            )}
            {title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{description}</p>
            {link?.text && (
              <p className="mt-6">
                <a
                  href={link?.href}
                  className="text-primaryColor text-sm font-semibold leading-6"
                >
                  {link?.text}
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            )}
          </dd>
        </div>
      );
    case DefaultCardStyle.IconTitleInline:
      return (
        <div className="relative flex flex-col text-left">
          <dt className="text-textColor flex items-center gap-x-3 text-base font-semibold leading-7">
            {image && (
              <div className="size-5">
                <Image className="dark:invert" aria-hidden="true" {...image} />
              </div>
            )}
            {title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{description}</p>
            {link?.href && (
              <p className="mt-6">
                <a
                  href={link?.href}
                  className={cn(
                    "text-primaryColor text-sm font-semibold leading-6",
                  )}
                >
                  {link?.text}
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            )}
          </dd>
        </div>
      );
    case DefaultCardStyle.IconLeftWithBackground:
      return (
        <div className="relative pl-16 text-left">
          <dt className="text-textColor text-base font-semibold leading-7">
            {image && (
              <div className="bg-primaryColor absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                <div className="size-5">
                  <Image
                    className="text-primaryColor dark:invert"
                    aria-hidden="true"
                    {...image}
                  />
                </div>
              </div>
            )}
            {title}
          </dt>
          <dd className="text-textSecondaryColor mt-2 text-base leading-7">
            {description}
          </dd>
        </div>
      );
    case DefaultCardStyle.NoIcon:
      return (
        <div className="relative flex flex-col text-left">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
            {title}
          </dt>
          <dd className="mt-1 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{description}</p>
          </dd>
        </div>
      );
    case DefaultCardStyle.IconLeftSeparateTitle:
      return (
        <div className="relative pl-9 text-left">
          <dt className="text-textColor text-base font-semibold leading-7">
            {image && (
              <div className="absolute left-0 top-1 flex items-center justify-center dark:invert">
                <div className="size-5">
                  <Image
                    className="text-primaryColor"
                    aria-hidden="true"
                    {...image}
                  />
                </div>
              </div>
            )}
            {title}
          </dt>
          <dd className="text-textSecondaryColor mt-2 text-base leading-7">
            {description}
          </dd>
        </div>
      );
    case DefaultCardStyle.IconLeft:
    default:
      return (
        <div className="relative pl-9 text-left">
          <dt className={cn("text-textColor inline font-semibold")}>
            {image && (
              <div className="size-5 dark:invert">
                <Image
                  className={cn("text-primaryColor absolute left-1 top-1")}
                  aria-hidden="true"
                  {...image}
                />
              </div>
            )}
            {title}
          </dt>
          <dd className={cn("text-textSecondaryColor inline")}>
            {description}
          </dd>
        </div>
      );
  }
}

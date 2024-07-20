import { cn } from "../../../utils";
import { BasicImage } from "../../ui/image";

export default function DefaultCard({
  item,
  isDarkTheme,
}: {
  item: any;
  isDarkTheme: boolean;
}) {
  switch (item.style) {
    case "icon-top":
      return (
        <div className="relative flex flex-col text-left">
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <div className="size-5">
                <BasicImage
                  className="text-indigo-600 invert"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-gray-600">{item.description}</p>
            {item.link?.text && (
              <p className="mt-6">
                <a
                  href={item.link?.href}
                  className="text-sm font-semibold leading-6 text-indigo-600"
                >
                  {item.link?.text}
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            )}
          </dd>
        </div>
      );
    case "icon-title-inline":
      return (
        <div className="relative flex flex-col text-left">
          <dt
            className={cn(
              "flex items-center gap-x-3 text-base font-semibold leading-7",
              {
                "text-white": isDarkTheme,
              },
            )}
          >
            <div className="size-5">
              <BasicImage
                className={cn({
                  invert: !isDarkTheme,
                })}
                aria-hidden="true"
                {...item.icon}
              />
            </div>
            {item.title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-gray-600">{item.description}</p>
            {item?.link?.href && (
              <p className="mt-6">
                <a
                  href={item?.link?.href}
                  className={cn(
                    "text-sm font-semibold leading-6 text-indigo-600",
                    {
                      "text-indigo-400": isDarkTheme,
                    },
                  )}
                >
                  {item?.link?.text}
                  <span aria-hidden="true"> →</span>
                </a>
              </p>
            )}
          </dd>
        </div>
      );
    case "icon-left-with-background":
      return (
        <div className="relative pl-16 text-left">
          <dt
            className={cn("text-base font-semibold leading-7 text-gray-900", {
              "text-white": isDarkTheme,
            })}
          >
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <div className="size-5">
                <BasicImage
                  className="text-indigo-600 invert"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
            {item.description}
          </dd>
        </div>
      );
    case "no-icon":
      return (
        <div className="relative flex flex-col text-left">
          <dt
            className={cn(
              "flex items-center gap-x-3 text-base font-semibold leading-7",
              {
                "text-white": isDarkTheme,
              },
            )}
          >
            {item.title}
          </dt>
          <dd className="mt-1 flex flex-col leading-7">
            <p className="text-gray-600">{item.description}</p>
          </dd>
        </div>
      );
    case "icon-left-separate-title":
      return (
        <div className="relative pl-9 text-left">
          <dt
            className={cn("text-base font-semibold leading-7 text-gray-900", {
              "text-white": isDarkTheme,
            })}
          >
            <div className="absolute left-0 top-1 flex items-center justify-center">
              <div className="size-5">
                <BasicImage
                  className="text-indigo-600"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
            {item.description}
          </dd>
        </div>
      );
    case "icon-left":
    default:
      return (
        <div className="relative pl-9 text-left">
          <dt
            className={cn("inline font-semibold text-gray-900", {
              "text-white": isDarkTheme,
            })}
          >
            <div className="size-5">
              <BasicImage
                className={cn("absolute left-1 top-1 text-indigo-600", {
                  invert: isDarkTheme,
                })}
                aria-hidden="true"
                {...item.icon}
              />
            </div>
            {item.title}
          </dt>
          <dd
            className={cn("inline", {
              "text-gray-400": isDarkTheme,
            })}
          >
            {item.description}
          </dd>
        </div>
      );
  }
}

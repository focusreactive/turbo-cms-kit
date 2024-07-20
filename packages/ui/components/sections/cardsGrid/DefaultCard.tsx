import { cn } from "../../../utils";
import { BasicImage } from "../../ui/image";

export default function DefaultCard({ item }: { item: any }) {
  switch (item.style) {
    case "icon-top":
      return (
        <div className="relative flex flex-col text-left">
          <dt className="text-textColor text-base font-semibold leading-7">
            <div className="bg-primaryColor mb-6 flex size-10 h-10 items-center justify-center rounded-lg">
              <div className="size-5">
                <BasicImage
                  className="text-primaryColor invert"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{item.description}</p>
            {item.link?.text && (
              <p className="mt-6">
                <a
                  href={item.link?.href}
                  className="text-primaryColor text-sm font-semibold leading-6"
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
          <dt className="text-textColor flex items-center gap-x-3 text-base font-semibold leading-7">
            <div className="size-5">
              <BasicImage
                className="dark:invert"
                aria-hidden="true"
                {...item.icon}
              />
            </div>
            {item.title}
          </dt>
          <dd className="mt-4 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{item.description}</p>
            {item?.link?.href && (
              <p className="mt-6">
                <a
                  href={item?.link?.href}
                  className={cn(
                    "text-primaryColor text-sm font-semibold leading-6",
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
          <dt className="text-textColor text-base font-semibold leading-7">
            <div className="bg-primaryColor absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
              <div className="size-5">
                <BasicImage
                  className="text-primaryColor dark:invert"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="text-textSecondaryColor mt-2 text-base leading-7">
            {item.description}
          </dd>
        </div>
      );
    case "no-icon":
      return (
        <div className="relative flex flex-col text-left">
          <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
            {item.title}
          </dt>
          <dd className="mt-1 flex flex-col leading-7">
            <p className="text-textSecondaryColor">{item.description}</p>
          </dd>
        </div>
      );
    case "icon-left-separate-title":
      return (
        <div className="relative pl-9 text-left">
          <dt className="text-textColor text-base font-semibold leading-7">
            <div className="absolute left-0 top-1 flex items-center justify-center dark:invert">
              <div className="size-5">
                <BasicImage
                  className="text-primaryColor"
                  aria-hidden="true"
                  {...item.icon}
                />
              </div>
            </div>
            {item.title}
          </dt>
          <dd className="text-textSecondaryColor mt-2 text-base leading-7">
            {item.description}
          </dd>
        </div>
      );
    case "icon-left":
    default:
      return (
        <div className="relative pl-9 text-left">
          <dt className={cn("text-textColor inline font-semibold")}>
            <div className="size-5 dark:invert">
              <BasicImage
                className={cn("text-primaryColor absolute left-1 top-1")}
                aria-hidden="true"
                {...item.icon}
              />
            </div>
            {item.title}
          </dt>
          <dd className={cn("text-textSecondaryColor inline")}>
            {item.description}
          </dd>
        </div>
      );
  }
}

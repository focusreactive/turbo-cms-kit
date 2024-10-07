import NextLink from "next/link";

import { cn, getLinkClickParams } from "../../../utils";
import {
  LinkVariant,
  type ILinkVariantsClassNames,
  type LinkProps,
} from "./types";

// todo: rework to be button instead of link (and use asLink/Slot pattern)
export const LinkVariantsClassNames: ILinkVariantsClassNames = {
  [LinkVariant.Default]: "",
  [LinkVariant.Primary]:
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-bgColor rounded-lg bg-primaryColor hover:outline",
  [LinkVariant.Secondary]:
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-textColor border border-textColor rounded-lg focus:ring-4 focus:ring-textSecondaryColor",
  [LinkVariant.HeaderNav]: "text-textColor text-sm font-semibold leading-6",
  [LinkVariant.FooterNav]: "text-textColor  mr-4 hover:underline md:mr-6",
  [LinkVariant.Badge]:
    "relative rounded-full font-base px-3 py-1 text-textSecondaryColor ring-1 ring-textSecondaryColor hover:ring-primaryColor",
};

export function Link({
  children,
  text,
  href,
  className,
  variant,
  style,
  clickDisabled,
}: LinkProps) {
  const { className: clickClassName, ...clickParams } =
    getLinkClickParams(clickDisabled);

  return (
    <NextLink
      href={href}
      style={style}
      className={cn(LinkVariantsClassNames[variant], className, clickClassName)}
      {...clickParams}
    >
      {children || text}
    </NextLink>
  );
}

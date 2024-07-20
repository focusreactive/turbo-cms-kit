import React from "react";
import NextLink from "next/link";

import { cn } from "../../../utils";
import {
  LinkVariant,
  type ILinkVariantsClassNames,
  type LinkProps,
} from "./types";

// todo: rework to be button instead of link (and use asLink/Slot pattern)
export const LinkVariantsClassNames: ILinkVariantsClassNames = {
  [LinkVariant.Default]: "",
  [LinkVariant.Primary]:
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-textColor rounded-lg bg-primaryColor hover:bg-textSecondaryText",
  [LinkVariant.Secondary]:
    "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-textColor border border-textSecondaryText rounded-lg hover:bg-textSecondaryText focus:ring-4 focus:ring-textSecondaryText",
  [LinkVariant.HeaderNav]: "text-textColor text-sm font-semibold leading-6",
  [LinkVariant.FooterNav]: "text-textColor  mr-4 hover:underline md:mr-6",
};

export const Link: React.FC<LinkProps> = ({
  children,
  text,
  href,
  className,
  variant = LinkVariant.Primary,
  style,
}) => {
  return (
    <NextLink
      href={href}
      className={cn(LinkVariantsClassNames[variant], className)}
      style={style}
    >
      {children || text}
    </NextLink>
  );
};

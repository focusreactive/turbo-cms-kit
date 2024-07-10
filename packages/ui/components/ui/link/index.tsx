import React from "react"
import NextLink from "next/link"
import { LinkVariant, type ILinkVariantsClassNames, type LinkProps } from "./types"

export const LinkVariantsClassNames: ILinkVariantsClassNames = {
  [LinkVariant.Primary]: "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",
  [LinkVariant.Secondary]: "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
}

export const Link: React.FC<LinkProps> = (
  ({ text, href, variant = LinkVariant.Primary }) => {
    return (
      <NextLink
        href={href}
        className={LinkVariantsClassNames[variant]}
      >
        {text}
      </NextLink>
    )
  }
)
import React from "react"
import { getUiConfig } from "../../config"

export enum LinkVariant {
  Primary = "primary",
  Secondary = "secondary",
}

interface ILinkVariantsClassNames {
  [LinkVariant.Primary]: string
  [LinkVariant.Secondary]: string
}

const LinkVariantsClassNames: ILinkVariantsClassNames = {
  [LinkVariant.Primary]: "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",
  [LinkVariant.Secondary]: "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
}

interface LinkProps {
  text: string
  href: string
  variant?: LinkVariant
}

export const Link: React.FC<LinkProps> = (
  ({ text, href, variant = LinkVariant.Primary }) => {
    const Link = getUiConfig().linkComponent

    return (
      <Link
        href={href}
        className={LinkVariantsClassNames[variant]}
      >
        {text}
      </Link>
    )
  }
)
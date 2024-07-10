import React from "react"
import { getUiConfig } from "../../config"

interface LinkProps {
  text: string
  href: string
}

export const Link: React.FC<LinkProps> = (
  ({ text, href }) => {
    const Link = getUiConfig().linkComponent

    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        {text}
      </Link>
    )
  }
)
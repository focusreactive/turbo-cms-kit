export enum LinkVariant {
    Primary = "primary",
    Secondary = "secondary",
}

export interface ILinkVariantsClassNames {
    [LinkVariant.Primary]: string
    [LinkVariant.Secondary]: string
}

export interface LinkProps {
    text: string
    href: string
    variant?: LinkVariant
}
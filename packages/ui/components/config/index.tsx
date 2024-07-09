import React, { type AnchorHTMLAttributes } from "react"

interface IBasicConfiguration {
    richTextFormatterFunction: (richText: any) => any;
    imageUrlFormatterFunction: (url: string) => string;
    linkComponent: React.ComponentType<ILinkComponentProps>;
}

interface IInitializationBasicConfiguration {
    richTextFormatterFunction?: (richText: any) => any;
    imageUrlFormatterFunction?: (url: string) => string;
    linkComponent?: React.ComponentType<ILinkComponentProps>;
}

interface ILinkComponentProps extends React.PropsWithChildren {
    linkProps: AnchorHTMLAttributes<HTMLAnchorElement>
}

const BasicLinkComponent: React.FC<ILinkComponentProps> = ({ children, linkProps }) => {
    return <a {...linkProps}>{children}</a>
}

export const configurateUi = (config: IInitializationBasicConfiguration) => {
    basicUiConfig = { ...basicUiConfig, ...config }
}

let basicUiConfig: IBasicConfiguration = {
    richTextFormatterFunction: (richText) => richText as React.ReactNode,
    imageUrlFormatterFunction: (imageUrl) => imageUrl,
    linkComponent: BasicLinkComponent
}

export const getUiConfig = () => {
    return { ...basicUiConfig }
}
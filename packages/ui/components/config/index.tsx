import Link from "next/link";

interface IBasicConfiguration {
    richTextFormatterFunction: (richText: any) => any;
    imageUrlFormatterFunction: (url: string) => string;
    linkComponent: typeof Link;

}

interface IInitializationBasicConfiguration {
    richTextFormatterFunction?: (richText: any) => any;
    imageUrlFormatterFunction?: (url: string) => string;
    linkComponent?: typeof Link;
}


export const configurateUi = (config: IInitializationBasicConfiguration) => {
    basicUiConfig = { ...basicUiConfig, ...config }
}

let basicUiConfig: IBasicConfiguration = {
    richTextFormatterFunction: (richText) => richText as React.ReactNode,
    imageUrlFormatterFunction: (imageUrl) => imageUrl,
    linkComponent: Link
}

export const getUiConfig = () => {
    return { ...basicUiConfig }
}
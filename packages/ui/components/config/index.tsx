import Link from "next/link";
import { type IImageProps } from "../ui/image";

interface IBasicConfiguration {
    richTextFormatterFunction: (richText: any) => any;
    prepareImageProps: (data: any) => IImageProps;
    linkComponent: typeof Link;
}

interface IInitializationBasicConfiguration {
    richTextFormatterFunction?: (richText: any) => any;
    prepareImageProps: (data: any) => IImageProps;
    linkComponent?: typeof Link;
}


export const configurateUi = (config: IInitializationBasicConfiguration) => {
    basicUiConfig = { ...basicUiConfig, ...config }
}

let basicUiConfig: IBasicConfiguration = {
    richTextFormatterFunction: (richText) => richText as React.ReactNode,
    linkComponent: Link,
    prepareImageProps: (data) => data as IImageProps
}

export const getUiConfig = () => {
    return { ...basicUiConfig }
}
import BasicNextImage, { type ImageProps } from "next/image";
import React from "react";
import { getUiConfig } from "../../config";

export enum ImageAspectRatio {
    "16/9" = "16/9",
    "3/2" = "3/2",
    "4/3" = "4/3",
    "1/1" = "1/1",
    "9/16" = "9/16",
    "1/2" = "1/2",
    "4/1" = "4/1",
    "3/1" = "3/1",
    "61/29" = "61/29",
}

export interface IImageProps extends ImageProps {
    aspectRatio?: ImageAspectRatio
    fit?: "cover" | "contain";
}

const BasicImage: React.FC<IImageProps> = ({ aspectRatio, fit, ...props }) => {
    if (aspectRatio) {
        return (
            <div className={`relative h-full`} style={{ aspectRatio }}>
                <BasicNextImage
                    style={{
                        marginTop: 0,
                        marginBottom: 0,
                        objectFit: fit,
                    }}
                    {...props}

                />
            </div>
        );
    }

    return (
        <div className={`relative h-full `}>
            <BasicNextImage
                style={{
                    objectFit: fit,
                }}
                className="size-full"
                {...props}
            />
        </div>
    );
}

const Image: React.FC<IImageProps & any> = (props) => {
    const fomattedProps = getUiConfig().prepareImageProps(props);

    return <BasicImage className="size-full" {...fomattedProps} />
}

export default Image;
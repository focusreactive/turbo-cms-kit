import BasicNextImage from "next/image";
import React from "react";
import type { IImageProps } from "./types";

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

export default BasicImage;
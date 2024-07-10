import type { ICopy5050Props } from "./types";
import RichText from "../../ui/richText";
import React from "react";
import { cn } from "../../../utils";

export const Copy5050: React.FC<ICopy5050Props> = (props) => {
    const { columns, isReversedOnMobile } = props;

    return (
        <div
            className={cn("flex flex-col items-center gap-6 lg:flex-row", {
                "flex-col-reverse": isReversedOnMobile,
            })}
        >
            {columns.map((text, index) => (
                <div
                    key={index}
                    className="w-full overflow-hidden rounded-lg lg:basis-1/2"
                >
                    <RichText {...text} />
                </div>
            ))}
        </div>
    );
}

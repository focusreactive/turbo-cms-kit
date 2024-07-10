import React from "react";
import RichText from "../../ui/richText";
import type { ICopyProps } from "./types";



export const Copy: React.FC<ICopyProps> = ({ richText }) => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                    <RichText {...richText} />
                </div>
            </div>
        </div>
    )
}
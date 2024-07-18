import React from "react";

import type { ICopyProps } from "./types";
import { RichText } from "../../ui/richText";

export const Copy: React.FC<ICopyProps> = ({ richText }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
        <RichText {...richText} />
      </div>
    </div>
  );
};

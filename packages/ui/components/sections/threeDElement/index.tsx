import React from "react";

import type { IThreeDElementProps } from "./types";

// todo: remove React.FC<> and replace with common function and type
export const ThreeDElement: React.FC<IThreeDElementProps> = ({ title }) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="text-gray-500 dark:text-gray-400 sm:text-lg">{title}</div>
    </div>
  );
};

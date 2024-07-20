import React from "react";

import { RichText } from "../../ui/richText";
import type { ICopyProps } from "./types";

export const Copy: React.FC<ICopyProps> = ({ richText }) => {
  return (
    <div className="sm:text-lg">
      <RichText {...richText} />
    </div>
  );
};

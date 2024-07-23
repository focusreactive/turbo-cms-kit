import React from "react";

import { BlocksInput } from "./BlocksInput";

export const componentsWithBlocksInput = (params: object) => {
  return {
    field: (props: any) => <BlocksInput {...props} {...params} />,
    // input: (props) => (
    // <span style={{ backgroundColor: "red" }}>wefwefwefwefwfwf</span>
    // ),
  };
};

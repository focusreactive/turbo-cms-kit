import { Fragment, type FC } from "react";

import DonutModel from "./donut-model";
import type { IThreeDElementProps } from "./types";

const MODELS_MAP: Record<IThreeDElementProps["model"], FC> = {
  donut: DonutModel,
  globe: Fragment,
  "kubik-rubik": Fragment,
};

export function ThreeDElement({ model }: IThreeDElementProps) {
  const ModelComponent = MODELS_MAP[model];

  return (
    <div className="">
      <ModelComponent />
    </div>
  );
}

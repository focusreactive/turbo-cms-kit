import type { FC } from "react";

import EmptyBlock from "../../EmptyBlock";
import DonutModel from "./donut-model";
import GlobeModel from "./globe-model";
import KubikRubik from "./kubik-rubik";
import type { IThreeDElementProps } from "./types";

const MODELS_MAP: Record<IThreeDElementProps["model"], FC> = {
  donut: DonutModel,
  globe: GlobeModel,
  "kubik-rubik": KubikRubik,
};

export function ThreeDElement({ model }: IThreeDElementProps) {
  const ModelComponent = MODELS_MAP[model] as any;

  if (!ModelComponent) return <EmptyBlock name="3D Element" />;

  return (
    <div className="">
      <ModelComponent />
    </div>
  );
}

"use client";

import React from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";

import { type IPageContainerProps } from "./types";

const PageContainer: React.FunctionComponent<IPageContainerProps> = ({
  blok,
}) => {
  const { body } = blok;

  return (
    <div className="mt-4">
      {body.map((blok) => (
        <StoryblokComponent blok={{ ...blok }} key={blok._uid} />
      ))}
    </div>
  );
};

export default PageContainer;

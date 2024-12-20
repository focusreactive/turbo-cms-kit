import type { ISbStoryData } from "@storyblok/react/rsc";

export interface IDataContextValues {
  allResolvedLinks: any[];
  globalComponentsStories: ISbStoryData[];
}

export interface IDataContextProviderProps extends IDataContextValues {
  children: React.ReactNode;
}

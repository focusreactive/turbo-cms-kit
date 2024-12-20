"use client";

import { createContext, use } from "react";

import type { IDataContextProviderProps, IDataContextValues } from "./types";

export const DataContext = createContext<IDataContextValues>({
  allResolvedLinks: [],
  globalComponentsStories: [],
});

export function DataContextProvider({
  children,
  allResolvedLinks,
  globalComponentsStories,
}: IDataContextProviderProps) {
  return (
    // @ts-ignore
    <DataContext
      value={{
        allResolvedLinks,
        globalComponentsStories,
      }}
    >
      {/* @ts-ignore */}
      {children}
    </DataContext>
  );
}

export const useDataContext = () => {
  return use(DataContext);
};

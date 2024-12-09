"use client";

import { createContext, use } from "react";

import type { IDataContextProviderProps, IDataContextValues } from "./types";

export const DataContext = createContext<IDataContextValues>({
  allResolvedLinks: [],
  headersAndFooters: [],
});

export function DataContextProvider({
  children,
  allResolvedLinks,
  headersAndFooters,
}: IDataContextProviderProps) {
  return (
    // @ts-ignore
    <DataContext
      value={{
        allResolvedLinks,
        headersAndFooters,
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

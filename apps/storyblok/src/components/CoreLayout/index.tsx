import { DataContextProvider } from "@/components/DataContext";
import StoryblokProvider from "@/components/StoryblokProvider";

import type { ICoreLayoutProps } from "./types";

export default function CoreLayout({
  children,
  allResolvedLinks,
}: ICoreLayoutProps) {
  return (
    <StoryblokProvider>
      <DataContextProvider allResolvedLinks={allResolvedLinks}>
        {children}
      </DataContextProvider>
    </StoryblokProvider>
  );
}

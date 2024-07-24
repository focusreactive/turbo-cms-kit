import { type Metadata } from "next";
import config from "config";

import VisualEditing from "@/components/VisualEditing";

export const metadata: Metadata = {
  title: `${config.siteName} - Website`,
};

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "true";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {isPreview && <VisualEditing />}
    </>
  );
}

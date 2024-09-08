import { Suspense, type PropsWithChildren } from "react";
import type { Viewport } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
// import { NextSteps } from "@shared/ui/components/sections/next-steps";

const LiveVisualEditing = dynamic(
  () => import("@/lib/loader/LiveVisualEditing"),
);

// export async function generateMetadata(): Promise<Metadata> {
//   const [{ data: settings }, { data: homePage }] = await Promise.all([
//     loadSettings(),
//     loadHomePage(),
//   ])
//
//   const ogImage = urlForOpenGraphImage(settings?.ogImage)
//   return {
//     title: homePage?.title
//       ? {
//         template: `%s | ${homePage.title}`,
//         default: homePage.title || 'Personal website',
//       }
//       : undefined,
//     description: homePage?.overview
//       ? toPlainText(homePage.overview)
//       : undefined,
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   }
// }

export const viewport: Viewport = {
  themeColor: "#000",
};

export default async function IndexRoute({ children }: PropsWithChildren) {
  return (
    <>
      {/*<Suspense>*/}
      {/*  <Navbar />*/}
      {/*</Suspense>*/}

      <Suspense>{children}</Suspense>

      {/*<Suspense>*/}
      {/*  <NextSteps studioUrl="/studio" />*/}
      {/*</Suspense>*/}

      {/*<Suspense>*/}
      {/*  <Footer />*/}
      {/*</Suspense>*/}

      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  );
}

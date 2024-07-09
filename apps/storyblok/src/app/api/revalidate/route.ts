import { revalidateTag } from "next/cache";
import { SB_CACHE_VERSION } from "@/constants/cacheTags";

export async function POST(request: Request) {
  const body = await request.json();
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!body) {
    return Response.json({ error: "No body provided" }, { status: 400 });
  }

  let pagePath;
  if (body.action === "published") {
    pagePath = body.full_slug;
  } else {
    // find the page path in description text
    const regex = /\(([^)]*\/[^)]+)\)/g;
    let match, result;

    while ((match = regex.exec(body.text)) !== null) {
      result = match[1];
    }

    pagePath = result?.replace("(", "")?.replace(")", "");
  }

  if (secret !== process.env.NEXT_PREVIEW_TOKEN) {
    return Response.json({ error: "No secret provided" }, { status: 400 });
  }

  if (!pagePath) {
    return Response.json({ error: "No tag provided" }, { status: 400 });
  }

  revalidateTag(SB_CACHE_VERSION);

  return Response.json({ revalidated: true, now: Date.now() });
}

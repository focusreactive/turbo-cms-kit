import crypto from "crypto";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const space_id = searchParams.get("space_id");
  const timestamp = searchParams.get("timestamp");
  const token = searchParams.get("token");
  const slug = searchParams.get("slug");

  const validationString =
    space_id + ":" + process.env.SB_PREVIEW_TOKEN + ":" + timestamp;

  const validationToken = crypto
    .createHash("sha1")
    .update(validationString)
    .digest("hex");

  if (
    token == validationToken &&
    Number(timestamp) > Math.floor(Date.now() / 1000) - 3600
  ) {
    (await draftMode()).enable();

    console.log("🔥 draft mode enabled");

    redirect(`${origin}/${slug}`);
  }

  console.log("❌ draft mode is NOT enabled, invalid token");

  return new Response("Draft mode is NOT enabled, invalid token");
}

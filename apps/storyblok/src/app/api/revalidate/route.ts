import { createHmac } from "crypto";
import { revalidateTag } from "next/cache";

import { SB_CACHE_VERSION_TAG } from "@/constants/cacheTags";

const webhookSecret = process.env.SB_WEBHOOK_REVALIDATE_SECRET || "";

function generateSignature(body: string) {
  return createHmac("sha1", webhookSecret).update(body).digest("hex");
}

export async function POST(request: Request) {
  const body = await request.json();
  const signature = request.headers.get("webhook-signature");

  if (!body || !signature) {
    return Response.json(
      { error: "No body or signature provided" },
      { status: 400 },
    );
  }

  const generatedSignature = generateSignature(JSON.stringify(body));

  if (signature !== generatedSignature) {
    return Response.json({ error: "Invalid signature" }, { status: 400 });
  }

  revalidateTag(SB_CACHE_VERSION_TAG);

  return Response.json({ revalidated: true, now: Date.now() });
}

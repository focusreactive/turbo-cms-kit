import crypto from "crypto";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(`http://localhost:3000/${request.url}`);
  const space_id = searchParams.get("space_id");
  const timestamp = searchParams.get("timestamp");
  const token = searchParams.get("token");

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
    // you're in the edit mode.
    return Response.json({ result: true });
  }

  return Response.json({ result: false });
}

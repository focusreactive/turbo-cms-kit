import { draftMode } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  draftMode().disable();
  const url = new URL(request.nextUrl);
  return NextResponse.redirect(new URL("/", url.origin));
}

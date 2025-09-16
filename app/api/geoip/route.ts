import { NextResponse } from "next/server";
import { lookupIP } from "@/lib/geoip";

export async function GET(request: Request) {

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "8.8.8.8"; // fallback for testing

  const data = await lookupIP(ip);

  return NextResponse.json({ ip, ...data });
}
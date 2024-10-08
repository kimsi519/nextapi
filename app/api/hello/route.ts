import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "Guest";

  return NextResponse.json({
    message: `Hello, ${name}!`,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({
    message: `응답합니다 : ${JSON.stringify(data)}`,
  });
}

import { NextRequest, NextResponse } from "next/server";
import { books } from "../../data/bookdata";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");

  const reqHeaders = new Headers(req.headers);
  const authorization = reqHeaders.get("Authorization");
  const userAgent = reqHeaders.get("User-Agent");

  const response = NextResponse.json(books, {
    headers: {
      "Custom-Cookie": userAgent || "",
      "Set-Cookie": "sid=123",
    },
  });

  response.cookies.set("X", "xx");
  cookies().set("otherCookies", "oo", {
    maxAge: 50,
    httpOnly: true,
    secure: false,
  });
  return response;
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({
    message: `응답합니다 : ${JSON.stringify(data)}`,
  });
}

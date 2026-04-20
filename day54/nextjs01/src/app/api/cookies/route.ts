import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const key = request.nextUrl.searchParams.get("key");
  return NextResponse.json({
    value: cookieStore.get(key!)?.value,
  });
};

export const POST = async (request: NextRequest) => {
  const { key, value } = await request.json();
  const cookieStore = await cookies();
  cookieStore.set(key, value, {
    httpOnly: true,
    maxAge: 3600,
  });
  return NextResponse.json({ success: true }, { status: 201 });
};

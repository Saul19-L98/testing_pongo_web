import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const token = await req.json();
    cookies().set("Cookie", token.token, {
      path: "/",
      maxAge: -1,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return NextResponse.json({
      status: "success",
      message: "logout",
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: "error",
        error: error.message,
      });
    }
  }
}

import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  try {
    let isValidToken = false;
    const token = cookies().get("Cookie");
    if (token?.value) {
      isValidToken = true;
    }
    return NextResponse.json({
      isAuth: isValidToken,
      message: "valid token",
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

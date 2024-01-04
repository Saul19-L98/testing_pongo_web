import { cookies } from "next/headers";
import { api } from "@/libs/axios-config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const params = {
      cache: "no-store", //evita que guarde el cache
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await api.post("/auth", params as RequestInit);
    cookies().set("Cookie", data.data.token, {
      path: "/",
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return NextResponse.json({
      status: "success",
      ...data.data,
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

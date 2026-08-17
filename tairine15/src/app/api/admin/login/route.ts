import { NextRequest, NextResponse } from "next/server";
import { createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/adminAuth";
import { checkRateLimit } from "@/utils/rateLimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const { allowed } = checkRateLimit(`admin-login:${ip}`, 5, 5 * 60_000);

  if (!allowed) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde alguns minutos." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const password = body?.password;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ error: "ADMIN_PASSWORD não configurado no servidor." }, { status: 500 });
  }
  if (typeof password !== "string" || password !== adminPassword) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const token = createAdminToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
  return response;
}

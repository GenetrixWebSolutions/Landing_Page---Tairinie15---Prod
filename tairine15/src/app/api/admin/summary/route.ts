import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getRsvpSummary } from "@/services/rsvpService";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }
  const summary = await getRsvpSummary();
  return NextResponse.json(summary);
}

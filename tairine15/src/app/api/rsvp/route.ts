import { NextRequest, NextResponse } from "next/server";
import { rsvpSchema } from "@/lib/validations";
import { upsertRsvp, RsvpBusinessError } from "@/services/rsvpService";
import { checkRateLimit } from "@/utils/rateLimit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const { allowed } = checkRateLimit(`rsvp:${ip}`, 5);

  if (!allowed) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde um instante e tente novamente." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  const parsed = rsvpSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    const rsvp = await upsertRsvp(parsed.data);
    return NextResponse.json({ status: rsvp.status, confirmedCount: rsvp.confirmedCount, respondedAt: rsvp.respondedAt });
  } catch (error) {
    if (error instanceof RsvpBusinessError) {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    console.error("Erro ao salvar RSVP:", error);
    return NextResponse.json({ error: "Não foi possível salvar sua resposta. Tente novamente." }, { status: 500 });
  }
}

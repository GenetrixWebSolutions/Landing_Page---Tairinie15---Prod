import { NextRequest, NextResponse } from "next/server";
import { guestSearchSchema } from "@/lib/validations";
import { searchGuests } from "@/services/guestService";
import { checkRateLimit } from "@/utils/rateLimit";
import { RSVP_LIMITS } from "@/constants/event";

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const { allowed } = checkRateLimit(`search:${ip}`, RSVP_LIMITS.searchRateLimitPerMinute);

  if (!allowed) {
    return NextResponse.json(
      { error: "Muitas buscas em pouco tempo. Aguarde um instante e tente novamente." },
      { status: 429 }
    );
  }

  const query = request.nextUrl.searchParams.get("query") ?? "";
  const parsed = guestSearchSchema.safeParse({ query });
  if (!parsed.success) return NextResponse.json({ results: [] });

  try {
    const results = await searchGuests(parsed.data.query);
    return NextResponse.json({ results });
  } catch (error) {
    console.error("Erro na busca de convidados:", error);
    return NextResponse.json({ error: "Não foi possível realizar a busca. Tente novamente." }, { status: 500 });
  }
}

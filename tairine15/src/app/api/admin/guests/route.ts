import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado." }, { status: 401 });
  }

  const format = request.nextUrl.searchParams.get("format");
  const statusFilter = request.nextUrl.searchParams.get("status");

  const guests = await prisma.guest.findMany({
    where: { isActive: true },
    include: { group: true, rsvp: true },
    orderBy: { name: "asc" },
  });

  const rows = guests
    .map((g: (typeof guests)[number]) => ({
      name: g.name,
      group: g.group?.name ?? "-",
      invitationCode: g.invitationCode,
      status: g.rsvp?.status ?? "PENDING",
      confirmedCount: g.rsvp?.confirmedCount ?? 0,
      dietaryRestrictions: g.rsvp?.dietaryRestrictions ?? "",
      phone: g.rsvp?.phone ?? g.phone ?? "",
      message: g.rsvp?.message ?? "",
    }))
    .filter((r: { status: string }) => !statusFilter || r.status === statusFilter);

  if (format === "csv") {
    const header = "Nome,Grupo,Codigo,Status,Confirmados,Restricoes,Telefone,Mensagem";
    const csvBody = rows
      .map((r: (typeof rows)[number]) =>
        [r.name, r.group, r.invitationCode, r.status, r.confirmedCount, r.dietaryRestrictions, r.phone, r.message]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");
    const csv = `${header}\n${csvBody}`;

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=convidados-tairine.csv",
      },
    });
  }

  return NextResponse.json({ guests: rows });
}

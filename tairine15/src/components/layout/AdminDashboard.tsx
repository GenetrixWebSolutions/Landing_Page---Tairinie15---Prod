"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Summary {
  totalInvites: number; confirmed: number; declined: number; pending: number;
  totalPeopleConfirmed: number; dietaryRestrictionsCount: number;
}
interface GuestRow {
  name: string; group: string; invitationCode: string; status: string;
  confirmedCount: number; dietaryRestrictions: string; phone: string; message: string;
}

export function AdminDashboard() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [guests, setGuests] = useState<GuestRow[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [search, setSearch] = useState("");

  useEffect(() => { fetch("/api/admin/summary").then((r) => r.json()).then(setSummary); }, []);
  useEffect(() => {
    const params = filter ? `?status=${filter}` : "";
    fetch(`/api/admin/guests${params}`).then((r) => r.json()).then((data) => setGuests(data.guests ?? []));
  }, [filter]);

  const filteredGuests = guests.filter((g) => g.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-8 font-serif text-3xl text-white">Painel Administrativo</h1>
      {summary && (
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <SummaryCard label="Total de convites" value={summary.totalInvites} />
          <SummaryCard label="Confirmados" value={summary.confirmed} />
          <SummaryCard label="Recusados" value={summary.declined} />
          <SummaryCard label="Pendentes" value={summary.pending} />
          <SummaryCard label="Pessoas confirmadas" value={summary.totalPeopleConfirmed} />
          <SummaryCard label="Restrições alimentares" value={summary.dietaryRestrictionsCount} />
        </div>
      )}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input placeholder="Buscar por nome" value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-white/40" />
        {["", "CONFIRMED", "DECLINED", "PENDING"].map((status) => (
          <button key={status} onClick={() => setFilter(status)} className={`rounded-full px-4 py-1.5 text-sm ${filter === status ? "bg-[var(--color-royal)] text-white" : "bg-white/5 text-white/60"}`}>{status || "Todos"}</button>
        ))}
        <Button size="md" variant="secondary" onClick={() => window.open(`/api/admin/guests?format=csv${filter ? `&status=${filter}` : ""}`, "_blank")}>Exportar CSV</Button>
      </div>
      <Card className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-white/50">
              <th className="py-2 pr-4">Nome</th><th className="py-2 pr-4">Grupo</th><th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Confirmados</th><th className="py-2 pr-4">Restrições</th><th className="py-2 pr-4">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.map((g) => (
              <tr key={g.invitationCode} className="border-b border-white/5 text-white/80">
                <td className="py-2 pr-4">{g.name}</td><td className="py-2 pr-4">{g.group}</td><td className="py-2 pr-4">{g.status}</td>
                <td className="py-2 pr-4">{g.confirmedCount}</td><td className="py-2 pr-4">{g.dietaryRestrictions || "-"}</td><td className="py-2 pr-4">{g.phone || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="text-center">
      <p className="font-serif text-3xl text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-white/50">{label}</p>
    </Card>
  );
}

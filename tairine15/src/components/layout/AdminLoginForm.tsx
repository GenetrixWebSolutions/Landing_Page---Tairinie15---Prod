"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true); setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) { const data = await response.json(); setError(data.error ?? "Não foi possível entrar."); return; }
      router.refresh();
    } finally { setIsSubmitting(false); }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <Card className="w-full max-w-sm">
        <h1 className="mb-6 text-center font-serif text-2xl text-white">Área Administrativa</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Senha de acesso" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={error ?? undefined} autoFocus />
          <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Entrando..." : "Entrar"}</Button>
        </form>
      </Card>
    </div>
  );
}

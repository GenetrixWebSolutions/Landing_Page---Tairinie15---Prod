import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { AdminLoginForm } from "@/components/layout/AdminLoginForm";
import { AdminDashboard } from "@/components/layout/AdminDashboard";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) return <AdminLoginForm />;
  return <AdminDashboard />;
}

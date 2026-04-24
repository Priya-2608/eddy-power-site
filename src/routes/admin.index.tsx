import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { Download, Trash2, Plus, LogOut, RefreshCw, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Eddy Power Cell" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminDashboard,
});

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((data ?? []) as Enquiry[]);
  }, []);

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/admin/login" });
        return;
      }
      const uid = sess.session.user.id;
      setUserId(uid);
      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      const admin = !!roleRow;
      setIsAdmin(admin);
      setChecking(false);
      if (admin) load();
    })();
  }, [navigate, load]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this enquiry?")) return;
    const { error } = await supabase.from("enquiries").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setRows((r) => r.filter((x) => x.id !== id));
    toast.success("Deleted");
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    if (!payload.name || !payload.phone || !payload.message) {
      toast.error("Fill all fields");
      return;
    }
    const { error } = await supabase.from("enquiries").insert(payload);
    if (error) return toast.error(error.message);
    toast.success("Enquiry added");
    form.reset();
    setShowAdd(false);
    load();
  }

  function downloadExcel() {
    if (!rows.length) return toast.error("No enquiries to export");
    const data = rows.map((r) => ({
      Name: r.name,
      Phone: r.phone,
      Message: r.message,
      Status: r.status,
      "Submitted At": new Date(r.created_at).toLocaleString(),
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    ws["!cols"] = [{ wch: 22 }, { wch: 18 }, { wch: 50 }, { wch: 12 }, { wch: 22 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Enquiries");
    const stamp = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `eddy-power-enquiries-${stamp}.xlsx`);
    toast.success("Excel downloaded");
  }

  if (checking) {
    return (
      <section className="section-pad">
        <div className="container-x">Checking permissions…</div>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="section-pad">
        <div className="container-x max-w-2xl">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-[var(--shadow-card)]">
            <ShieldAlert className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-2xl font-extrabold">Admin access required</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Your account is signed in but not yet an admin. Open the Cloud → Database → <code className="rounded bg-muted px-1">user_roles</code> table
              and insert a row with your user id and role <code className="rounded bg-muted px-1">admin</code>.
            </p>
            {userId && (
              <p className="mt-3 break-all rounded-md bg-muted px-3 py-2 text-xs">
                Your user id: <strong>{userId}</strong>
              </p>
            )}
            <button onClick={handleLogout} className="mt-5 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:bg-secondary">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold md:text-4xl">Enquiries</h1>
            <p className="mt-1 text-sm text-muted-foreground">{rows.length} total</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={load} disabled={loading} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button onClick={() => setShowAdd((v) => !v)} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary">
              <Plus className="h-4 w-4" /> Add
            </button>
            <button onClick={downloadExcel} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02]">
              <Download className="h-4 w-4" /> Download Excel
            </button>
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>

        {showAdd && (
          <form onSubmit={handleAdd} className="mt-6 grid gap-3 rounded-xl border border-border bg-surface p-5 md:grid-cols-3">
            <input name="name" placeholder="Name" className="rounded-md border border-border bg-background px-3 py-2 text-sm" />
            <input name="phone" placeholder="Phone" className="rounded-md border border-border bg-background px-3 py-2 text-sm" />
            <input name="message" placeholder="Message" className="rounded-md border border-border bg-background px-3 py-2 text-sm" />
            <div className="md:col-span-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                Save enquiry
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && !loading && (
                <tr><td colSpan={5} className="px-4 py-10 text-center text-muted-foreground">No enquiries yet.</td></tr>
              )}
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-border align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{new Date(r.created_at).toLocaleString()}</td>
                  <td className="px-4 py-3 font-semibold">{r.name}</td>
                  <td className="whitespace-nowrap px-4 py-3"><a className="hover:text-primary" href={`tel:${r.phone}`}>{r.phone}</a></td>
                  <td className="px-4 py-3 max-w-md">{r.message}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => handleDelete(r.id)} className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

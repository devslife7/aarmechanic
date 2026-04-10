export interface ContactFormData {
  name: string;
  phone: string;
  vehicle: string;
  vin: string;
  fuel: string;
  issue: string;
  website: string; // honeypot
  _t: number; // render timestamp
}

export async function submitContact(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return { ok: false, error: body.error ?? "Something went wrong" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}

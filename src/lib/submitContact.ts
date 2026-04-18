export interface ContactFormData {
  name: string;
  phone: string;
  vehicle: string;
  vin?: string;
  fuel: string;
  issue: string;
  website?: string;
  _t?: number;
}

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error?: string; fieldErrors?: Record<string, string[]> };

export async function submitContact(data: ContactFormData): Promise<SubmitContactResult> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return {
        ok: false,
        error: body.error ?? "Something went wrong",
        fieldErrors: body.fieldErrors,
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}

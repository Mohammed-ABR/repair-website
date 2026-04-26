/** Canonical `tel:` href (e.g. `tel:+32466037452`). */
export function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/** Display Belgian +32 numbers with readable spacing (e.g. +32 466 03 74 52). */
export function formatBelgianDisplayPhone(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (d.length >= 11 && d.startsWith("32")) {
    const r = d.slice(2);
    if (r.length >= 9) {
      return `+32 ${r.slice(0, 3)} ${r.slice(3, 5)} ${r.slice(5, 7)} ${r.slice(7, 9)}`;
    }
  }
  return phone;
}

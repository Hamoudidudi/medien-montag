export function formatDateDE(dateISO: string): string {
  const date = new Date(dateISO);

  // Guard: ungültiges Datum -> Original zurückgeben
  if (Number.isNaN(date.getTime())) return dateISO;

  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

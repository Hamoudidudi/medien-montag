import type { ArticleSection } from "./article";

export type Issue = {
  slug: string;         // URL-Key: /article/[slug]
  title: string;        // Ausgabe-Titel
  dateISO: string;      // "2025-12-14" (ISO, leicht zu sortieren)
  intro: string;        // kurze Einordnung
  coverImageUrl?: string;

  tags: string[];       // Ausgabe-Tags (für Archiv/Filter)
  sections: ArticleSection[]; // geordnete Abschnitte
};

export type SourceLink = {
  title: string;      // z.B. "Bundeszentrale für politische Bildung"
  url: string;        // Quelle
};

export type ArticleSection = {
  id: string;         // interne ID (später vom CMS)
  title: string;      // Abschnittstitel
  summary?: string;   // optional: 1–2 Sätze
  content: string;    // erstmal plain text (später rich text)
  sources: SourceLink[];
  tags: string[];     // z.B. ["KI", "TikTok"]
};

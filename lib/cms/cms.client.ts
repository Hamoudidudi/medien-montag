import type { Issue } from "@/lib/models/issue";

/**
 * Dummy-CMS (lokal im Code)
 * - Heute: statische Daten
 * - Später: wird durch echtes CMS ersetzt (Sanity etc.)
 */

const ISSUES: Issue[] = [
  {
    slug: "ausgabe-01",
    title: "Ausgabe 01 – Maui Wowie Trend",
    dateISO: "2025-12-03", // 🔥 ISO sauber formatiert
    intro:
      "Ein TikTok-Trend rund um den Sound „Maui Wowie“ von Kid Cudi – was steckt dahinter?",
    coverImageUrl: "/covers/ausgabe-01.png",
    tags: ["TikTok", "Trend"],
    sections: [
      {
        id: "mw-1",
        title: "Woher kommt der Sound?",
        summary: "Der Trend basiert auf einem Song aus 2008.",
        content:
          "Das Sound-Fragment stammt aus dem Refrain des Songs „Maui Wowie“ von Kid Cudi (2008). Im Refrain heißt es: „Goin' Back to Honolulu just to get that, That Maui Wowie“. Maui Wowie ist eine Sativa-Cannabissorte aus Hawaii, die für ihr starkes High und ihren fruchtigen Geschmack bekannt ist.",
        sources: [
          {
            title: "Song: Maui Wowie – Kid Cudi",
            url: "https://www.youtube.com/",
            coverImageUrl: "/covers/ausgabe1.png", // ✅ NEU
          },
        ],
        tags: ["Musik"],
      },
      {
        id: "mw-2",
        title: "Wie funktioniert der Trend?",
        summary: "Ein einfacher Bewegungs- und Angeb-Trend.",
        content: `
        <ul>
          <li>An etwas Stabilen hängen (z.B. Straßenschild, Gerüst, Arm eines Freundes).</li>
          <li>Beine schwingen.</li>
          <li>Mit dem Sound lipsyncen.</li>
          <li>Angeben ist angesagt – entweder durch Kulisse (Reisen, Sehenswürdigkeiten) oder körperliche Stärke.</li>
        </ul>
        `,
       
        sources: [],
        tags: ["TikTok"],
      },
      {
        id: "mw-3",
        title: "Ist der Trend gefährlich?",
        summary: "Meist harmlos – aber Vorsicht ist wichtig.",
        content:
          "Grundsätzlich ist der Trend harmlos wie viele andere Dance-Trends. Wichtig ist jedoch, etwas Festes zu finden, woran man hängt. Sonst können Sachschäden oder Verletzungen entstehen.",
        
        sources: [],
        tags: ["Sicherheit"],
      },
    ],
  },

  {
    slug: "ausgabe-02",
    title: "Ausgabe 02 – Brainrot & TikTok-Trends",
    dateISO: "2025-12-07",
    intro:
      "Was bedeutet Brainrot und warum sprechen gerade alle darüber?",
    coverImageUrl: "/covers/ausgabe-02.png",
    tags: ["Social Media"],
    sections: [
      {
        id: "br-1",
        title: "Was ist Brainrot?",
        summary: "Ironischer Begriff – aber mit ernstem Hintergrund.",
        content:
          "Brainrot beschreibt Inhalte, die extrem kurz, laut oder überfordernd sind und dauerhaft konsumiert werden. Viele fühlen sich danach gestresst oder unkonzentriert.",
        sources: [
          {
            title: "bpb – Mediennutzung Jugendlicher",
            url: "https://www.bpb.de/",
          },
        ],
        tags: ["Konzentration"],
      },
    ],
  },


  
];




export function getAllIssues(): Issue[] {
  return ISSUES;
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return ISSUES.find((i) => i.slug === slug);
}

export function getAllSlugs(): string[] {
  return ISSUES.map((i) => i.slug);
}

export function getLatestIssue(): Issue | undefined {
  let latest = ISSUES[0];
  for (const issue of ISSUES) {
    if (!latest || issue.dateISO > latest.dateISO) latest = issue;
  }
  return latest;
}

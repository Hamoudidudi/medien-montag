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
    dateISO: "2025-12-03",
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
            coverImageUrl: "/covers/ausgabe1.png",
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
          <li>Angeben ist angesagt – entweder durch Kulisse oder körperliche Stärke.</li>
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

  {
    slug: "ausgabe-03",
    title: "Ausgabe 03 – Therapy Trend",
    dateISO: "2025-12-10",
    intro:
      "Ein viraler TikTok-Trend, bei dem Natur, Musik und ein überraschender Sturz kombiniert werden – was steckt hinter „Therapy“?",
    coverImageUrl: "/covers/ausgabe-03.png",
    tags: ["TikTok", "Trend", "Musik"],
    sections: [
      {
        id: "th-1",
        title: "Woher kommt der Sound?",
        summary: "Der Trend nutzt den Song „Kids“ von MGMT.",
        content:
          "Der Sound dieses Trends ist der Refrain des Songs „Kids“ von MGMT aus dem Jahr 2008 (Album: Oracular Spectacular). Die Zeilen „Control yourself, take only what you need from it“ begleiten die Videos. Der Song thematisiert Erinnerungen an Kindheit und das Gefühl, im Erwachsenwerden etwas zu verlieren.",
        sources: [
          {
            title: "Song: Kids – MGMT (2008)",
            url: "https://www.youtube.com/",
            coverImageUrl: "/covers/ausgabe3.png",
          },
        ],
        tags: ["Musik"],
      },
      {
        id: "th-2",
        title: "Wie funktioniert der Trend?",
        summary: "Outdoor-Idylle trifft auf überraschenden Sturz.",
        content: `
        <ol>
          <li>Eine Person läuft oder fährt durch eine beeindruckende Naturkulisse (Berge, Meer, Wald).</li>
          <li>Eine zweite Person folgt mit der Kamera.</li>
          <li>Plötzlich wird die vordere Person leicht geschubst oder bekommt ein Bein gestellt.</li>
          <li>Während des Falls schwenkt die Kamera auf die Umgebung.</li>
          <li>Oft wird im Video der Text „therapy“ eingeblendet.</li>
        </ol>
        `,
        sources: [],
        tags: ["TikTok"],
      },
      {
        id: "th-3",
        title: "Warum sorgt der Trend für Diskussionen?",
        summary: "Humor oder Risiko?",
        content:
          "Kritisch gesehen wird vor allem das Schubsen oder Bein stellen. Wenn der Ort nicht sicher gewählt wird oder der Sturz unkontrolliert ist, kann es zu Verletzungen kommen. Besonders problematisch wird es, wenn Jugendliche den Trend nachmachen, ohne vorher Absprachen zu treffen.",
        sources: [],
        tags: ["Sicherheit"],
      },
      {
        id: "th-4",
        title: "Was ist die eigentliche Botschaft?",
        summary: "Natur als „Therapie“ – aber ohne Risiko.",
        content:
          "Eigentlich soll der Trend zeigen, wie gut Natur und Bewegung der psychischen Gesundheit tun. Statt andere zu schubsen, könnte die Botschaft auch kreativ und ungefährlich umgesetzt werden – zum Beispiel durch ruhige Kamerafahrten oder symbolische Szenen.",
        sources: [],
        tags: ["Psychische Gesundheit"],
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
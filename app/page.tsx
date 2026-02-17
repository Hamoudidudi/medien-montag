import Link from "next/link";
import { getAllIssues } from "@/lib/cms";
import { formatDateDE } from "@/lib/utils/formatDate";

function getIssueNumber(issue: { slug: string; title?: string }) {
  const match = issue.slug.match(/ausgabe-(\d+)/i);
  return match ? Number(match[1]) : 0;
}

export default function HomePage() {
  const issues = [...getAllIssues()].sort(
    (a, b) => getIssueNumber(b) - getIssueNumber(a) // höchste Nummer zuerst
  );

  const latest = issues[0];

  return (
    <div className="tc-home">
      <section className="tc-home-hero">
        <h1 className="tc-home-title">Medien Montag</h1>
        <p className="tc-home-sub">
          Trends verstehen. Hintergründe checken. Quellen transparent.
        </p>
      </section>

      {latest && (
        <section className="tc-home-latest">
          <div className="tc-home-label">Neueste Ausgabe</div>

          <Link
            href={`/article/${latest.slug}`}
            className="tc-home-card"
          >
            <h2>{latest.title}</h2>
            <div className="tc-home-meta">
              {formatDateDE(latest.dateISO)}
            </div>
            <p>{latest.intro}</p>
          </Link>
        </section>
      )}

      <div className="tc-home-archive">
        <Link href="/archive" className="tc-home-archive-link">
          → Zum Archiv
        </Link>
      </div>
    </div>
  );
}

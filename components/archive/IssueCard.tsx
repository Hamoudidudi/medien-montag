import Link from "next/link";
import { formatDateDE } from "@/lib/utils/formatDate";
import type { Issue } from "@/lib/models/issue";

type Props = {
  issue: Issue & { title: any };
};

export default function IssueCard({ issue }: Props) {
  const hasCover = Boolean(issue.coverImageUrl?.trim());

  return (
    <article className="tc-row">
      <div className="tc-thumb">
        {hasCover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={issue.coverImageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
      </div>

      <div>
        <div className="tc-kicker">Ausgabe</div>

        <div className="tc-date">
          Veröffentlicht am {formatDateDE(issue.dateISO)}
        </div>

        <h3 style={{ marginTop: 6 }}>
          <Link className="tc-titlelink" href={`/article/${issue.slug}`}>
            {issue.title}
          </Link>
        </h3>

        <p className="tc-teaser">{issue.intro}</p>
      </div>
    </article>
  );
}

"use client";

import { useMemo, useState } from "react";
import { getAllIssues } from "@/lib/cms";
import IssueCard from "@/components/archive/IssueCard";
import SearchBar from "@/components/archive/SearchBar";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

function issueHaystack(issue: any) {
  const parts: string[] = [];
  parts.push(issue.title ?? "");
  parts.push(issue.slug ?? "");
  parts.push(issue.intro ?? "");
  parts.push(...(issue.tags ?? []));

  for (const sec of issue.sections ?? []) {
    parts.push(sec.title ?? "");
    parts.push(sec.summary ?? "");
    parts.push(sec.content ?? "");
    parts.push(...(sec.tags ?? []));
    for (const src of sec.sources ?? []) {
      parts.push(src.title ?? "");
      parts.push(src.url ?? "");
    }
  }

  return normalize(parts.join(" "));
}

function highlightText(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;

  const lower = text.toLowerCase();
  const qLower = q.toLowerCase();
  const idx = lower.indexOf(qLower);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);

  return (
    <>
      {before}
      <mark className="tc-mark">{match}</mark>
      {after}
    </>
  );
}

export default function ArchivePage() {
  const issues = useMemo(() => {
    return [...getAllIssues()].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  }, []);

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return issues;
    return issues.filter((issue) => issueHaystack(issue).includes(q));
  }, [issues, query]);

  return (
    <section>
      <section className="tc-archive-hero">
        <h1 className="tc-archive-title">Archiv</h1>
        <p className="tc-archive-sub">
         Alle bisherigen Ausgaben – verständlich erklärt und mit Quellen.
        </p>
      </section>


      <div style={{ marginTop: 14, marginBottom: 14 }}>
        <SearchBar onQueryChange={setQuery} />
      </div>

      <div className="tc-results-meta">
        {query.trim()
          ? `${filtered.length} Treffer für „${query.trim()}“`
          : `${issues.length} Ausgaben`}
      </div>

      <div className="tc-issue-list">
        {filtered.length === 0 ? (
          <div className="tc-empty">
            <div className="tc-empty-title">Keine Treffer</div>
            <div className="tc-empty-text">
              Versuch es lieber mit „TikTok“, „KI“, „Datenschutz“, „Gaming“ …
            </div>
          </div>
        ) : (
          filtered.map((issue) => (
            <IssueCard
              key={issue.slug}
              issue={{
                ...issue,
                // nur Titel highlighten -> wirkt ruhig & editorial
                title: query.trim()
                  ? (highlightText(issue.title, query) as any)
                  : issue.title,
              }}
            />
          ))
        )}
      </div>
    </section>
  );
}

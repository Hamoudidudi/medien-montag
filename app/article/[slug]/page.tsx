"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { getAllIssues } from "@/lib/cms";
import { formatDateDE } from "@/lib/utils/formatDate";
import FeedbackBar from "@/components/article/FeedbackBar";
import InfoBox from "@/components/InfoBox";

function getIssueNumber(issue: { slug: string; title?: string }) {
  const match = issue.slug.match(/ausgabe-(\d+)/i);
  return match ? Number(match[1]) : 0;
}

function looksLikeHtml(s: string) {
  return /<\/?(ul|ol|li|br|strong|em|p|a|span|div|h\d)\b/i.test(s);
}

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = decodeURIComponent(params?.slug ?? "");

  const issue = useMemo(() => {
    if (!slug) return undefined;
    return getAllIssues().find((i) => i.slug === slug);
  }, [slug]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!issue) {
    return (
      <div className="tc-article-wrap">
        <div className="tc-article">
          <h1>Artikel nicht gefunden</h1>
          <Link className="tc-link" href="/archive">
            ← Zurück zum Archiv
          </Link>
        </div>
      </div>
    );
  }

  const allIssuesSorted = [...getAllIssues()].sort(
    (a, b) => getIssueNumber(a) - getIssueNumber(b)
  );

  const currentIndex = allIssuesSorted.findIndex((x) => x.slug === issue.slug);
  const prevIssue = currentIndex > 0 ? allIssuesSorted[currentIndex - 1] : null;
  const nextIssue =
    currentIndex < allIssuesSorted.length - 1
      ? allIssuesSorted[currentIndex + 1]
      : null;

  const hasCover = Boolean(issue.coverImageUrl?.trim());

  return (
    <>
      <div className="tc-progress-wrap">
        <div
          className="tc-progress-bar"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="tc-article-wrap">
        <article className="tc-article">
          <Link className="tc-backlink" href="/archive">
            ← Archiv
          </Link>

          <h1 className="tc-article-title">{issue.title}</h1>

          <div className="tc-meta">
            <span className="tc-meta-pill">
              Veröffentlicht am {formatDateDE(issue.dateISO)}
            </span>
          </div>

          <p className="tc-intro">{issue.intro}</p>

          <div
            className={`tc-hero ${
              hasCover ? "tc-hero--img" : "tc-hero--ph"
            }`}
          >
            {hasCover && (
              <img
                className="tc-hero-img"
                src={issue.coverImageUrl}
                alt=""
              />
            )}
          </div>

          {/* ========= SECTIONS ========= */}
          <div className="tc-sections">
            {issue.sections.map((section, idx) => (
              <section
                key={section.id}
                className="tc-section-card"
              >
                <div className="tc-section-index">
                  {idx + 1}
                </div>

                <div className="tc-section-content-wrap">

                  {/* === CONTENT BLOCK === */}
                  {section.type === "info" ||
                  section.type === "warning" ? (
                    <InfoBox
                      title={section.title}
                      type={section.type}
                    >
                      {looksLikeHtml(section.content) ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: section.content,
                          }}
                        />
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </InfoBox>
                  ) : (
                    <>
                      <h2 className="tc-section-title">
                        {section.title}
                      </h2>

                      {section.summary && (
                        <p className="tc-section-summary">
                          {section.summary}
                        </p>
                      )}

                      {looksLikeHtml(section.content) ? (
                        <div
                          className="tc-section-content"
                          dangerouslySetInnerHTML={{
                            __html: section.content,
                          }}
                        />
                      ) : (
                        <p className="tc-section-content">
                          {section.content}
                        </p>
                      )}
                    </>
                  )}

                  {/* === IMAGE GALLERY (IMMER NACH CONTENT) === */}
                  {section.images?.length ? (
                    <div className="tc-section-gallery">
                      {section.images.map((img, i) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={img.alt ?? ""}
                          className="tc-section-image"
                        />
                      ))}
                    </div>
                  ) : null}

                  {/* === SOURCES === */}
                  {section.sources?.length ? (
                    <div className="tc-sources">
                      <div className="tc-sources-title">
                        Quellen
                      </div>

                      <div className="tc-sources-grid">
                        {section.sources.map((src) => (
                          <a
                            key={src.url}
                            href={src.url}
                            target="_blank"
                            rel="noreferrer"
                            className="tc-source-card"
                          >
                            {src.coverImageUrl && (
                              <img
                                src={src.coverImageUrl}
                                alt={src.title}
                                className="tc-source-img"
                              />
                            )}

                            <div className="tc-source-title">
                              {src.title}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}

                </div>
              </section>
            ))}
          </div>

          <div className="tc-feedback-wrap">
            <FeedbackBar issueSlug={issue.slug} />
          </div>

          <div className="tc-nav">
            {prevIssue ? (
              <Link
                className="tc-nav-btn"
                href={`/article/${prevIssue.slug}`}
              >
                ← Vorherige Ausgabe
              </Link>
            ) : (
              <span className="tc-nav-disabled">
                ← Vorherige Ausgabe
              </span>
            )}

            {nextIssue ? (
              <Link
                className="tc-nav-btn"
                href={`/article/${nextIssue.slug}`}
              >
                Nächste Ausgabe →
              </Link>
            ) : (
              <span className="tc-nav-disabled">
                Nächste Ausgabe →
              </span>
            )}
          </div>

          <div className="tc-bottom-back">
            <Link className="tc-link" href="/archive">
              ← Zurück zum Archiv
            </Link>
          </div>

        </article>
      </div>
    </>
  );
}

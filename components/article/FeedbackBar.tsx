"use client";

import { useEffect, useMemo, useState } from "react";

type Vote = "up" | "down" | null;

type FeedbackBarProps = {
  issueSlug: string;
};

function storageKey(slug: string) {
  return `trendcheck:feedback:${slug}`;
}

export default function FeedbackBar({ issueSlug }: FeedbackBarProps) {
  const key = useMemo(() => storageKey(issueSlug), [issueSlug]);

  const [vote, setVote] = useState<Vote>(null);
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw === "up" || raw === "down") setVote(raw);
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, [key]);

  const choose = (v: Exclude<Vote, null>) => {
    if (vote) return; // one-shot

    setVote(v);
    setSaved(true);
    try {
      localStorage.setItem(key, v);
    } catch {
      // ignore
    }
    window.setTimeout(() => setSaved(false), 1400);
  };

  if (!hydrated) {
    return (
      <div className="tc-feedback">
        <div style={{ fontWeight: 900, marginBottom: 8 }}>
          War dieser Artikel hilfreich?
        </div>
        <div style={{ color: "var(--muted)", fontFamily: "var(--font-ui)", fontSize: 13 }}>
          Lade…
        </div>
      </div>
    );
  }

  // ✅ Clean Mode: Wenn schon gevotet wurde, nur noch Bestätigung zeigen
  if (vote) {
    return (
      <div className="tc-feedback">
        <div style={{ fontWeight: 900, marginBottom: 6 }}>Danke!</div>
        <div style={{ color: "var(--muted)", fontFamily: "var(--font-ui)", fontSize: 14 }}>
          Du hast {vote === "up" ? "👍" : "👎"} abgestimmt.
        </div>
      </div>
    );
  }

  return (
    <div className="tc-feedback">
      <div style={{ fontWeight: 900, marginBottom: 8 }}>
        War dieser Artikel hilfreich?
      </div>

      <div className="tc-feedback-row">
        <button type="button" className="tc-pill" onClick={() => choose("up")}>
          👍 Ja
        </button>

        <button type="button" className="tc-pill" onClick={() => choose("down")}>
          👎 Nein
        </button>

        <span style={{ color: "var(--muted)", fontSize: 13 }}>
          {saved ? "Gespeichert." : "Anonym – nur auf diesem Gerät."}
        </span>
      </div>
    </div>
  );
}

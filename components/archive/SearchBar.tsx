"use client";

import { useEffect, useState } from "react";

type Props = {
  onQueryChange: (q: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  onQueryChange,
  placeholder = "z.B. TikTok, KI, Brainrot …",
}: Props) {
  const [q, setQ] = useState("");

  useEffect(() => {
    onQueryChange(q);
  }, [q, onQueryChange]);

  return (
    <div className="tc-search">
      <label className="tc-search-label">Archiv durchsuchen</label>

      <div className="tc-search-row">
        <span className="tc-search-icon" aria-hidden>
          🔎
        </span>

        <input
          className="tc-search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label="Archiv durchsuchen"
        />
      </div>

      <div className="tc-search-hint">
        Tipp: Such nach Themen, Trends oder Stichworten.
      </div>
    </div>
  );
}

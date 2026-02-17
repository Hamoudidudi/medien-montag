"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "14px var(--px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: 18,
              color: "var(--brand)",
            }}
          >
            Medien Montag
          </Link>
          <Link href="/archive">Archiv</Link>
          <Link href="/about">Über</Link>
        </nav>

        {/* Theme toggle */}
       <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    style={{
    border: "1px solid var(--border)",
    borderRadius: 999,
    padding: "7px 12px",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 700,

    /* Kontrastfest */
    background: theme === "light" ? "var(--surface-2)" : "rgba(255,255,255,0.10)",
    color: theme === "light" ? "var(--text)" : "var(--text)",
        }}
         aria-label="Theme wechseln"
  >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>

      </div>
    </header>
  );
}

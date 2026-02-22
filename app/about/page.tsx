import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="tc-about-wrap">
      <div className="tc-about">

        <header className="tc-about-hero">
          <h1>Was ist Medien Montag?</h1>
          <p className="tc-about-intro">
            Medien Morgen erklärt Internet-Trends verständlich,
            neutral und ohne Hype. 
            
          </p>
        </header>

        <section className="tc-about-section">
          <h2>Warum gibt es diese Seite?</h2>
          <p>
            Viele Trends verbreiten sich extrem schnell.
            Aber selten wird erklärt, wo sie herkommen,
            was sie bedeuten oder welche Hintergründe sie haben.
          </p>
          <p>
            Medien Montag möchte genau das tun:
            erklären statt bewerten.
          </p>
        </section>

        <section className="tc-about-grid">
          <div className="tc-about-card">
            <h3>Neutral</h3>
            <p>
              Keine Panikmache. Keine Übertreibung.
              Nur Einordnung und Kontext.
            </p>
          </div>

          <div className="tc-about-card">
            <h3>Verständlich</h3>
            <p>
              Klare Sprache.
              Keine komplizierten Fachbegriffe.
              Direkt auf den Punkt.
            </p>
          </div>

          <div className="tc-about-card">
            <h3>Quellenbasiert</h3>
            <p>
              Jeder Trend basiert auf überprüfbaren
              Informationen und wird transparent belegt.
            </p>
          </div>
        </section>

        <section className="tc-about-cta">
          <p>
            Neugierig geworden?
          </p>
          <Link href="/archive" className="tc-about-btn">
            Zum Archiv →
          </Link>
        </section>

      </div>
    </div>
  );
}

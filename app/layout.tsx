import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Medien Montag",
  description: "Newsletter-Archiv zu Online-Trends für Schüler:innen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        {/* Globaler Header */}
        <Header />

        {/* Seiteninhalt */}
        <main>
          <Container>{children}</Container>
        </main>

        {/* Globaler Footer */}
        <Footer />
      </body>
    </html>
  );
}

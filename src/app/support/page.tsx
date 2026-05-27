import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Support | Matlogg",
  description: "Supportside for Matlogg. Kontakt oss på smartkunde@gmail.com.",
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="px-5 pb-16 pt-8 sm:px-6 lg:px-8" id="hovedinnhold">
        <article className="privacy-text mx-auto max-w-3xl text-base leading-8 text-[var(--color-text-soft)]">
          <Link
            className="mb-8 inline-block text-sm font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-text)]"
            href="/"
          >
            Tilbake til forsiden
          </Link>

          <h1>Support for Matlogg</h1>

          <p>
            Trenger du hjelp med Matlogg, eller har du spørsmål om appen? Kontakt oss på:{" "}
            <a href="mailto:smartkunde@gmail.com">smartkunde@gmail.com</a>
          </p>

          <h2>Hva du kan kontakte oss om</h2>
          <ul>
            <li>spørsmål om bruk av appen</li>
            <li>problemer med logging, søk eller strekkodeskanning</li>
            <li>spørsmål om Matlogg Pluss eller abonnement</li>
            <li>feil, forslag eller tilbakemeldinger</li>
            <li>spørsmål om personvern og data</li>
          </ul>

          <h2>Nyttig å ta med i e-posten</h2>
          <p>
            For at vi skal kunne hjelpe raskere, kan du gjerne inkludere hvilken iPhone/iPad du
            bruker, iOS-versjon, appversjon og en kort beskrivelse av hva som skjedde.
          </p>

          <h2>Kontakt</h2>
          <p>
            E-post: <a href="mailto:smartkunde@gmail.com">smartkunde@gmail.com</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

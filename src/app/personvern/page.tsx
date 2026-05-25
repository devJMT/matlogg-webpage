import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const privacyMarkdownPath =
  join(process.cwd(), "content", "personvernerklaering_matlogg.md");

export const metadata: Metadata = {
  title: "Personvernerklæring | Matlogg",
  description:
    "Personvernerklæring for Matlogg. Les hvordan Matlogg behandler opplysninger når du bruker appen.",
};

export default function PrivacyPage() {
  const markdown = readFileSync(privacyMarkdownPath, "utf8");

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
          <MarkdownContent markdown={markdown} />
        </article>
      </main>
      <Footer />
    </>
  );
}

function MarkdownContent({ markdown }: { markdown: string }) {
  return <>{parseMarkdown(markdown)}</>;
}

function parseMarkdown(markdown: string) {
  const blocks = markdown
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("# ")) {
      return (
        <h1 className="mt-0" key={index}>
          {block.slice(2)}
        </h1>
      );
    }

    if (block.startsWith("## ")) {
      return <h2 key={index}>{block.slice(3)}</h2>;
    }

    if (block.startsWith("- ")) {
      return (
        <ul key={index}>
          {block.split("\n").map((item) => (
            <li key={item}>{renderInlineText(item.replace(/^- /, ""))}</li>
          ))}
        </ul>
      );
    }

    return <p key={index}>{renderParagraph(block)}</p>;
  });
}

function renderParagraph(block: string) {
  const lines = block.split("\n");

  return lines.flatMap((line, index) => {
    const content = renderInlineText(line.replace(/\s+$/, ""));

    if (index === lines.length - 1) {
      return content;
    }

    return [...content, <br key={`br-${index}`} />];
  });
}

function renderInlineText(text: string): ReactNode[] {
  const parts = text.split(/(smartkunde@gmail\.com)/g);

  return parts.map((part, index) => {
    if (part === "smartkunde@gmail.com") {
      return (
        <a href="mailto:smartkunde@gmail.com" key={index}>
          {part}
        </a>
      );
    }

    return part;
  });
}

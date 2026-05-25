import { MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { footerColumns } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1220px] rounded-[30px] bg-white p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-text-soft)]">
              Din logg. Dine mønstre. Din vei.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[rgba(36,179,115,0.12)] px-4 py-2 text-sm font-bold text-[var(--color-emerald-dark)]">
              <MapPin aria-hidden="true" className="size-4 text-[var(--color-emerald)]" />
              Laget i Norge for deg
            </span>
          </div>

          <div className="grid gap-7 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-display text-lg font-bold text-[var(--color-text)]">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="text-sm font-semibold text-[var(--color-text-soft)] transition hover:text-[var(--color-emerald-deep)] focus-visible:rounded-full focus-visible:bg-[var(--color-page)] focus-visible:outline-none"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 text-sm font-semibold text-[var(--color-text-muted)]">
          © 2024 Matlogg. Alle rettigheter forbeholdt.
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { navigationItems } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4">
      <a
        className="sr-only rounded-full bg-white px-4 py-3 text-sm font-semibold text-[var(--color-emerald-dark)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:outline-none"
        href="#hovedinnhold"
      >
        Hopp til innhold
      </a>
      <div className="mx-auto flex max-w-[1220px] items-center justify-between gap-4 rounded-full bg-[#f8f6ee] px-4 py-3 backdrop-blur md:px-5">
        <Logo />
        <nav aria-label="Hovedmeny" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-text-soft)] transition hover:bg-white hover:text-[var(--color-text)] focus-visible:bg-white focus-visible:outline-none"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="min-h-11 px-4 text-sm sm:px-5" href="/#venteliste" size="sm">
          Kom i gang
        </Button>
      </div>
    </header>
  );
}

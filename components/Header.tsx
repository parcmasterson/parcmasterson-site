import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header>
      <div className="mx-auto max-w-[1120px] px-6 md:px-10 py-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-sans font-medium text-ink text-sm tracking-wide"
        >
          Parc Masterson
        </Link>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink-secondary hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

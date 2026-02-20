import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Orazio Nicolosi</h1>
            </Link>
            <p className="mt-2 text-base text-muted-foreground md:text-lg">PhD Student in Pure Mathematics</p>
            <p className="mt-1 text-sm text-muted-foreground">Università degli Studi di Torino</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm md:gap-6">
            <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/publications" className="text-muted-foreground transition-colors hover:text-foreground">
              Publications
            </Link>
            <Link href="/talks" className="text-muted-foreground transition-colors hover:text-foreground">
              Talks
            </Link>
            <Link href="/teaching" className="text-muted-foreground transition-colors hover:text-foreground">
              Teaching
            </Link>
            <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

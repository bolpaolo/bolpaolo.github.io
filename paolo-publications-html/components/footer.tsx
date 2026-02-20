import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:orazio.nicolosi@unito.it" className="transition-colors hover:text-foreground">
              orazio.nicolosi@unito.it
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Orazio Nicolosi</p>
        </div>
      </div>
    </footer>
  )
}

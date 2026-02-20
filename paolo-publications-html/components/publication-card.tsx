import { ExternalLink } from "lucide-react"

interface PublicationCardProps {
  title: string
  authors: string
  journal: string
  year: string
  volume?: string
  pages?: string
  doi?: string
  arxiv?: string
  abstract: string
}

export function PublicationCard({
  title,
  authors,
  journal,
  year,
  volume,
  pages,
  doi,
  arxiv,
  abstract,
}: PublicationCardProps) {
  return (
    <article className="group space-y-3">
      <div>
        <h3 className="text-pretty text-lg font-medium leading-relaxed text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{authors}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="italic">{journal}</span>
          {volume && `, ${volume}`}
          {pages && `, pp. ${pages}`} ({year})
        </p>
      </div>

      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{abstract}</p>

      <div className="flex flex-wrap gap-4 text-sm">
        {doi && (
          <a
            href={`https://doi.org/${doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
          >
            DOI
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
        {arxiv && (
          <a
            href={`https://arxiv.org/abs/${arxiv}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
          >
            arXiv
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  )
}

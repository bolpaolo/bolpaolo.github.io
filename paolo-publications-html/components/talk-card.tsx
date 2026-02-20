interface TalkCardProps {
  title: string
  event: string
  location: string
  date: string
  type: string
}

export function TalkCard({ title, event, location, date, type }: TalkCardProps) {
  return (
    <article className="space-y-2 border-l-2 border-primary pl-4">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <h3 className="font-medium text-foreground">{title}</h3>
        <span className="text-sm text-muted-foreground">{type}</span>
      </div>
      <p className="text-sm text-muted-foreground">{event}</p>
      <p className="text-sm text-muted-foreground">
        {location} • {date}
      </p>
    </article>
  )
}

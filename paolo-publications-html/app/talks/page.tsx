import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TalkCard } from "@/components/talk-card"

const talks = [
  {
    title: "Quantum Cellular Automata and Groups",
    event: "??",
    location: "Göttingen, Germany",
    date: "January 2026",
    type: "Invited Talk",
  },
  {
    title: "Quantum Cellular Automata and Groups",
    event: "Ergodic Group Actions and Unitary Representations III",
    location: "Warsaw, Poland",
    date: "February 2026",
    type: "Contributed Talk",
  },
]

const conferences = [
  {
    name: "Scandinavian Operator Algebras Workshop",
    location: "Göteborg, Sweden",
    date: "April 2025",
  },
  {
    name: "UK Operator Algebras Conference",
    location: "Belfast, UK",
    date: "July 2025",
  },
    {
    name: "Scandinavian Operator Algebras Workshop",
    location: "Odense, Denmark",
    date: "Semptember 2025",
  },
]

export default function TalksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="space-y-16">
          {/* Talks */}
          <section id="talks">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Talks & Presentations</h2>
            <div className="space-y-6">
              {talks.map((talk, index) => (
                <TalkCard key={index} {...talk} />
              ))}
            </div>
          </section>

          {/* Conferences */}
          <section id="conferences">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Attended Conferences </h2>
            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <div key={index} className="flex flex-col gap-1 border-l-2 border-primary pl-4">
                  <h3 className="font-medium text-foreground">{conf.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {conf.location} • {conf.date}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

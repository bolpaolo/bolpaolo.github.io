import { PublicationCard } from "@/components/publication-card"

const preprints = [
  {
    title: "On the Structure of Algebraic Varieties",
    authors: "O. Nicolosi, A. Collaborator",
    journal: "arXiv preprint",
    year: "2024",
    arxiv: "2024.12345",
    abstract:
      "We investigate the fundamental properties of algebraic varieties and their applications to modern geometric theory.",
  },
  {
    title: "Cohomological Methods in Algebraic Geometry",
    authors: "O. Nicolosi",
    journal: "arXiv preprint",
    year: "2023",
    arxiv: "2023.67890",
    abstract: "This paper develops new cohomological techniques for studying complex algebraic structures.",
  },
]

const publications = [
  {
    title: "Fundamental Theorems in Pure Mathematics",
    authors: "O. Nicolosi, B. Researcher, C. Scholar",
    journal: "Journal of Pure and Applied Mathematics",
    year: "2023",
    volume: "45",
    pages: "123-145",
    doi: "10.1234/jpam.2023.45.123",
    abstract: "We present several fundamental results in pure mathematics with applications to algebraic topology.",
  },
]

export function PublicationSection() {
  return (
    <div className="space-y-16">
      {/* Preprints */}
      <section id="preprints">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Preprints</h2>
        <div className="space-y-8">
          {preprints.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Publications</h2>
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </section>
    </div>
  )
}

import { Header } from "@/components/header"
import { PublicationSection } from "@/components/publication-section"
import { Footer } from "@/components/footer"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <PublicationSection />
      </main>
      <Footer />
    </div>
  )
}

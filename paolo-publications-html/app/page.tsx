import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* About Section with Picture */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">About</h2>
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-1 space-y-4 text-base leading-relaxed text-foreground">
              <p>
                I am a PhD student in Mathematics at{" "}
                <span className="font-medium"> Chalmers University of Technology and Göteborgs Universitet.</span>.
              </p>
              <p>
                My research focuses on <span className="font-medium">operator algebras</span>,{" "}
                <span className="font-medium">dynamics</span>, and{" "}
                <span className="font-medium">descriptive set theory</span>.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="h-48 w-48 overflow-hidden rounded-lg border-2 border-primary bg-muted">
                <Image
                  src="/academic-portrait.png"
                  alt="Paolo Boldrini"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="border-l-4 border-primary bg-card-hover px-6 py-4">
            <blockquote className="text-base italic leading-relaxed text-foreground">
              "Add your favorite quote here"
            </blockquote>
          </div>
        </section>

        {/* Supervisors Section */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Supervisor</h2>
          <div className="space-y-2 text-base text-foreground">
            <p>Eusebio Gardella</p>
          </div>
        </section>

        <section className="space-y-4">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-accent"
          >
            View Preprints & Publications
            <ArrowRight className="h-5 w-5" />
          </Link>
          <br />
          <Link
            href="/talks"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-accent"
          >
            View Talks & Conferences
            <ArrowRight className="h-5 w-5" />
          </Link>
          <br />
          <Link
            href="/teaching"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-accent"
          >
            View Teaching
            <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

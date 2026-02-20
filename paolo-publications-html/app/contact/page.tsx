import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Building2 } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <section>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Email</h3>
                <a
                  href="mailto:paolob@chalmers.se"
                  className="text-base text-primary transition-colors hover:text-accent"
                >
                  paolob@chalmers.se
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Institution</h3>
                <p className="text-base text-muted-foreground">
                  Department of Mathematical Sciences 
                  <br />
                  Chalmers University of Technology and Göteborgs Universitet
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-medium text-foreground">Address</h3>
                <p className="text-base text-muted-foreground">
                  Chalmers Tvärgata 3,
                  <br />
                  412 96 Göteborg, Sweden
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

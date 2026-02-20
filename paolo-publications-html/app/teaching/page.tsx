import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const courses = [
  {
    title: "Calculus I",
    role: "Teaching Assistant",
    semester: "Fall 2024",
    description: "Introduction to differential and integral calculus for first-year students.",
  },
  {
    title: "Linear Algebra",
    role: "Teaching Assistant",
    semester: "Spring 2024",
    description:
      "Fundamental concepts in linear algebra including vector spaces, matrices, and linear transformations.",
  },
]

export default function TeachingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <section>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Teaching</h2>
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="border-l-2 border-primary pl-6">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3">
                  <h3 className="text-lg font-medium text-foreground">{course.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {course.role} • {course.semester}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{course.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

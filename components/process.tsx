import { CheckCircle2 } from "lucide-react"

export default function Process() {
  const steps = [
    {
      title: "Discovery",
      description:
        "We dive deep into your business goals, market landscape, and user needs to build a comprehensive foundation for success.",
    },
    {
      title: "Strategy",
      description:
        "Strategic planning and roadmapping that aligns your digital vision with measurable business outcomes.",
    },
    {
      title: "Design",
      description:
        "Crafting beautiful, intuitive experiences that reflect your brand and engage your audience effectively.",
    },
    {
      title: "Development",
      description: "Building robust, scalable solutions using modern technologies and best practices.",
    },
    {
      title: "Testing",
      description: "Rigorous quality assurance ensuring performance, security, and exceptional user experiences.",
    },
    {
      title: "Launch & Growth",
      description: "Strategic deployment and ongoing optimization to maximize impact and drive continuous growth.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Process</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A proven methodology that transforms vision into reality through collaborative innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 -bottom-16 w-1 h-16 bg-gradient-to-b from-border to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

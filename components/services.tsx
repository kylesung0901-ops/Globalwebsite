export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Design & Development",
      description:
        "Stunning, responsive websites built with cutting-edge technology and user-centric design principles.",
    },
    {
      number: "02",
      title: "Brand Strategy",
      description: "Strategic brand positioning and identity systems that resonate with your target audience globally.",
    },
    {
      number: "03",
      title: "User Experience Design",
      description: "Intuitive interfaces and seamless interactions that delight users and drive engagement.",
    },
    {
      number: "04",
      title: "Digital Products",
      description: "End-to-end product design and development from concept to launch and beyond.",
    },
    {
      number: "05",
      title: "E-Commerce Solutions",
      description: "Powerful online stores optimized for conversion, scalability, and exceptional user experiences.",
    },
    {
      number: "06",
      title: "Migration & Optimization",
      description: "Seamless platform migrations with performance optimization and modernization strategies.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and growth aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-xl border border-border hover:border-foreground/30 hover:bg-muted/50 transition-all duration-300 group"
            >
              <div className="text-5xl font-bold text-foreground/10 mb-4 group-hover:text-secondary/30 transition-colors">
                {service.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

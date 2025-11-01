import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Elevate",
      category: "E-Commerce Platform",
      description: "Full-featured marketplace for premium digital products",
      image: "/modern-ecommerce-platform.jpg",
    },
    {
      id: 2,
      title: "Mindflow",
      category: "SaaS Application",
      description: "Productivity and wellness management platform",
      image: "/saas-dashboard-interface.jpg",
    },
    {
      id: 3,
      title: "Verve",
      category: "Brand Identity",
      description: "Luxury lifestyle brand digital ecosystem",
      image: "/luxury-brand-website.jpg",
    },
    {
      id: 4,
      title: "DataFlow",
      category: "Analytics Dashboard",
      description: "Real-time business intelligence platform",
      image: "/analytics-dashboard-data-viz.jpg",
    },
    {
      id: 5,
      title: "Nexus",
      category: "Corporate Site",
      description: "Enterprise digital presence platform",
      image: "/corporate-website-design.jpg",
    },
    {
      id: 6,
      title: "Aurora",
      category: "Mobile App",
      description: "Cross-platform social experience",
      image: "/mobile-app-interface.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Featured Work</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Showcasing our latest projects and transformative digital solutions for global brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm text-secondary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-foreground/20 text-foreground rounded-full font-semibold hover:border-foreground hover:bg-foreground/5 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

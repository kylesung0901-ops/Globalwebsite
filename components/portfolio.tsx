import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Elevate",
      category: "전자상거래 플랫폼",
      description: "프리미엄 디지털 제품을 위한 풀 기능 마켓플레이스",
      image: "/modern-ecommerce-platform.jpg",
    },
    {
      id: 2,
      title: "Mindflow",
      category: "SaaS 애플리케이션",
      description: "생산성 및 웰니스 관리 플랫폼",
      image: "/saas-dashboard-interface.jpg",
    },
    {
      id: 3,
      title: "Verve",
      category: "브랜드 아이덴티티",
      description: "럭셔리 라이프스타일 브랜드 디지털 생태계",
      image: "/luxury-brand-website.jpg",
    },
    {
      id: 4,
      title: "DataFlow",
      category: "분석 대시보드",
      description: "실시간 비즈니스 인텔리전스 플랫폼",
      image: "/analytics-dashboard-data-viz.jpg",
    },
    {
      id: 5,
      title: "Nexus",
      category: "기업 사이트",
      description: "엔터프라이즈 디지털 프레즌스 플랫폼",
      image: "/corporate-website-design.jpg",
    },
    {
      id: 6,
      title: "Aurora",
      category: "모바일 앱",
      description: "크로스 플랫폼 소셜 경험",
      image: "/mobile-app-interface.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">주요 작업물</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            글로벌 브랜드를 위한 최신 프로젝트와 혁신적인 디지털 솔루션을 소개합니다.
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
            모든 프로젝트 보기
          </button>
        </div>
      </div>
    </section>
  )
}

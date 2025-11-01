export default function Services() {
  const services = [
    {
      number: "01",
      title: "웹 디자인 및 개발",
      description:
        "최첨단 기술과 사용자 중심 디자인 원칙으로 구축된 멋진 반응형 웹사이트입니다.",
    },
    {
      number: "02",
      title: "브랜드 전략",
      description: "전 세계 타겟 고객과 공감하는 전략적 브랜드 포지셔닝 및 아이덴티티 시스템입니다.",
    },
    {
      number: "03",
      title: "사용자 경험 디자인",
      description: "사용자를 기쁘게 하고 참여를 유도하는 직관적인 인터페이스와 매끄러운 상호작용입니다.",
    },
    {
      number: "04",
      title: "디지털 제품",
      description: "컨셉부터 런칭 및 그 이후까지의 전체 프로세스 제품 디자인 및 개발입니다.",
    },
    {
      number: "05",
      title: "전자상거래 솔루션",
      description: "전환율, 확장성, 탁월한 사용자 경험에 최적화된 강력한 온라인 스토어입니다.",
    },
    {
      number: "06",
      title: "마이그레이션 및 최적화",
      description: "성능 최적화 및 현대화 전략을 통한 매끄러운 플랫폼 마이그레이션입니다.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">서비스</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            비즈니스 요구사항과 성장 목표에 맞춘 포괄적인 디지털 솔루션입니다.
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

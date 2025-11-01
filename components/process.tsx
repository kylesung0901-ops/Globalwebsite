import { CheckCircle2 } from "lucide-react"

export default function Process() {
  const steps = [
    {
      title: "발견",
      description:
        "비즈니스 목표, 시장 환경, 사용자 요구사항을 깊이 있게 파악하여 성공을 위한 포괄적인 기반을 구축합니다.",
    },
    {
      title: "전략",
      description:
        "디지털 비전을 측정 가능한 비즈니스 결과와 일치시키는 전략적 계획 및 로드맵 수립입니다.",
    },
    {
      title: "디자인",
      description:
        "브랜드를 반영하고 고객을 효과적으로 참여시키는 아름답고 직관적인 경험을 만듭니다.",
    },
    {
      title: "개발",
      description: "최신 기술과 모범 사례를 사용하여 견고하고 확장 가능한 솔루션을 구축합니다.",
    },
    {
      title: "테스트",
      description: "성능, 보안, 탁월한 사용자 경험을 보장하는 엄격한 품질 보증입니다.",
    },
    {
      title: "런칭 및 성장",
      description: "영향을 극대화하고 지속적인 성장을 이끌기 위한 전략적 배포 및 지속적인 최적화입니다.",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">프로세스</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            협업 혁신을 통해 비전을 현실로 변화시키는 검증된 방법론입니다.
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

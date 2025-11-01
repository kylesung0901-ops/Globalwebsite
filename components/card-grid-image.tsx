"use client"

const img2 = "https://www.figma.com/api/mcp/asset/135d9948-7a7e-4d44-a153-30ab2d545ca1"
const img3 = "https://www.figma.com/api/mcp/asset/5d3d27a8-85bf-4656-9456-5ec3004c7f1e"

interface CardItem {
  title: string
  description: string
  hasImage?: boolean
  imageSrc?: string
}

const cardsRow1: CardItem[] = [
  {
    title: "프로젝트 관리",
    description: "효율적인 프로젝트 관리 시스템으로 일정과 리소스를 최적화합니다. 투명한 커뮤니케이션과 체계적인 진행 관리를 경험하세요.",
    hasImage: true,
    imageSrc: img3
  },
  {
    title: "디자인 시스템",
    description: "일관성 있는 디자인 시스템 구축으로 브랜드 아이덴티티를 강화합니다. 재사용 가능한 컴포넌트와 가이드라인을 제공합니다.",
    hasImage: false
  },
  {
    title: "개발 지원",
    description: "최신 기술 스택과 모범 사례를 활용한 개발 지원 서비스를 제공합니다. 안정적이고 확장 가능한 솔루션을 구현합니다.",
    hasImage: false
  }
]

const cardsRow2: CardItem[] = [
  {
    title: "마케팅 전략",
    description: "데이터 기반의 마케팅 전략 수립과 실행을 지원합니다. 타겟 고객에게 효과적으로 도달할 수 있는 채널 최적화를 제공합니다.",
    hasImage: true,
    imageSrc: img2
  },
  {
    title: "분석 및 인사이트",
    description: "비즈니스 데이터 분석을 통해 실행 가능한 인사이트를 제공합니다. 성과 측정과 개선 방안을 제시합니다.",
    hasImage: true,
    imageSrc: img2
  },
  {
    title: "고객 지원",
    description: "연중무휴 고객 지원 서비스로 신속하고 정확한 응대를 제공합니다. 다양한 채널을 통한 접근성을 보장합니다.",
    hasImage: true,
    imageSrc: img2
  }
]

export function CardGridImage() {
  return (
    <div className="bg-white flex flex-col gap-12 items-start p-4 md:p-16 w-full">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap">
          서비스 포트폴리오
        </p>
        <div className="flex flex-col font-normal justify-center leading-[1.2] text-[#757575] text-[20px] w-full">
          <p className="leading-[1.2] whitespace-pre-wrap">다양한 분야의 전문 서비스</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 h-auto md:h-[357px] items-center w-full">
        {cardsRow1.map((card, index) => (
          <div 
            key={index}
            className="bg-white border border-[#d9d9d9] flex flex-1 flex-wrap gap-6 items-start min-w-[240px] p-6 rounded-lg shrink-0"
          >
            {card.hasImage && card.imageSrc ? (
              <div className="min-w-[160px] relative shrink-0 size-[160px]">
                <img 
                  alt="" 
                  className="absolute inset-0 max-w-none object-[50%_50%] object-cover pointer-events-none size-full" 
                  src={card.imageSrc} 
                />
              </div>
            ) : (
              <div className="min-w-[160px] shrink-0 size-[160px]" />
            )}
            <div className="flex flex-1 flex-col gap-4 items-start min-w-[160px] relative shrink-0">
              <div className="flex flex-col gap-2 items-start w-full whitespace-pre-wrap">
                <p className="font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
                  {card.title}
                </p>
                <p className="font-normal leading-[1.4] text-[#757575] text-[16px] w-full">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 h-auto md:h-[357px] items-center w-full">
        {cardsRow2.map((card, index) => (
          <div 
            key={index}
            className="bg-white border border-[#d9d9d9] flex flex-1 flex-wrap gap-6 items-start min-w-[240px] p-6 rounded-lg shrink-0"
          >
            {card.hasImage && card.imageSrc ? (
              <div className="min-w-[160px] relative shrink-0 size-[160px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#e3e3e3] inset-0" />
                  <img 
                    alt="" 
                    className="absolute max-w-none object-[50%_50%] object-contain opacity-20 size-full" 
                    src={card.imageSrc} 
                  />
                </div>
              </div>
            ) : (
              <div className="min-w-[160px] shrink-0 size-[160px]" />
            )}
            <div className="flex flex-1 flex-col gap-4 items-start min-w-[160px] relative shrink-0">
              <div className="flex flex-col gap-2 items-start w-full whitespace-pre-wrap">
                <p className="font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
                  {card.title}
                </p>
                <p className="font-normal leading-[1.4] text-[#757575] text-[16px] w-full">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


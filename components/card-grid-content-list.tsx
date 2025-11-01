"use client"

const img2 = "https://www.figma.com/api/mcp/asset/135d9948-7a7e-4d44-a153-30ab2d545ca1"

interface CardItem {
  title: string
  description: string
  buttonText: string
  hasImage?: boolean
}

const cards: CardItem[] = [
  {
    title: "전문 서비스",
    description: "글로벌 시장에 맞춘 전문적인 서비스를 제공합니다. 다양한 산업 분야에서 검증된 경험을 바탕으로 고객의 비즈니스 성장을 지원합니다.",
    buttonText: "자세히 보기",
    hasImage: false
  },
  {
    title: "혁신적인 솔루션",
    description: "최신 기술과 트렌드를 반영한 혁신적인 솔루션을 제공합니다. 디지털 전환과 비즈니스 최적화를 위한 맞춤형 서비스를 만나보세요.",
    buttonText: "자세히 보기",
    hasImage: true
  },
  {
    title: "글로벌 네트워크",
    description: "전 세계 주요 시장에 네트워크를 구축하여 글로벌 비즈니스 확장을 지원합니다. 지역 특성에 맞춘 현지화 서비스를 제공합니다.",
    buttonText: "자세히 보기",
    hasImage: true
  }
]

export function CardGridContentList() {
  return (
    <div className="bg-white flex flex-col gap-12 items-start p-4 md:p-16 w-full">
      <div className="flex flex-col gap-2 items-start">
        <p className="font-semibold leading-[1.2] text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full whitespace-pre-wrap">
          주요 서비스
        </p>
        <div className="flex flex-col font-normal justify-center leading-[1.2] text-[#757575] text-[20px] w-full">
          <p className="leading-[1.2] whitespace-pre-wrap">고객을 위한 최고의 서비스 솔루션</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-start w-full">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white border border-[#d9d9d9] flex flex-wrap gap-6 items-start min-w-[240px] p-6 rounded-lg w-full"
          >
            {card.hasImage ? (
              <div className="min-w-[160px] relative shrink-0 size-[160px]">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#e3e3e3] inset-0" />
                  <img 
                    alt="" 
                    className="absolute max-w-none object-[50%_50%] object-contain opacity-20 size-full" 
                    src={img2} 
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white min-w-[160px] shrink-0 size-[160px]" />
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
              <div className="flex gap-4 items-center w-full">
                <div className="bg-[#e3e3e3] border border-[#767676] relative rounded-lg shrink-0">
                  <div className="flex gap-2 items-center justify-center p-3 rounded-[inherit]">
                    <p className="font-normal leading-none text-[#1e1e1e] text-[16px]">
                      {card.buttonText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


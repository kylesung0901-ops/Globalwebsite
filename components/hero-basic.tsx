"use client"

export function HeroBasic() {
  return (
    <div className="bg-[#f5f5f5] flex flex-col items-center px-4 md:px-16 py-20 md:py-40 w-full">
      <div className="flex flex-col gap-2 items-center text-center max-w-4xl">
        <p className="font-bold leading-[1.2] text-[#1e1e1e] text-4xl md:text-[72px] tracking-[-2.16px] w-full whitespace-pre-wrap">
          글로벌 에이전시
        </p>
        <div className="flex flex-col font-normal justify-center leading-[1.2] text-[#757575] text-xl md:text-[32px] w-full">
          <p className="leading-[1.2] whitespace-pre-wrap">글로벌 비즈니스를 위한 전문 에이전시</p>
        </div>
      </div>
    </div>
  )
}


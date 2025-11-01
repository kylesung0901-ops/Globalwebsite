"use client"

import Image from "next/image"
import Link from "next/link"

const img4 = "https://www.figma.com/api/mcp/asset/aca5a79d-0f26-4371-9d07-2873d2df7ceb"
const img5 = "https://www.figma.com/api/mcp/asset/3e8bb544-d4b1-4e47-b4b2-96fd236be9e4"
const img6 = "https://www.figma.com/api/mcp/asset/fb5bc4d4-5320-468a-a02e-8a1883bf9021"
const img7 = "https://www.figma.com/api/mcp/asset/01f96930-8d4d-4e8b-a49f-ad23d346e08f"
const img8 = "https://www.figma.com/api/mcp/asset/6e86d7ee-8d2-4e9a-8086-44930e675ce2"

const useCases = [
  "UI 디자인",
  "UX 디자인",
  "와이어프레이밍",
  "다이어그램",
  "브레인스토밍",
  "온라인 화이트보드",
  "팀 협업",
]

const explore = [
  "디자인",
  "프로토타이핑",
  "개발 기능",
  "디자인 시스템",
  "협업 기능",
  "디자인 프로세스",
  "팀 협업 도구",
]

const resources = [
  "블로그",
  "모범 사례",
  "색상",
  "색상 휠",
  "지원",
  "개발자",
  "리소스 라이브러리",
]

export function FooterFigma() {
  return (
    <footer className="bg-white border-t border-[#d9d9d9] relative w-full max-w-[1200px]">
      <div className="box-border flex flex-col md:flex-row flex-wrap gap-4 items-start overflow-clip pb-20 md:pb-40 pt-8 px-4 md:px-8 relative w-full">
        <div className="flex flex-col gap-6 items-start min-w-[240px] relative shrink-0 w-[262px]">
          <div className="h-[35px] relative shrink-0 w-[23.333px]">
            <div className="absolute inset-[-5%_-7.5%]">
              <Image 
                alt="Global Logo" 
                className="block max-w-none size-full" 
                src={img4} 
                width={24}
                height={35}
              />
            </div>
          </div>
          <div className="flex gap-4 items-center relative shrink-0">
            <div className="h-[24px] relative shrink-0 w-[23.98px]">
              <Image alt="X Logo" className="block max-w-none size-full" src={img5} width={24} height={24} />
            </div>
            <div className="relative shrink-0 size-[24px]">
              <Image alt="Instagram Logo" className="block max-w-none size-full" src={img6} width={24} height={24} />
            </div>
            <div className="relative shrink-0 size-[24px]">
              <Image alt="YouTube Logo" className="block max-w-none size-full" src={img7} width={24} height={24} />
            </div>
            <div className="relative shrink-0 size-[24px]">
              <Image alt="LinkedIn Logo" className="block max-w-none size-full" src={img8} width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-[262px]">
          <div className="box-border flex flex-col gap-[10px] items-start pb-4 pt-0 px-0 relative shrink-0 w-full">
            <div className="flex items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[1.4] relative shrink-0 text-[#1e1e1e] text-[16px]">
                사용 사례
              </p>
            </div>
          </div>
          {useCases.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="h-[22px] relative shrink-0 w-[89px]"
            >
              <div className="absolute bottom-0 flex flex-col font-normal justify-center leading-[0] left-0 not-italic right-[26.97%] text-[#1e1e1e] text-[16px] top-0 whitespace-nowrap">
                <p className="leading-[1.4]">{item}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-[262px]">
          <div className="box-border flex flex-col gap-[10px] items-start pb-4 pt-0 px-0 relative shrink-0 w-full">
            <div className="flex items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[1.4] relative shrink-0 text-[#1e1e1e] text-[16px]">
                탐색
              </p>
            </div>
          </div>
          {explore.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="h-[22px] relative shrink-0 w-[89px]"
            >
              <div className="absolute bottom-0 flex flex-col font-normal justify-center leading-[0] left-0 not-italic right-[26.97%] text-[#1e1e1e] text-[16px] top-0 whitespace-nowrap">
                <p className="leading-[1.4]">{item}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 items-start relative shrink-0 w-[262px]">
          <div className="box-border flex flex-col gap-[10px] items-start pb-4 pt-0 px-0 relative shrink-0 w-full">
            <div className="flex items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[1.4] relative shrink-0 text-[#1e1e1e] text-[16px]">
                리소스
              </p>
            </div>
          </div>
          {resources.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="h-[22px] relative shrink-0 w-[89px]"
            >
              <div className="absolute bottom-0 flex flex-col font-normal justify-center leading-[0] left-0 not-italic right-[26.97%] text-[#1e1e1e] text-[16px] top-0 whitespace-nowrap">
                <p className="leading-[1.4]">{item}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}


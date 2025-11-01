"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "Global은 무엇이며 누구를 위한 것인가요?",
    answer:
      "Global은 코딩 워크플로우를 가속화하고 싶은 개발자, 팀, 조직을 위한 AI 기반 개발 플랫폼입니다. 생산성을 향상시키고 싶은 개인 개발자와 원활한 협업 도구를 찾는 팀에게 완벽합니다.",
  },
  {
    question: "Global의 AI 코드 리뷰는 어떻게 작동하나요?",
    answer:
      "AI가 코드를 실시간으로 분석하여 개선을 위한 지능적인 제안을 제공하고, 잠재적인 버그를 찾아 모범 사례를 보장합니다. 코딩 패턴에서 학습하여 팀의 표준에 적응하여 코드 리뷰를 더 빠르고 일관되게 만듭니다.",
  },
  {
    question: "기존 도구와 Global을 통합할 수 있나요?",
    answer:
      "네! Global은 GitHub, GitLab, VS Code, Slack 등 인기 있는 개발 도구와 원클릭 통합을 제공합니다. MCP 연결을 통해 전체 개발 스택에서 서버 접근을 쉽게 관리하고 구성할 수 있습니다.",
  },
  {
    question: "무료 플랜에는 무엇이 포함되나요?",
    answer:
      "무료 플랜에는 실시간 코드 제안, 기본 통합, 단일 MCP 서버 연결, 최대 2개의 AI 코딩 에이전트, 브랜딩이 포함된 Vercel 배포가 포함됩니다. 시작하는 개인 개발자에게 완벽합니다.",
  },
  {
    question: "병렬 코딩 에이전트는 어떻게 작동하나요?",
    answer:
      "병렬 코딩 에이전트는 코드베이스의 다른 부분에서 동시에 작업하여 전통적인 단일 스레드 방식보다 복잡한 문제를 더 빠르게 해결합니다. 버그 수정, 기능 개발, 코드 최적화와 같은 다양한 작업을 동시에 처리하기 위해 여러 에이전트를 실행할 수 있습니다.",
  },
  {
    question: "Global에서 코드가 안전한가요?",
    answer:
      "물론입니다. 엔드투엔드 암호화, 안전한 데이터 전송, 업계 표준 준수를 포함한 엔터프라이즈급 보안 조치를 사용합니다. 코드는 명시적인 허가 없이는 안전한 환경을 벗어나지 않으며, 엔터프라이즈 고객을 위한 온프레미스 배포 옵션을 제공합니다.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            자주 묻는 질문
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Global에 대해 알아야 할 모든 것과 개발 워크플로우를 변혁시키는 방법
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}

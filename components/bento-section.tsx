import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI 기반 코드 리뷰",
      description: "실시간으로 더 깨끗한 코드를 위한 스마트한 제안을 받으세요.",
      Component: AiCodeReviews,
    },
    {
      title: "실시간 코딩 미리보기",
      description: "채팅하고 협업하며 즉시 변경사항을 함께 미리볼 수 있습니다.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "원클릭 통합",
      description: "인기 있는 개발 도구와 워크플로우를 쉽게 연결하세요.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "유연한 MCP 연결",
      description: "MCP 서버 접근을 쉽게 관리하고 구성할 수 있습니다.",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "병렬 코딩 에이전트 실행",
      description: "여러 AI 에이전트로 복잡한 문제를 더 빠르게 해결하세요.",
      Component: ParallelCodingAgents,
    },
    {
      title: "쉬운 배포",
      description: "코드에서 Vercel로 즉시 라이브 배포까지 진행하세요.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              AI로 워크플로우를 강화하세요
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              AI 에이전트에게 실시간 협업, 원활한 통합, 실행 가능한 인사이트를 요청하여 운영을 간소화하세요.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

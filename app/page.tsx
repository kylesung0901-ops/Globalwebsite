import { HeaderFigma } from "@/components/header-figma"
import { HeroBasic } from "@/components/hero-basic"
import { PanelImageDouble } from "@/components/panel-image-double"
import { CardGridContentList } from "@/components/card-grid-content-list"
import { CardGridImage } from "@/components/card-grid-image"
import { FooterFigma } from "@/components/footer-figma"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden pb-0">
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <HeaderFigma />
        <main className="w-full relative">
          <HeroBasic />
          <PanelImageDouble />
          <CardGridContentList />
          <CardGridImage />
        </main>
        <div className="relative z-10 max-w-[1200px] mx-auto mt-8 md:mt-16">
          <CTA />
        </div>
        <FooterFigma />
      </div>
    </div>
  )
}

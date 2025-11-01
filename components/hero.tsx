"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-pretty">
            Digital Innovation at Scale
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto text-pretty">
            We transform bold ideas into exceptional digital experiences that drive business growth and captivate
            audiences worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold hover:border-foreground hover:bg-foreground/5 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              AI 에이전트의 힘을 <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                발휘하세요
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              코드를 작성, 검토, 최적화하는 지능형 AI 에이전트로 개발 워크플로우를 가속화하세요.
            </p>
          </>
        }
      >
        <Image
          src="/images/dashboard-preview.png"
          alt="AI 대시보드 미리보기"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}


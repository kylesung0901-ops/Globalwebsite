"use client"

import Link from "next/link"
import { useState } from "react"
import { AuthDialog, useAuth } from "@/components/auth-dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const img = "https://www.figma.com/api/mcp/asset/a66e4df6-a08c-4836-a906-51d66fcacfc3"

const navItems = [
  { name: "제품", href: "#products", active: true },
  { name: "솔루션", href: "#solutions" },
  { name: "커뮤니티", href: "#community" },
  { name: "리소스", href: "#resources" },
  { name: "가격", href: "#pricing" },
  { name: "연락처", href: "#contact" },
  { name: "링크", href: "#link" },
]

export function HeaderFigma() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const { user, loading, logout } = useAuth()

  return (
    <header className="bg-white border-b border-[#d9d9d9] relative w-full">
      <div className="box-border flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-center overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
        <div className="flex gap-6 items-center relative shrink-0">
          <div className="h-[35px] relative shrink-0 w-[40px]">
            <div className="absolute bottom-[-5%] left-0 right-0 top-[-5%]">
              <Image 
                alt="Global Logo" 
                className="block max-w-none size-full" 
                src={img} 
                width={40}
                height={35}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-wrap gap-2 items-start justify-center md:justify-end min-h-px min-w-px relative shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`box-border flex gap-2 items-center justify-center p-2 rounded-lg shrink-0 ${
                item.active 
                  ? "bg-[#f5f5f5]" 
                  : ""
              }`}
            >
              <div className={`flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[16px] whitespace-nowrap ${
                item.active 
                  ? "text-[#1e1e1e]" 
                  : "text-[#1e1e1e]"
              }`}>
                <p className="leading-none">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-3 items-center relative shrink-0 w-[178px]">
          {loading ? (
            <div className="px-2 py-2 text-sm text-muted-foreground">로딩 중...</div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#1e1e1e]">{user.email}</span>
              </div>
              <Button
                onClick={logout}
                variant="outline"
                className="bg-[#e3e3e3] border border-[#767676] flex-1"
              >
                로그아웃
              </Button>
            </div>
          ) : (
            <>
              <Button
                onClick={() => setIsAuthDialogOpen(true)}
                variant="outline"
                className="bg-[#e3e3e3] border border-[#767676] flex-1"
              >
                로그인
              </Button>
              <Button
                onClick={() => setIsAuthDialogOpen(true)}
                className="bg-[#2c2c2c] border border-[#2c2c2c] text-[#f5f5f5] flex-1"
              >
                회원가입
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Auth Dialog */}
      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </header>
  )
}


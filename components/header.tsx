"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, LogIn, LogOut, User } from "lucide-react"
import { AuthDialog, useAuth } from "@/components/auth-dialog"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const { user, loading, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  const navItems = [
    { name: "기능", href: "#features-section" },
    { name: "가격", href: "#pricing-section" },
    { name: "추천사례", href: "#testimonials-section" },
    { name: "FAQ", href: "#faq-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full py-4 px-6 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-foreground text-xl font-semibold">Global</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* Auth Button - Desktop */}
          {loading ? (
            <div className="hidden md:block px-4 py-2 text-sm text-muted-foreground">로딩 중...</div>
          ) : user ? (
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <User className="size-4" />
                <span className="text-foreground/70">{user.email}</span>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="size-4" />
                로그아웃
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => setIsAuthDialogOpen(true)}
              variant="outline"
              className="hidden md:flex items-center gap-2"
            >
              <LogIn className="size-4" />
              로그인
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
                <span className="sr-only">네비게이션 메뉴 토글</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground">네비게이션</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-[#888888] hover:text-foreground justify-start text-lg py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile Auth Button */}
                {loading ? (
                  <div className="px-4 py-2 text-sm text-muted-foreground text-center">로딩 중...</div>
                ) : user ? (
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center justify-center gap-2 text-sm py-2">
                      <User className="size-4" />
                      <span className="text-foreground/70">{user.email}</span>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2"
                    >
                      <LogOut className="size-4" />
                      로그아웃
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setIsAuthDialogOpen(true)}
                    variant="outline"
                    className="flex items-center justify-center gap-2 mt-4"
                  >
                    <LogIn className="size-4" />
                    로그인
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Auth Dialog */}
      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </header>
  )
}

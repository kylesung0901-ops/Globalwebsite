"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogIn, LogOut, User } from "lucide-react"
import { AuthDialog, useAuth } from "@/components/auth-dialog"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false)
  const { user, loading, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
          Nexus
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="#process" className="text-foreground/70 hover:text-foreground transition-colors">
            Process
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            Contact
          </Link>
          
          {/* Auth Button */}
          {loading ? (
            <div className="px-4 py-2 text-sm text-muted-foreground">로딩 중...</div>
          ) : user ? (
            <div className="flex items-center gap-4">
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
              className="flex items-center gap-2"
            >
              <LogIn className="size-4" />
              로그인
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link href="#services" className="text-foreground/70 hover:text-foreground">
                Services
              </Link>
              <Link href="#portfolio" className="text-foreground/70 hover:text-foreground">
                Portfolio
              </Link>
              <Link href="#process" className="text-foreground/70 hover:text-foreground">
                Process
              </Link>
              <Link
                href="#contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-center"
              >
                Contact
              </Link>
              
              {/* Mobile Auth Button */}
              {loading ? (
                <div className="px-4 py-2 text-sm text-muted-foreground text-center">로딩 중...</div>
              ) : user ? (
                <div className="flex flex-col gap-2">
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
                  onClick={() => {
                    setIsAuthDialogOpen(true)
                    setIsOpen(false)
                  }}
                  variant="outline"
                  className="flex items-center justify-center gap-2"
                >
                  <LogIn className="size-4" />
                  로그인
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
      
      {/* Auth Dialog */}
      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </header>
  )
}

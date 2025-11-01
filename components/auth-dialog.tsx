'use client'

import { useState, useEffect } from 'react'
import { auth } from '@/lib/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { onAuthStateChanged } from 'firebase/auth'

const TAB_LOGIN = 'login'
const TAB_SIGNUP = 'signup'

type AuthDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [activeTab, setActiveTab] = useState<string>(TAB_LOGIN)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError(null)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    resetForm()
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      return
    }

    if (password.length < 6) {
      setError('비밀번호는 최소 6자 이상이어야 합니다.')
      return
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    if (!auth) {
      setError('인증 서비스를 초기화할 수 없습니다.')
      return
    }

    setIsLoading(true)

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      resetForm()
      onOpenChange(false)
    } catch (error: any) {
      const errorMessage =
        error.code === 'auth/email-already-in-use'
          ? '이미 사용 중인 이메일입니다.'
          : error.code === 'auth/invalid-email'
            ? '유효하지 않은 이메일입니다.'
            : '회원가입 중 오류가 발생했습니다.'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('이메일과 비밀번호를 입력해주세요.')
      return
    }

    if (!auth) {
      setError('인증 서비스를 초기화할 수 없습니다.')
      return
    }

    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      resetForm()
      onOpenChange(false)
    } catch (error: any) {
      const errorMessage =
        error.code === 'auth/user-not-found'
          ? '존재하지 않는 사용자입니다.'
          : error.code === 'auth/wrong-password'
            ? '비밀번호가 올바르지 않습니다.'
            : error.code === 'auth/invalid-email'
              ? '유효하지 않은 이메일입니다.'
              : '로그인 중 오류가 발생했습니다.'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>로그인 또는 회원가입</DialogTitle>
          <DialogDescription>
            이메일과 비밀번호를 입력해주세요.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mb-4">
          <Button
            variant={activeTab === TAB_LOGIN ? 'default' : 'outline'}
            onClick={() => handleTabChange(TAB_LOGIN)}
            className="flex-1"
          >
            로그인
          </Button>
          <Button
            variant={activeTab === TAB_SIGNUP ? 'default' : 'outline'}
            onClick={() => handleTabChange(TAB_SIGNUP)}
            className="flex-1"
          >
            회원가입
          </Button>
        </div>

        <form
          onSubmit={activeTab === TAB_LOGIN ? handleSignIn : handleSignUp}
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              이메일
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
              minLength={6}
            />
          </div>

          {activeTab === TAB_SIGNUP && (
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                비밀번호 확인
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                required
                minLength={6}
              />
            </div>
          )}

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading
              ? '처리 중...'
              : activeTab === TAB_LOGIN
                ? '로그인'
                : '회원가입'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const logout = async () => {
    if (!auth) {
      return
    }

    try {
      await signOut(auth)
    } catch (error) {
      console.error('로그아웃 오류:', error)
    }
  }

  return { user, loading, logout }
}


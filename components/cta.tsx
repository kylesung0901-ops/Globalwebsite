'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function CTA() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !phone || !email || !projectDescription) {
      setError('모든 필드를 입력해주세요.')
      return
    }

    if (!email.includes('@')) {
      setError('유효한 이메일 주소를 입력해주세요.')
      return
    }

    if (!db) {
      setError('데이터베이스를 초기화할 수 없습니다. Firebase 설정을 확인해주세요.')
      return
    }

    setIsLoading(true)

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name,
        phone,
        email,
        projectDescription,
        createdAt: serverTimestamp(),
      })
      console.log('연락처 정보 저장 성공 - 문서 ID:', docRef.id)
      setIsSubmitted(true)
      setName('')
      setPhone('')
      setEmail('')
      setProjectDescription('')

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error: any) {
      console.error('연락처 제출 오류:', error)
      setError('연락처 정보를 저장하는 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Get in touch with our team to discuss your project.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-background/95 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                이름 <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="홍길동"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                전화번호 <span className="text-destructive">*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              이메일 <span className="text-destructive">*</span>
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
            <label htmlFor="projectDescription" className="text-sm font-medium text-foreground">
              프로젝트 설명 <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="projectDescription"
              placeholder="프로젝트에 대한 상세 설명을 입력해주세요..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              disabled={isLoading}
              required
              rows={5}
            />
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}

          {isSubmitted && (
            <div className="text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 p-3 rounded-md">
              감사합니다! 연락처 정보가 성공적으로 제출되었습니다. 빠른 시일 내에 연락드리겠습니다.
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {isLoading ? '제출 중...' : '문의하기'}
          </Button>
        </form>
      </div>
    </section>
  )
}

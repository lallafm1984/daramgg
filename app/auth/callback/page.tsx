"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function AuthCallback() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "authenticated") {
      // 로그인 성공 시 메인 페이지로 리다이렉트
      router.push("/")
    } else if (status === "unauthenticated") {
      // 로그인 실패 시 로그인 페이지로 리다이렉트
      router.push("/login")
    }
  }, [status, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36a785]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">로그인 처리 중...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  )
} 
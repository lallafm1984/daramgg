"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function LoginPage() {
  const [isKakaoInApp, setIsKakaoInApp] = useState(false)

  useEffect(() => {
    // 카카오 인앱 브라우저 감지
    const isKakaoInAppBrowser = /KAKAOTALK/i.test(navigator.userAgent)
    setIsKakaoInApp(isKakaoInAppBrowser)
  }, [])

  return (
    <div className="min-h-screen bg-[#36a785] flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-[#ffe200] transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">로그인</h1>
          <p className="mt-2 text-sm text-gray-600">다람.쥐쥐에 오신 것을 환영합니다</p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={() => signIn("kakao", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
          >
            <img src="/kakaoIcon.png" alt="Kakao" width={20} height={20} />
            카카오로 계속하기
          </Button>
          
          <Button
            onClick={() => signIn("naver", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-[#00bf18] text-white hover:bg-[#00bf18]/90"
          >
            <img src="/naverIcon.png" alt="Naver" width={30} height={30} />
            네이버로 계속하기
          </Button>
          
          {!isKakaoInApp && (
            <Button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-50"
            >
              <img src="/googleIcon.png" alt="Google" width={20} height={20} />
              구글로 계속하기
            </Button>
          )}
        </div>

        <div className="pt-4">
          <Link href="/" className="block w-full">
            <Button variant="outline" className="w-full text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 
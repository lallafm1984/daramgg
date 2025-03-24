"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36a785]">

      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">로그인</h2>
          <p className="mt-2 text-sm text-gray-600">
            소셜 계정으로 간편하게 로그인하세요
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button
            onClick={() => signIn("kakao", { callbackUrl: "/auth/callback" })}
            className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-black hover:bg-[#FEE500]/90"
          >
            <Image src="/kakaoicon.png" alt="Kakao" width={20} height={20} />
            카카오로 계속하기
          </Button>
          
          <Button
            onClick={() => signIn("naver", { callbackUrl: "/auth/callback" })}
            className="w-full flex items-center justify-center gap-2 bg-[#00bf18] text-white hover:bg-[#00bf18]/90"
          >
            <Image src="/navericon.png" alt="Naver" width={30} height={30} />
            네이버로 계속하기
          </Button>
          
          <Button
            onClick={() => signIn("google", { callbackUrl: "/auth/callback" })}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-50"
          >
            <Image src="/googleIcon.png" alt="Google" width={20} height={20} />
            구글로 계속하기
          </Button>

          <div className="pt-4">
            <Link href="/" className="w-full">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-black hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
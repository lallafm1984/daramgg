"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

type SizeOption = {
  category: string
  sizes: string[]
}

const colorOptions = [
  { id: 1, color: "검정", logo: "흰색" },
  { id: 2, color: "검정", logo: "3M 빛반사 스카치" },
  { id: 3, color: "카키", logo: "노란색" },
  { id: 4, color: "남색", logo: "노란색" },
  { id: 5, color: "흰색", logo: "남색" },
  { id: 6, color: "버건디", logo: "골드" },
]

const sizeInfo = [
  {
    category: "성인 여성(14수)",
    sizes: ["S", "M", "L"]
  },
  {
    category: "성인 남성(14수)",
    sizes: ["L", "XL", "2XL", "3XL"]
  },
  {
    category: "아동(17수)",
    sizes: ["110", "120", "130", "140", "150", "160"]
  }
]

export default function GroupBuyPage() {
  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [showSizeGuide, setShowSizeGuide] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#2b6ead]">다람쥐과학 1차 굿즈</h1>
          
          {/* 상품 이미지 */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg mb-12">
            <Image
              src="/product.png"
              alt="상품 이미지"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 색상 옵션 */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2b6ead]">색상 옵션</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {colorOptions.map((option) => (
                <div 
                  key={option.id}
                  className="p-4 rounded-lg border-2 border-[#2b6ead]/20 hover:border-[#2b6ead]/40 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-md text-md font-semibold">{option.color}</p>
                    <p className="text-md text-md font-semibold">로고: {option.logo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 사이즈 정보 */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#2b6ead]">사이즈 정보</h2>
            <div className="space-y-6">
              {sizeInfo.map((info) => (
                <div key={info.category} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-3">{info.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {info.sizes.map((size) => (
                      <div
                        key={size}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 사이즈 조견표 */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#2b6ead]">사이즈 조견표</h2>
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/product_size.jpg"
                alt="사이즈 조견표"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* 가격 및 계좌정보 팝업 */}
      <div className="fixed bottom-4 right-4 bg-amber-200/60 rounded-xl shadow-lg p-3 w-50 border-2 border-[#2b6ead]/20 z-50">
        <div className="space-y-2">
          <div className="border-b pb-1">
            <h3 className="text-lg font-bold text-[#2b6ead] mb-[2px]">공동구매 가격</h3>
            <p className="text-2xl font-bold">29,000원</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2b6ead] mb-[2px]">입금계좌</h3>
            <div className="space-y-0">
              <p className="font-medium">카카오뱅크</p>
              <p className="font-bold text-xl">3333-04-3273706</p>
              <p className="text-gray-600">조형진</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
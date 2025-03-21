import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="bg-[#36a785] pt-12 pb-12 md:pt-24 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative w-full h-[200px] animate-float ">
              <Image
                src="/title.png"
                fill
                alt="Featured Mini 4WD cars"
                className="rounded-lg object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center">
              {/* <div className="flex items-center gap-2">
                <Badge className="bg-[#FFE100] text-black hover:bg-[#FFE100]/90">
                  New Season
                </Badge>
                <ChevronRight className="w-4 h-4 text-[#FFE100]" />
                <Badge className="bg-[#E31E24] text-white hover:bg-[#E31E24]/90">
                  Coming Soon
                </Badge>
              </div> */}
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                미니4WD의 새로운 시대를 열다
              </h1>
              <p className="text-white/80 max-w-md text-sm md:text-base">
                다람쥐 과학과 함께하는 최고의 레이싱 경험
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button className="bg-[#FFE100] text-black hover:bg-[#FFE100]/90">
                레이스 일정 보기
              </Button>
              {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#36a685]">
                참가 신청하기
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Ticket className="w-6 h-6 md:w-8 md:h-8 text-[#ffe200]" />
          <p className="text-4xl font-bold text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Next Racing</p>
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 md:gap-5">
          {[
            { date: "3월20일 19:30", class: "오리지널 클래스", color: "#FF0700" },
            { date: "3월21일 19:30", class: "비기너 클래스", color: "#FF6B6B" },
            { date: "3월22일 19:30", class: "어드밴스드 클래스", color: "#4A90E2" },
            { date: "3월23일 19:30", class: "스톡클래스", color: "#FFA500" },
            { date: "3월24일 19:30", class: "오픈클래스", color: "#9B59B6" },
            { date: "3월25일 19:30", class: "오리지널 클래스", color: "#FFD700" },
            { date: "3월26일 19:30", class: "비기너 클래스", color: "#FF6B6B" },
          ].map((race, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border  p-3 md:p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2 md:gap-3 backdrop-blur-sm bg-white/80">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              <div className="text-xs md:text-sm font-medium  text-black">{race.date}</div>
              <Badge
                variant="outline"
                style={{
                  backgroundColor: `${race.color}10`,
                  color: race.color,
                  borderColor: `${race.color}20`,
                }}
                className="text-xs md:text-sm hover:opacity-80 transition-opacity"
              >
                {race.class}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
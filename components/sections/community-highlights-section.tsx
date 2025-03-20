import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CommunityHighlightsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold tracking-tight text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Community Highlights</h2>
          {/* <p className="text-muted-foreground">See what our community members are building and racing</p> */}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg border">
            <Image
              src="/c_1.jpg"
              width={400}
              height={300}
              alt="Community highlight"
              className="aspect-video object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">3/20 레이스 상품</h3>
                {/* <p className="text-sm text-white/80">Seoul Championship Series</p> */}
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border">
            <Image
                 src="/c_2.jpg"
              width={400}
              height={300}
              alt="Community highlight"
              className="aspect-video object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">3/20 출전 차량 </h3>
                {/* <p className="text-sm text-white/80">3/20 출전 차량</p> */}
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border">
            <Image
                 src="/c_3.jpg"
              width={400}
              height={300}
              alt="Community highlight"
              className="aspect-video object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">3/20 뒤풀이</h3>
                {/* <p className="text-sm text-white/80">Master Class Series</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline">게시판 바로가기</Button>
        </div>
      </div>
    </section>
  )
} 
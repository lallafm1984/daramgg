import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import RankingBoardSection from "@/components/sections/ranking-board-section"
import CommunityHighlightsSection from "@/components/sections/community-highlights-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#36a785]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <RankingBoardSection />
        {/* <NewArrivalsSection /> */}
        <CommunityHighlightsSection />
        {/* <CTASection /> */}
        {/* <DRGSection /> */}
      </main>
      <Footer />
    </div>
  )
}


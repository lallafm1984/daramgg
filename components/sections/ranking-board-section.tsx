import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RankingBoard from "@/components/ranking-board"

export default function RankingBoardSection() {
  return (
    <section className="py-12 md:py-32">
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:items-start md:justify-between">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Rankings</h2>
            
          </div>
          <div className="w-full mt-12 flex justify-center">
           <div className="relative">
              <Search className="absolute left-2.5 top-2 h-6 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search rankings..." className="w-[600px] pl-8 h-10 rounded-2xl bg-white/80" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-16">
          <TabsList className="w-full justify-start border-b pb-0 h-auto">

            <TabsTrigger
              value="speed"
              className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-white/80"
            >
              오리지널
            </TabsTrigger>
            <TabsTrigger
              value="endurance"
              className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-[#1E9B7B]"
            >
              비기너
            </TabsTrigger>
            <TabsTrigger
              value="drift"
              className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-[#1E9B7B]"
            >
              어드밴스드
            </TabsTrigger>
            <TabsTrigger
              value="obstacle"
              className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-[#1E9B7B]"
            >
              스톡
            </TabsTrigger>
            <TabsTrigger
              value="obstacle2"
              className="rounded-b-none data-[state=active]:border-b-2 data-[state=active]:border-[#1E9B7B]"
            >
              오픈
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <RankingBoard />
          </TabsContent>
          <TabsContent value="speed" className="mt-6">
            <RankingBoard category="speed" />
          </TabsContent>
          <TabsContent value="endurance" className="mt-6">
            <RankingBoard category="endurance" />
          </TabsContent>
          <TabsContent value="drift" className="mt-6">
            <RankingBoard category="drift" />
          </TabsContent>
          <TabsContent value="obstacle" className="mt-6">
            <RankingBoard category="obstacle" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 
import { Search , Trophy} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RankingBoard from "@/components/ranking-board"


export default function RankingBoardSection() {
  return (
    <section className="py-32 md:py-32">
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
           <Trophy className="w-6 h-6 md:w-8 md:h-8 text-[#ffe200]" />
            <h2 className="text-4xl font-bold tracking-tight text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Rankings</h2>
            
          </div>
          <div className="w-full mt-8 flex justify-center items-center">
           <div className="relative w-[50%]">
              <Search className="absolute left-2.5 top-2 h-6 w-4 text-black text-muted-foreground" />
              <Input type="search" placeholder="Search rankings..." className="w-full pl-8 h-10 rounded-2xl bg-white/80" />
            </div>
            <Button className="bg-[#FFE100] ml-4 text-black hover:bg-[#FFE100]/90">검색</Button>
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
          <TabsContent value="obstacle2" className="mt-6">
            <RankingBoard category="obstacle2" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
} 
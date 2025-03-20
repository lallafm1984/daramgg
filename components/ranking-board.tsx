import React from "react"

interface RankingBoardProps {
  category?: string
}

const RankingBoard: React.FC<RankingBoardProps> = ({ category = "all" }) => {
  const rankings = [
    { rank: 1, name: "안장수", score: 98.5, category: "speed" },
    { rank: 2, name: "조형진", score: 97.8, category: "speed" },
    { rank: 3, name: "기모나", score: 97.2, category: "speed" },
    { rank: 4, name: "안민수", score: 96.9, category: "speed" },
    { rank: 5, name: "드래곤", score: 96.5, category: "speed" },
  ]

  const filteredRankings = category === "all" 
    ? rankings 
    : rankings.filter(item => item.category === category)

  return (
    <div className="w-full ">
      <div className="rounded-md border border-black bg-white/80">
        <table className="w-full">
          <thead>
            <tr className="border-b border-black bg-muted/50">
              <th className="h-10 px-4 text-left text-black align-middle font-medium">Rank</th>
              <th className="h-10 px-4 text-left text-black align-middle font-medium">Name</th>
              <th className="h-10 px-4 text-left text-black align-middle font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredRankings.map((item) => (
              <tr key={item.rank} className="border-b border-black">
                <td className="p-4 align-middle text-black">{item.rank}</td>
                <td className="p-4 align-middle text-black">{item.name}</td>
                <td className="p-4 align-middle text-black">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RankingBoard 
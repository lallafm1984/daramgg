import { Button } from "@/components/ui/button"

export default function DRGSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">DRG Racing Categories</h2>
          <p className="text-muted-foreground mx-auto max-w-[800px]">
            Explore our specialized racing categories for different racing styles and preferences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-[#0066B3] flex items-center justify-center text-white text-2xl font-bold mb-4">
              D
            </div>
            <h3 className="text-xl font-bold mb-2">Drift</h3>
            <p className="text-muted-foreground">
              Specialized for cornering and drifting techniques. These cars excel on tracks with many curves and
              turns.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-[#0066B3] text-[#0066B3] hover:bg-[#0066B3] hover:text-white"
            >
              Explore Drift Cars
            </Button>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-[#E31E24] flex items-center justify-center text-white text-2xl font-bold mb-4">
              R
            </div>
            <h3 className="text-xl font-bold mb-2">Racing</h3>
            <p className="text-muted-foreground">
              Built for pure speed and acceleration. These cars dominate on straight tracks and speed competitions.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white"
            >
              Explore Racing Cars
            </Button>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg border hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-full bg-[#FFE100] flex items-center justify-center text-black text-2xl font-bold mb-4">
              G
            </div>
            <h3 className="text-xl font-bold mb-2">Grand Prix</h3>
            <p className="text-muted-foreground">
              All-around performers designed for competitive racing on complex tracks with various obstacles.
            </p>
            <Button
              variant="outline"
              className="mt-4 border-[#FFE100] text-black hover:bg-[#FFE100] hover:text-black"
            >
              Explore GP Cars
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
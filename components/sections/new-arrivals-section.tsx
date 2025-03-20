import { Button } from "@/components/ui/button"
import MiniCarCard from "@/components/mini-car-card"

export default function NewArrivalsSection() {
  return (
    <section className="py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">New Arrivals</h2>
          <p className="text-muted-foreground">Check out the latest Mini 4WD cars in our collection</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MiniCarCard
            name="Aero Avante"
            image="/placeholder.svg?height=200&width=300"
            price={24.99}
            rating={4.8}
            isNew={true}
          />
          <MiniCarCard
            name="Thunder Dragon"
            image="/placeholder.svg?height=200&width=300"
            price={22.99}
            rating={4.5}
            isNew={true}
          />
          <MiniCarCard
            name="Blast Arrow"
            image="/placeholder.svg?height=200&width=300"
            price={19.99}
            rating={4.2}
            isNew={true}
          />
          <MiniCarCard
            name="Shadow Breaker"
            image="/placeholder.svg?height=200&width=300"
            price={26.99}
            rating={4.7}
            isNew={true}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="bg-[#1E9B7B] hover:bg-[#1E9B7B]/90">View All New Arrivals</Button>
        </div>
      </div>
    </section>
  )
} 
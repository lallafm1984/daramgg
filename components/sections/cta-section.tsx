import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTASection() {
  return (
    <section className="bg-[#1E9B7B] py-12 md:py-24">
      <div className="container px-4 md:px-6 text-center">
        <div className="mx-auto max-w-[800px] space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the Squirrel Science Community
          </h2>
          <p className="text-white/90 md:text-xl">
            Get exclusive access to new releases, racing events, and connect with Mini 4WD enthusiasts
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-2 min-[400px]:flex-row justify-center">
            <Input placeholder="Enter your email" className="h-10 bg-white" />
            <Button className="h-10 bg-[#E31E24] text-white hover:bg-[#E31E24]/90">Subscribe</Button>
          </div>
          <p className="text-xs text-white/70">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  )
} 
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileNav from "@/components/mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 items-center justify-between md:justify-around">
        <div className="flex items-center gap-2">
          
          <Link href="/" className="flex items-center gap-2">
            <p className="text-2xl font-bold ml-4 text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">다람.쥐쥐</p>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-[#1E9B7B]">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#1E9B7B]">
            Rankings
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#1E9B7B]">
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#1E9B7B]">
            Community
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-[#1E9B7B]">
            About
          </Link>
        </nav>
        <div className="flex items-center mr-4 gap-4">
 
          <Button variant="default" className="hidden sm:flex bg-[#E31E24] hover:bg-[#E31E24]/90">
            Sign In
          </Button>
 
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
} 
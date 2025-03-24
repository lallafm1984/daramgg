"use client"

import Link from "next/link"
import { Menu, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import LogoutDialog from "./logout-dialog"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const { data: session } = useSession()
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
    setShowLogoutDialog(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-16 items-center justify-between md:justify-around">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <p className="text-2xl font-bold ml-4 text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">다람.쥐쥐</p>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-[#2b6ead] hover:text-[#2b6ead]/80 transition-colors duration-200">
              다람쥐과학
            </Link>
            <Link href="/schedule" className="text-sm font-bold text-[#2b6ead] hover:text-[#2b6ead]/80 transition-colors duration-200">
              일정
            </Link>
            <Link href="/ranking" className="text-sm font-bold text-[#2b6ead] hover:text-[#2b6ead]/80 transition-colors duration-200">
              랭킹
            </Link>
            <Link href="/community" className="text-sm font-bold text-[#2b6ead] hover:text-[#2b6ead]/80 transition-colors duration-200">
              커뮤니티
            </Link>
            <Link href="/gallery" className="text-sm font-bold text-[#2b6ead] hover:text-[#2b6ead]/80 transition-colors duration-200">
              갤러리
            </Link>
          </nav>
          <div className="flex items-center mr-4 gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={session.user?.image || "/default-avatar.svg"}
                      alt="Profile"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {session.user?.name}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex hover:bg-red-100 hover:text-red-600"
                  onClick={() => setShowLogoutDialog(true)}
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="default" className="hidden sm:flex bg-[#E31E24] hover:bg-[#E31E24]/90">
                  로그인
                </Button>
              </Link>
            )}
 
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>
      <LogoutDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
} 
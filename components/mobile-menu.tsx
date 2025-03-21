"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useSession, signOut } from "next-auth/react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { data: session } = useSession()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#36a785]">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-2xl font-bold text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">다람.쥐쥐</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <nav className="flex-1 p-6 space-y-6">
          <Link 
            href="/" 
            className="block py-3 text-lg font-medium text-white hover:text-[#ffe200] transition-colors duration-200" 
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            href="#" 
            className="block py-3 text-lg font-medium text-white hover:text-[#ffe200] transition-colors duration-200" 
            onClick={onClose}
          >
            Rankings
          </Link>
          <Link 
            href="#" 
            className="block py-3 text-lg font-medium text-white hover:text-[#ffe200] transition-colors duration-200" 
            onClick={onClose}
          >
            Shop
          </Link>
          <Link 
            href="#" 
            className="block py-3 text-lg font-medium text-white hover:text-[#ffe200] transition-colors duration-200" 
            onClick={onClose}
          >
            Community
          </Link>
          <Link 
            href="#" 
            className="block py-3 text-lg font-medium text-white hover:text-[#ffe200] transition-colors duration-200" 
            onClick={onClose}
          >
            About
          </Link>
        </nav>

        <div className="p-6 border-t border-white/10">
          {session ? (
            <Button
              variant="default"
              className="w-full bg-white text-[#36a785] hover:bg-white/90 font-medium"
              onClick={() => {
                signOut({ callbackUrl: "/" })
                onClose()
              }}
            >
              로그아웃
            </Button>
          ) : (
            <Link href="/login" className="block w-full" onClick={onClose}>
              <Button variant="default" className="w-full bg-white text-[#36a785] hover:bg-white/90 font-medium">
                로그인
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signOut } from "next-auth/react"
import { X } from "lucide-react"
import LogoutDialog from "./logout-dialog"
import { useState } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { data: session } = useSession()
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
    setShowLogoutDialog(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-[#36a785] z-50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#2d8a6b]">
            <Link href="/" className="flex items-center gap-2" onClick={onClose}>
              <p className="text-2xl font-bold text-[#ffe200] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">다람.쥐쥐</p>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link
                href="#"
                className="block py-3 text-xl font-medium text-white hover:text-[#ffe200] transition-colors duration-200 border-b border-[#2d8a6b]"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                href="#"
                className="block py-3 text-xl font-medium text-white hover:text-[#ffe200] transition-colors duration-200 border-b border-[#2d8a6b]"
                onClick={onClose}
              >
                Rankings
              </Link>
              <Link
                href="#"
                className="block py-3 text-xl font-medium text-white hover:text-[#ffe200] transition-colors duration-200 border-b border-[#2d8a6b]"
                onClick={onClose}
              >
                Shop
              </Link>
              <Link
                href="#"
                className="block py-3 text-xl font-medium text-white hover:text-[#ffe200] transition-colors duration-200 border-b border-[#2d8a6b]"
                onClick={onClose}
              >
                Community
              </Link>
              <Link
                href="#"
                className="block py-3 text-xl font-medium text-white hover:text-[#ffe200] transition-colors duration-200 border-b border-[#2d8a6b]"
                onClick={onClose}
              >
                About
              </Link>
            </div>
          </nav>
          <div className="p-4 border-t border-[#2d8a6b]">
            {session ? (
              <Button
                variant="outline"
                className="w-full bg-white text-[#36a785] hover:bg-white/90 font-medium"
                onClick={() => setShowLogoutDialog(true)}
              >
                로그아웃
              </Button>
            ) : (
              <Link href="/login" className="block w-full" onClick={onClose}>
                <Button variant="outline" className="w-full bg-white text-[#36a785] hover:bg-white/90 font-medium">
                  로그인
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <LogoutDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
      />
    </>
  )
} 
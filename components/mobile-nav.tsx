import React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const MobileNav = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-5 w-5" />
      <span className="sr-only">Toggle menu</span>
    </Button>
  )
}

export default MobileNav 
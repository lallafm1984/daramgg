import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t  bg-black">
      <div className="px-4 py-6 md:px-6 md:py-12">
        <div className="mt-4 md:mt-8 border-t pt-6 md:pt-8 flex flex-col md:flex-row justify-around items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-lef text-white/80">
            © {new Date().getFullYear()} Squirrel Science. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
} 
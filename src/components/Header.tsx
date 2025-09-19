import { Navbar } from "@/components/Navbar"
import { MobileMenu } from "@/components/MobileNav"

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </header>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  ShoppingCart,
  History,
  Settings,
  Mars,
  Venus,
  Backpack,
  BadgeCheck,
  Home,
  Percent,
  Info,
  Menu,
  Scale,
} from "lucide-react"
import { ModeToggle } from "./ThemeButton"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Fix hydration issue
  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMenu = () => setOpen(false)

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="text-foreground">
        <Menu size={20} />
      </Button>
    )
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`${theme === "dark" ? "text-purple-300" :  "text-purple-700"} border border-border`}
        >
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className={`${
          theme === "dark" 
            ? "bg-gradient-to-b from-purple-900/95 to-black/95 backdrop-blur-xl border-purple-800/50" 
            : "bg-gradient-to-b from-white/95 via-purple-100/95 to-pink-300/95 backdrop-blur-xl border-pink-200/50"
        } p-0 overflow-y-auto max-h-screen`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <SheetHeader>
              <SheetTitle className={`text-2xl font-bold ${theme === "dark" ? "text-purple-300" :  "text-purple-700"}`}>
                Midnight Bloom
              </SheetTitle>
            </SheetHeader>
            <ModeToggle />
          </div>

          {/* SHOP SECTION */}
          <div className="mb-8">
            <div className="space-y-2">
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/" onClick={closeMenu}>
                  <Home size={20} className="mr-3" />
                  Home
                </Link>
              </Button>
                <h3 className={`uppercase text-xs font-semibold tracking-wider mb-4 ${theme === "dark" ? "text-purple-300" : "text-purple-700"}`}>
                Discover
                </h3>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/men" onClick={closeMenu}>
                  <Mars size={20} className="mr-3" />
                  Men Perfumes
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/women" onClick={closeMenu}>
                  <Venus size={20} className="mr-3" />
                  Women Perfumes
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/travel" onClick={closeMenu}>
                  <Backpack size={20} className="mr-3" />
                  Travel Size
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/discounts" onClick={closeMenu}>
                  <Percent size={20} className="mr-3" />
                  Discounts
                </Link>
              </Button>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="mb-8">
            <h3 className={`uppercase text-xs font-semibold tracking-wider mb-4 ${theme === "dark" ? "text-purple-300" : "text-purple-700"}`}>
              About Us
            </h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/about" onClick={closeMenu}>
                  <Info size={20} className="mr-3" />
                  Social Media
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/social" onClick={closeMenu}>
                  <BadgeCheck size={20} className="mr-3" />
                  Privacy Policy
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/terms" onClick={closeMenu}>
                  <Scale size={20} className="mr-3" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* ACCOUNT SECTION */}
          <div className="pb-6">
            <h3 className={`uppercase text-xs font-semibold tracking-wider mb-4 ${theme === "dark" ? "text-purple-300" : "text-purple-700"}`}>
              Account
            </h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/cart" onClick={closeMenu}>
                  <ShoppingCart size={20} className="mr-3" />
                  Cart
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/history" onClick={closeMenu}>
                  <History size={20} className="mr-3" />
                  Order History
                </Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`w-full justify-start h-12 text-base ${
                  theme === "dark" 
                    ? "text-white hover:bg-purple-800/30 hover:text-purple-200" 
                    : "text-black hover:bg-purple-100 hover:text-purple-700"
                }`}
              >
                <Link href="/settings" onClick={closeMenu}>
                  <Settings size={20} className="mr-3" />
                  Settings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
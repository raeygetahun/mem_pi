"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-serif text-2xl text-white tracking-wider">LUMIÈRE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm tracking-wider hover:text-gold transition-colors",
                pathname === item.href ? "text-gold" : "text-cream",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-6 py-5 text-xs tracking-widest"
          >
            <Link href="/contact">BOOK A SESSION</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg tracking-wider hover:text-gold transition-colors",
                  pathname === item.href ? "text-gold" : "text-cream",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="mt-4 bg-transparent border-gold text-gold hover:bg-gold/10 rounded-none px-8 py-6 text-sm tracking-widest"
            >
              <Link href="/contact">BOOK A SESSION</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

const navigation = [
  { label: "HOME", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
]

"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { arabicHeadingFont } from "@/lib/fonts"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  const navItems = [
    { key: "home" as const, href: "/" },
    { key: "news" as const, href: "/news" },
    { key: "matches" as const, href: "/matches" },
    { key: "teams" as const, href: "/teams" },
    { key: "players" as const, href: "/players" },
    { key: "standings" as const, href: "/standings" },
  ]

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`flex items-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-green-600 rounded-full"></div>
            </div>
            <span
              className={`text-2xl font-bold text-white ${arabicHeadingFont.className}`}
              style={arabicHeadingFont.style}
            >
              {t("heroTitle")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 ${isRTL ? "space-x-reverse" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-white hover:text-green-200 transition-colors font-medium"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className={`hidden md:flex items-center space-x-4 ${isRTL ? "space-x-reverse" : ""}`}>
            <Button variant="ghost" size="sm" className="text-white hover:text-green-200">
              <Search className="h-4 w-4" />
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-green-500">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-green-200 transition-colors font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div
                className={`flex items-center justify-between px-2 pt-4 border-t border-green-500 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <Button variant="ghost" size="sm" className="text-white">
                  <Search className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("search")}
                </Button>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

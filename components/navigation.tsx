"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { arabicFont } from "@/lib/fonts"

export function Navigation() {
  const { t, dir } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/placeholder-logo.svg" alt="Arab Sports Logo" className="h-8 w-8" />
            <span className={`text-xl font-bold ${arabicFont.className}`}>رياضة عرب</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" dir={dir}>
          <Link href="/" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("home")}
          </Link>
          <Link href="/matches" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("matches")}
          </Link>
          <Link href="/news" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("news")}
          </Link>
          <Link href="/teams" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("teams")}
          </Link>
          <Link href="/about" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("about")}
          </Link>
          <Link href="/contact" className={`text-sm font-medium ${arabicFont.className}`}>
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <div className="hidden md:flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" className={arabicFont.className}>
                {t("login")}
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className={arabicFont.className}>{t("register")}</Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-2" dir={dir}>
            <Link href="/" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("home")}
            </Link>
            <Link href="/matches" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("matches")}
            </Link>
            <Link href="/news" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("news")}
            </Link>
            <Link href="/teams" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("teams")}
            </Link>
            <Link href="/about" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("about")}
            </Link>
            <Link href="/contact" className={`px-2 py-1 rounded-md hover:bg-accent ${arabicFont.className}`}>
              {t("contact")}
            </Link>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t">
              <Link href="/auth/login" className="flex-1">
                <Button variant="outline" className={`w-full ${arabicFont.className}`}>
                  {t("login")}
                </Button>
              </Link>
              <Link href="/auth/register" className="flex-1">
                <Button className={`w-full ${arabicFont.className}`}>{t("register")}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Navigation() {
  const { t, dir } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">رياضة عرب</span>
          </Link>
        </div>
        <nav className={`mx-6 flex items-center space-x-4 lg:space-x-6 ${dir === "rtl" ? "space-x-reverse" : ""}`}>
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t("home")}
          </Link>
          <Link href="/teams" className="text-sm font-medium transition-colors hover:text-primary">
            {t("teams")}
          </Link>
          <Link href="/tournaments" className="text-sm font-medium transition-colors hover:text-primary">
            {t("tournaments")}
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            {t("blog")}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {t("about")}
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">{t("search")}</span>
          </Button>
          <LanguageSwitcher />
          <Button variant="outline" size="sm">
            {t("login")}
          </Button>
        </div>
      </div>
    </header>
  )
}

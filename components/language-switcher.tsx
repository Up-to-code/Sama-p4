"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      <Globe className="h-5 w-5" />
      <span className="ml-2 text-xs font-bold">{language === "ar" ? "EN" : "عربي"}</span>
    </Button>
  )
}

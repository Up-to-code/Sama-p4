"use client"

import { Button } from "@/components/ui/button"
import { Play, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"

export function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-green-600 via-emerald-700 to-green-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-[80vh]">
        <div className={`w-full text-center ${isRTL ? "text-right" : "text-left"}`}>
          <div className="mb-8">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 ${arabicHeadingFont.className}`}
              style={arabicHeadingFont.style}
            >
              {t("heroTitle")}
            </h1>
            <p
              className={`text-xl md:text-3xl text-green-100 font-semibold tracking-wide ${arabicFont.className}`}
              style={arabicFont.style}
            >
              {t("heroSubtitle")}
            </p>
          </div>

          <p
            className={`text-lg md:text-xl text-green-50 max-w-3xl mx-auto mb-12 leading-relaxed ${arabicFont.className}`}
            style={arabicFont.style}
          >
            {t("heroDescription")}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-4 text-lg">
              <Play className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("watchLive")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 text-lg bg-transparent"
            >
              <TrendingUp className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
              {t("exploreNews")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

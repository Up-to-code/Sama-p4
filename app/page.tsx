"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { MatchesSection } from "@/components/matches-section"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"

export default function HomePage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 ${arabicHeadingFont.className}`}
            style={arabicHeadingFont.style}
          >
            {isRTL ? "ما يميز منصتنا" : "What Makes Us Special"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200 hover-lift">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3
                  className={`text-xl font-semibold text-green-800 mb-3 ${arabicHeadingFont.className}`}
                  style={arabicHeadingFont.style}
                >
                  {t("liveMatches")}
                </h3>
                <p className={`text-green-700 ${arabicFont.className}`} style={arabicFont.style}>
                  {t("liveMatchesDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 hover-lift">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3
                  className={`text-xl font-semibold text-blue-800 mb-3 ${arabicHeadingFont.className}`}
                  style={arabicHeadingFont.style}
                >
                  {t("breakingNews")}
                </h3>
                <p className={`text-blue-700 ${arabicFont.className}`} style={arabicFont.style}>
                  {t("breakingNewsDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 hover-lift">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3
                  className={`text-xl font-semibold text-purple-800 mb-3 ${arabicHeadingFont.className}`}
                  style={arabicHeadingFont.style}
                >
                  {t("teamStats")}
                </h3>
                <p className={`text-purple-700 ${arabicFont.className}`} style={arabicFont.style}>
                  {t("teamStatsDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <NewsSection />
      <MatchesSection />
      <Footer />
    </div>
  )
}

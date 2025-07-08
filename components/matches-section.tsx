"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

type MatchStatus = "live" | "upcoming" | "finished"

interface Team {
  name: {
    ar: string
    en: string
  }
  logo: string
}

interface Match {
  id: number
  homeTeam: Team
  awayTeam: Team
  competition: {
    ar: string
    en: string
  }
  status: MatchStatus
  time?: string
  score?: {
    home: number
    away: number
  }
  date: string
}

export function MatchesSection() {
  const { language, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<MatchStatus>("live")

  // Mock match data
  const matches: Match[] = [
    {
      id: 1,
      homeTeam: {
        name: { ar: "الأهلي", en: "Al Ahly" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "الزمالك", en: "Zamalek" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري المصري",
        en: "Egyptian League",
      },
      status: "live",
      time: "65'",
      score: { home: 2, away: 1 },
      date: "2025-07-08",
    },
    {
      id: 2,
      homeTeam: {
        name: { ar: "النصر", en: "Al Nassr" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "الهلال", en: "Al Hilal" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري السعودي",
        en: "Saudi League",
      },
      status: "live",
      time: "32'",
      score: { home: 0, away: 0 },
      date: "2025-07-08",
    },
    {
      id: 3,
      homeTeam: {
        name: { ar: "الوداد", en: "Wydad" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "الرجاء", en: "Raja" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري المغربي",
        en: "Moroccan League",
      },
      status: "upcoming",
      date: "2025-07-09",
    },
    {
      id: 4,
      homeTeam: {
        name: { ar: "الترجي", en: "Esperance" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "النجم الساحلي", en: "Etoile du Sahel" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري التونسي",
        en: "Tunisian League",
      },
      status: "upcoming",
      date: "2025-07-10",
    },
    {
      id: 5,
      homeTeam: {
        name: { ar: "اتحاد جدة", en: "Al-Ittihad" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "الأهلي السعودي", en: "Al-Ahli" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري السعودي",
        en: "Saudi League",
      },
      status: "finished",
      score: { home: 3, away: 2 },
      date: "2025-07-07",
    },
    {
      id: 6,
      homeTeam: {
        name: { ar: "الجزيرة", en: "Al Jazeera" },
        logo: "/placeholder-logo.svg",
      },
      awayTeam: {
        name: { ar: "شباب الأهلي", en: "Shabab Al Ahli" },
        logo: "/placeholder-logo.svg",
      },
      competition: {
        ar: "الدوري الإماراتي",
        en: "UAE League",
      },
      status: "finished",
      score: { home: 1, away: 1 },
      date: "2025-07-06",
    },
  ]

  const filteredMatches = matches.filter((match) => match.status === activeTab)

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold tracking-tighter ${arabicHeadingFont.className}`}>{t("matches")}</h2>
          <p className={`mt-2 text-gray-500 dark:text-gray-400 ${arabicFont.className}`}>
            {language === "ar"
              ? "تابع أحدث المباريات والنتائج من مختلف البطولات"
              : "Follow the latest matches and results from various competitions"}
          </p>
        </div>

        <Tabs defaultValue="live" className="w-full" onValueChange={(value) => setActiveTab(value as MatchStatus)}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="live" className={arabicFont.className}>
              <span className="flex items-center">
                {activeTab === "live" && <span className="mr-2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>}
                {t("live")}
              </span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className={arabicFont.className}>
              {t("upcoming")}
            </TabsTrigger>
            <TabsTrigger value="finished" className={arabicFont.className}>
              {t("finished")}
            </TabsTrigger>
          </TabsList>

          {["live", "upcoming", "finished"].map((status) => (
            <TabsContent key={status} value={status} className="space-y-4">
              {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
                  <Card key={match.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-4 bg-white dark:bg-gray-800">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className={`${arabicFont.className} text-xs`}>
                            {language === "ar" ? match.competition.ar : match.competition.en}
                          </Badge>

                          {match.status === "live" && (
                            <div className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-1"></span>
                              <span className={`text-xs font-medium text-red-500 ${arabicFont.className}`}>
                                {match.time}
                              </span>
                            </div>
                          )}

                          {match.status === "upcoming" && (
                            <span className={`text-xs text-gray-500 ${arabicFont.className}`}>
                              {new Date(match.date).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          )}

                          {match.status === "finished" && match.score && (
                            <span className={`text-xs font-medium ${arabicFont.className}`}>
                              {language === "ar" ? "النتيجة النهائية" : "Final Score"}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between py-2">
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img
                              src={match.homeTeam.logo || "/placeholder.svg"}
                              alt={language === "ar" ? match.homeTeam.name.ar : match.homeTeam.name.en}
                              className="w-8 h-8"
                            />
                            <span className={`font-medium ${arabicFont.className}`}>
                              {language === "ar" ? match.homeTeam.name.ar : match.homeTeam.name.en}
                            </span>
                          </div>

                          {match.score ? (
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                              <span className="font-bold text-lg">{match.score.home}</span>
                              <span className="text-gray-500">-</span>
                              <span className="font-bold text-lg">{match.score.away}</span>
                            </div>
                          ) : (
                            <div className="text-sm text-gray-500">
                              {language === "ar" ? "لم تبدأ بعد" : "Not started"}
                            </div>
                          )}

                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className={`font-medium ${arabicFont.className}`}>
                              {language === "ar" ? match.awayTeam.name.ar : match.awayTeam.name.en}
                            </span>
                            <img
                              src={match.awayTeam.logo || "/placeholder.svg"}
                              alt={language === "ar" ? match.awayTeam.name.ar : match.awayTeam.name.en}
                              className="w-8 h-8"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className={`text-center py-8 text-gray-500 ${arabicFont.className}`}>
                  {language === "ar" ? "لا توجد مباريات متاحة حالياً" : "No matches available at the moment"}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

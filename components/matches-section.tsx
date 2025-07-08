"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { amiri, cairo } from "@/lib/fonts"

export function MatchesSection() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("live")

  // Mock match data
  const liveMatches = [
    {
      id: 1,
      homeTeam: {
        ar: "الأهلي",
        en: "Al Ahly",
      },
      awayTeam: {
        ar: "الزمالك",
        en: "Zamalek",
      },
      homeScore: 2,
      awayScore: 1,
      time: "75'",
      competition: {
        ar: "الدوري المصري",
        en: "Egyptian Premier League",
      },
    },
    {
      id: 2,
      homeTeam: {
        ar: "الهلال",
        en: "Al Hilal",
      },
      awayTeam: {
        ar: "النصر",
        en: "Al Nassr",
      },
      homeScore: 0,
      awayScore: 0,
      time: "32'",
      competition: {
        ar: "الدوري السعودي",
        en: "Saudi Pro League",
      },
    },
  ]

  const upcomingMatches = [
    {
      id: 3,
      homeTeam: {
        ar: "الترجي",
        en: "Esperance",
      },
      awayTeam: {
        ar: "الوداد",
        en: "Wydad",
      },
      date: {
        ar: "غداً - 20:00",
        en: "Tomorrow - 20:00",
      },
      competition: {
        ar: "دوري أبطال أفريقيا",
        en: "CAF Champions League",
      },
    },
    {
      id: 4,
      homeTeam: {
        ar: "الرجاء",
        en: "Raja",
      },
      awayTeam: {
        ar: "الأهلي",
        en: "Al Ahly",
      },
      date: {
        ar: "الجمعة - 18:00",
        en: "Friday - 18:00",
      },
      competition: {
        ar: "دوري أبطال أفريقيا",
        en: "CAF Champions League",
      },
    },
  ]

  const results = [
    {
      id: 5,
      homeTeam: {
        ar: "الاتحاد",
        en: "Al Ittihad",
      },
      awayTeam: {
        ar: "الشباب",
        en: "Al Shabab",
      },
      homeScore: 3,
      awayScore: 1,
      date: {
        ar: "أمس",
        en: "Yesterday",
      },
      competition: {
        ar: "الدوري السعودي",
        en: "Saudi Pro League",
      },
    },
    {
      id: 6,
      homeTeam: {
        ar: "الأهلي",
        en: "Al Ahly",
      },
      awayTeam: {
        ar: "بيراميدز",
        en: "Pyramids",
      },
      homeScore: 2,
      awayScore: 0,
      date: {
        ar: "أمس",
        en: "Yesterday",
      },
      competition: {
        ar: "الدوري المصري",
        en: "Egyptian Premier League",
      },
    },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className={`${amiri.variable} font-amiri text-2xl font-bold md:text-3xl mb-6 text-center`}>
          {language === "ar" ? "المباريات" : "Matches"}
        </h2>

        <Tabs defaultValue="live" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="live" className={`${cairo.variable} font-cairo`}>
              <span className="flex items-center gap-2">
                <Badge variant="destructive" className="h-2 w-2 rounded-full p-0"></Badge>
                {t("liveNow")}
              </span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className={`${cairo.variable} font-cairo`}>
              {t("upcomingMatches")}
            </TabsTrigger>
            <TabsTrigger value="results" className={`${cairo.variable} font-cairo`}>
              {t("results")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="mt-6 space-y-4">
            {liveMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs text-muted-foreground">{match.competition[language]}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.homeTeam[language]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">{match.homeScore}</span>
                        <span className="text-xs">-</span>
                        <span className="text-lg font-bold">{match.awayScore}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.awayTeam[language]}</span>
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Badge variant="outline" className="animate-pulse">
                        {match.time}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6 space-y-4">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs text-muted-foreground">{match.competition[language]}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.homeTeam[language]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs">VS</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.awayTeam[language]}</span>
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Badge variant="outline">{match.date[language]}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="results" className="mt-6 space-y-4">
            {results.map((match) => (
              <Card key={match.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex flex-col space-y-2">
                    <div className="text-xs text-muted-foreground">{match.competition[language]}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.homeTeam[language]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold">{match.homeScore}</span>
                        <span className="text-xs">-</span>
                        <span className="text-lg font-bold">{match.awayScore}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`${amiri.variable} font-amiri font-bold`}>{match.awayTeam[language]}</span>
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Badge variant="secondary">{match.date[language]}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

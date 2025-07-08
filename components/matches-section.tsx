"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { arabicFont, arabicHeadingFont } from "@/lib/fonts"

export function MatchesSection() {
  const { t, isRTL } = useLanguage()

  const matches = {
    live: [
      {
        id: 1,
        homeTeam: isRTL ? "الأهلي" : "Al Ahly",
        awayTeam: isRTL ? "الزمالك" : "Zamalek",
        homeScore: 2,
        awayScore: 1,
        status: t("halfTime"),
        time: "45+2'",
        competition: isRTL ? "الدوري المصري" : "Egyptian League",
      },
    ],
    upcoming: [
      {
        id: 2,
        homeTeam: isRTL ? "الهلال" : "Al Hilal",
        awayTeam: isRTL ? "النصر" : "Al Nassr",
        date: isRTL ? "غداً" : "Tomorrow",
        time: "20:00",
        competition: isRTL ? "الدوري السعودي" : "Saudi League",
      },
      {
        id: 3,
        homeTeam: isRTL ? "الرجاء" : "Raja CA",
        awayTeam: isRTL ? "الوداد" : "Wydad AC",
        date: isRTL ? "الجمعة" : "Friday",
        time: "19:30",
        competition: isRTL ? "الدوري المغربي" : "Moroccan League",
      },
    ],
    completed: [
      {
        id: 4,
        homeTeam: isRTL ? "الاتحاد" : "Al Ittihad",
        awayTeam: isRTL ? "الشباب" : "Al Shabab",
        homeScore: 3,
        awayScore: 0,
        status: t("fullTime"),
        competition: isRTL ? "الدوري السعودي" : "Saudi League",
      },
    ],
  }

  const MatchCard = ({ match, type }: { match: any; type: "live" | "upcoming" | "completed" }) => (
    <Card className="hover-lift bg-white border-0 shadow-md">
      <CardContent className="p-6">
        <div className={`flex justify-between items-center mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Badge variant="outline" className="text-xs">
            {match.competition}
          </Badge>
          {type === "live" && <Badge className="bg-red-600 text-white animate-pulse-green">{t("liveNow")}</Badge>}
        </div>

        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={`text-center ${isRTL ? "text-right" : "text-left"}`}>
            <div className={`font-semibold text-lg mb-1 ${arabicFont.className}`} style={arabicFont.style}>
              {match.homeTeam}
            </div>
            {type !== "upcoming" && <div className="text-2xl font-bold text-green-600">{match.homeScore}</div>}
          </div>

          <div className="text-center px-4">
            {type === "live" && (
              <>
                <div className="text-sm text-gray-500 mb-1">{match.time}</div>
                <div className="text-xs text-red-600 font-semibold">{match.status}</div>
              </>
            )}
            {type === "upcoming" && (
              <>
                <div className={`text-sm text-gray-500 ${arabicFont.className}`} style={arabicFont.style}>
                  {match.date}
                </div>
                <div className="text-lg font-semibold">{match.time}</div>
              </>
            )}
            {type === "completed" && <div className="text-xs text-gray-500">{match.status}</div>}
          </div>

          <div className={`text-center ${isRTL ? "text-left" : "text-right"}`}>
            <div className={`font-semibold text-lg mb-1 ${arabicFont.className}`} style={arabicFont.style}>
              {match.awayTeam}
            </div>
            {type !== "upcoming" && <div className="text-2xl font-bold text-green-600">{match.awayScore}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 ${arabicHeadingFont.className}`}
          style={arabicHeadingFont.style}
        >
          {t("matches")}
        </h2>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="live" className={arabicFont.className} style={arabicFont.style}>
              {t("liveNow")}
            </TabsTrigger>
            <TabsTrigger value="upcoming" className={arabicFont.className} style={arabicFont.style}>
              {t("upcoming")}
            </TabsTrigger>
            <TabsTrigger value="completed" className={arabicFont.className} style={arabicFont.style}>
              {t("completed")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-4">
            {matches.live.map((match) => (
              <MatchCard key={match.id} match={match} type="live" />
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {matches.upcoming.map((match) => (
              <MatchCard key={match.id} match={match} type="upcoming" />
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {matches.completed.map((match) => (
              <MatchCard key={match.id} match={match} type="completed" />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

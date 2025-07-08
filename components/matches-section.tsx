"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont } from "@/lib/fonts"

const matchesData = {
  live: [
    {
      id: 1,
      homeTeam: { name: "الأهلي", logo: "/placeholder.svg?height=50&width=50" },
      awayTeam: { name: "الزمالك", logo: "/placeholder.svg?height=50&width=50" },
      score: { home: 1, away: 0 },
      time: "67'",
      stadium: "استاد القاهرة",
      competition: "الدوري المصري",
    },
  ],
  upcoming: [
    {
      id: 2,
      homeTeam: { name: "ليفربول", logo: "/placeholder.svg?height=50&width=50" },
      awayTeam: { name: "مانشستر سيتي", logo: "/placeholder.svg?height=50&width=50" },
      date: "2024-01-20",
      time: "20:00",
      stadium: "أنفيلد",
      competition: "الدوري الإنجليزي",
    },
    {
      id: 3,
      homeTeam: { name: "ريال مدريد", logo: "/placeholder.svg?height=50&width=50" },
      awayTeam: { name: "برشلونة", logo: "/placeholder.svg?height=50&width=50" },
      date: "2024-01-22",
      time: "22:00",
      stadium: "سانتياغو برنابيو",
      competition: "الليغا الإسبانية",
    },
  ],
  results: [
    {
      id: 4,
      homeTeam: { name: "باريس سان جيرمان", logo: "/placeholder.svg?height=50&width=50" },
      awayTeam: { name: "مارسيليا", logo: "/placeholder.svg?height=50&width=50" },
      score: { home: 3, away: 1 },
      date: "2024-01-15",
      stadium: "حديقة الأمراء",
      competition: "الدوري الفرنسي",
    },
  ],
}

export function MatchesSection() {
  const { t, isRTL } = useLanguage()

  const LiveMatch = ({ match }: { match: any }) => (
    <Card className="border-l-4 border-l-red-500">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className="bg-red-600 text-white animate-pulse">
            {t("live")} • {match.time}
          </Badge>
          <span className="text-sm text-gray-500">{match.competition}</span>
        </div>

        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={match.homeTeam.logo || "/placeholder.svg"} alt={match.homeTeam.name} className="w-8 h-8" />
            <span className="font-semibold">{match.homeTeam.name}</span>
          </div>

          <div className="text-2xl font-bold text-center px-4">
            {match.score.home} - {match.score.away}
          </div>

          <div className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="font-semibold">{match.awayTeam.name}</span>
            <img src={match.awayTeam.logo || "/placeholder.svg"} alt={match.awayTeam.name} className="w-8 h-8" />
          </div>
        </div>

        <div
          className={`flex items-center justify-center mt-4 text-sm text-gray-500 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <MapPin className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {match.stadium}
        </div>
      </CardContent>
    </Card>
  )

  const UpcomingMatch = ({ match }: { match: any }) => (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center text-sm text-gray-500 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Calendar className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
            {match.date} • {match.time}
          </div>
          <span className="text-sm text-gray-500">{match.competition}</span>
        </div>

        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={match.homeTeam.logo || "/placeholder.svg"} alt={match.homeTeam.name} className="w-8 h-8" />
            <span className="font-semibold">{match.homeTeam.name}</span>
          </div>

          <div className="text-lg font-bold text-center px-4 text-gray-400">{t("vs")}</div>

          <div className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="font-semibold">{match.awayTeam.name}</span>
            <img src={match.awayTeam.logo || "/placeholder.svg"} alt={match.awayTeam.name} className="w-8 h-8" />
          </div>
        </div>

        <div
          className={`flex items-center justify-center mt-4 text-sm text-gray-500 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <MapPin className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {match.stadium}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 ${arabicHeadingFont.className}`}
            style={arabicHeadingFont.style}
          >
            {t("matches")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="live">{t("liveMatches")}</TabsTrigger>
            <TabsTrigger value="upcoming">{t("upcomingMatches")}</TabsTrigger>
            <TabsTrigger value="results">{t("results")}</TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-4">
            {matchesData.live.map((match) => (
              <LiveMatch key={match.id} match={match} />
            ))}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            {matchesData.upcoming.map((match) => (
              <UpcomingMatch key={match.id} match={match} />
            ))}
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {matchesData.results.map((match) => (
              <Card key={match.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{match.date}</span>
                    <span className="text-sm text-gray-500">{match.competition}</span>
                  </div>

                  <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <img
                        src={match.homeTeam.logo || "/placeholder.svg"}
                        alt={match.homeTeam.name}
                        className="w-8 h-8"
                      />
                      <span className="font-semibold">{match.homeTeam.name}</span>
                    </div>

                    <div className="text-2xl font-bold text-center px-4">
                      {match.score.home} - {match.score.away}
                    </div>

                    <div
                      className={`flex items-center space-x-3 rtl:space-x-reverse ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="font-semibold">{match.awayTeam.name}</span>
                      <img
                        src={match.awayTeam.logo || "/placeholder.svg"}
                        alt={match.awayTeam.name}
                        className="w-8 h-8"
                      />
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

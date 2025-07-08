"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { amiri, cairo } from "@/lib/fonts"

export function NewsSection() {
  const { t, language } = useLanguage()

  // Mock news data
  const news = [
    {
      id: 1,
      title: {
        ar: "الأهلي يفوز على الزمالك في ديربي القاهرة",
        en: "Al Ahly defeats Zamalek in Cairo Derby",
      },
      category: {
        ar: "كرة القدم",
        en: "Football",
      },
      date: {
        ar: "منذ ساعتين",
        en: "2 hours ago",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: {
        ar: "منتخب مصر يتأهل لكأس العالم 2026",
        en: "Egypt qualifies for 2026 World Cup",
      },
      category: {
        ar: "كرة القدم",
        en: "Football",
      },
      date: {
        ar: "منذ 5 ساعات",
        en: "5 hours ago",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: {
        ar: "الهلال السعودي يتوج بطلاً لدوري أبطال آسيا",
        en: "Al Hilal crowned AFC Champions League winners",
      },
      category: {
        ar: "كرة القدم",
        en: "Football",
      },
      date: {
        ar: "منذ يوم",
        en: "1 day ago",
      },
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h2 className={`${amiri.variable} font-amiri text-2xl font-bold md:text-3xl`}>{t("latestNews")}</h2>
          <Button variant="link">{t("viewAll")}</Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title[language]}
                className="aspect-video w-full object-cover"
              />
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`${cairo.variable} font-cairo`}>
                    {item.category[language]}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{item.date[language]}</span>
                </div>
                <CardTitle className={`${amiri.variable} font-amiri line-clamp-2 text-lg`}>
                  {item.title[language]}
                </CardTitle>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" size="sm" className="w-full">
                  {t("readMore")}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

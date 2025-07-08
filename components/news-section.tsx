"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicFont, arabicHeadingFont } from "@/lib/fonts"

export function NewsSection() {
  const { t, isRTL } = useLanguage()

  const newsItems = [
    {
      id: 1,
      title: isRTL ? "الأهلي يفوز بالدوري المصري للمرة الـ42" : "Al Ahly Wins Egyptian League for 42nd Time",
      excerpt: isRTL
        ? "حقق النادي الأهلي المصري لقب الدوري المصري الممتاز للمرة الـ42 في تاريخه بعد فوزه على الزمالك في الجولة الأخيرة"
        : "Al Ahly SC secured their 42nd Egyptian Premier League title after defeating Zamalek in the final round",
      image: "/placeholder.jpg?height=200&width=300",
      category: isRTL ? "كرة القدم" : "Football",
      time: isRTL ? "منذ ساعتين" : "2 hours ago",
      breaking: true,
    },
    {
      id: 2,
      title: isRTL ? "منتخب المغرب يتأهل لكأس العالم 2026" : "Morocco National Team Qualifies for 2026 World Cup",
      excerpt: isRTL
        ? "تأهل المنتخب المغربي رسمياً لكأس العالم 2026 بعد فوزه على منتخب الجزائر بهدفين مقابل هدف واحد"
        : "Morocco officially qualifies for the 2026 World Cup after defeating Algeria 2-1 in a crucial match",
      image: "/placeholder.jpg?height=200&width=300",
      category: isRTL ? "كرة القدم" : "Football",
      time: isRTL ? "منذ 4 ساعات" : "4 hours ago",
      breaking: false,
    },
    {
      id: 3,
      title: isRTL ? "محمد صلاح يسجل هدفه الـ200 مع ليفربول" : "Mohamed Salah Scores 200th Goal for Liverpool",
      excerpt: isRTL
        ? "سجل النجم المصري محمد صلاح هدفه الـ200 مع نادي ليفربول الإنجليزي في مباراة اليوم أمام مانشستر يونايتد"
        : "Egyptian star Mohamed Salah scored his 200th goal for Liverpool FC in today's match against Manchester United",
      image: "/placeholder.jpg?height=200&width=300",
      category: isRTL ? "كرة القدم" : "Football",
      time: isRTL ? "منذ 6 ساعات" : "6 hours ago",
      breaking: false,
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${arabicHeadingFont.className}`}
            style={arabicHeadingFont.style}
          >
            {t("latestNews")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover-lift bg-white border-0 shadow-lg">
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                {item.breaking && (
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">{isRTL ? "عاجل" : "BREAKING"}</Badge>
                )}
                <Badge
                  variant="secondary"
                  className={`absolute bottom-4 ${isRTL ? "left-4" : "right-4"} bg-green-600 text-white`}
                >
                  {item.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div
                  className={`flex items-center gap-2 text-sm text-gray-500 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Clock className="h-4 w-4" />
                  <span className={arabicFont.className} style={arabicFont.style}>
                    {item.time}
                  </span>
                </div>

                <h3
                  className={`text-xl font-bold text-gray-900 mb-3 line-clamp-2 ${arabicHeadingFont.className}`}
                  style={arabicHeadingFont.style}
                >
                  {item.title}
                </h3>

                <p className={`text-gray-600 mb-4 line-clamp-3 ${arabicFont.className}`} style={arabicFont.style}>
                  {item.excerpt}
                </p>

                <Button variant="outline" className="w-full group bg-transparent">
                  <span className={arabicFont.className} style={arabicFont.style}>
                    {t("readMore")}
                  </span>
                  {isRTL ? (
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

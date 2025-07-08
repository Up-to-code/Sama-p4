"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont } from "@/lib/fonts"

const newsData = [
  {
    id: 1,
    title: {
      ar: "الأهلي يفوز على الزمالك في الكلاسيكو المصري",
      en: "Al Ahly defeats Zamalek in Egyptian Clasico",
    },
    excerpt: {
      ar: "حقق النادي الأهلي فوزاً مثيراً على الزمالك بنتيجة 2-1 في مباراة الكلاسيكو المصري",
      en: "Al Ahly achieved an exciting 2-1 victory over Zamalek in the Egyptian Clasico",
    },
    category: {
      ar: "كرة القدم",
      en: "Football",
    },
    time: "2 ساعات",
    views: "15.2K",
    isBreaking: true,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: {
      ar: "محمد صلاح يسجل هدفين في فوز ليفربول",
      en: "Mohamed Salah scores twice in Liverpool victory",
    },
    excerpt: {
      ar: "تألق النجم المصري محمد صلاح وسجل هدفين رائعين في فوز ليفربول على مانشستر يونايتد",
      en: "Egyptian star Mohamed Salah shined and scored two brilliant goals in Liverpool's victory over Manchester United",
    },
    category: {
      ar: "الدوري الإنجليزي",
      en: "Premier League",
    },
    time: "4 ساعات",
    views: "28.5K",
    isBreaking: false,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: {
      ar: "منتخب المغرب يتأهل لنهائي كأس أفريقيا",
      en: "Morocco national team qualifies for Africa Cup final",
    },
    excerpt: {
      ar: "تأهل المنتخب المغربي لنهائي كأس الأمم الأفريقية بعد فوز مثير على نيجيريا",
      en: "Morocco national team qualified for the Africa Cup of Nations final after an exciting victory over Nigeria",
    },
    category: {
      ar: "كأس أفريقيا",
      en: "Africa Cup",
    },
    time: "6 ساعات",
    views: "42.1K",
    isBreaking: false,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function NewsSection() {
  const { t, language, isRTL } = useLanguage()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 ${arabicHeadingFont.className}`}
            style={arabicHeadingFont.style}
          >
            {t("sportsNews")}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title[language]}
                  className="w-full h-48 object-cover"
                />
                {news.isBreaking && (
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">{t("breakingNews")}</Badge>
                )}
                <Badge
                  variant="secondary"
                  className={`absolute bottom-4 ${isRTL ? "left-4" : "right-4"} bg-black/70 text-white`}
                >
                  {news.category[language]}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg leading-tight line-clamp-2">{news.title[language]}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt[language]}</p>

                <div
                  className={`flex items-center justify-between text-sm text-gray-500 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Clock className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                    {news.time}
                  </div>
                  <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                    <Eye className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                    {news.views}
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  {t("readMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

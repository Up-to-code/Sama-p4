"use client"

import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function NewsSection() {
  const { language, t, dir } = useLanguage()

  // Mock news data
  const news = [
    {
      id: 1,
      title: {
        ar: "الأهلي يفوز على الزمالك في ديربي القاهرة",
        en: "Al Ahly defeats Zamalek in Cairo Derby",
      },
      excerpt: {
        ar: "حقق النادي الأهلي فوزاً مثيراً على غريمه التقليدي الزمالك بنتيجة 2-1 في مباراة ديربي القاهرة",
        en: "Al Ahly secured an exciting 2-1 victory over their traditional rival Zamalek in the Cairo Derby match",
      },
      category: {
        ar: "الدوري المصري",
        en: "Egyptian League",
      },
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      title: {
        ar: "النصر يتصدر الدوري السعودي بعد الفوز على الهلال",
        en: "Al Nassr leads Saudi League after victory over Al Hilal",
      },
      excerpt: {
        ar: "تصدر فريق النصر جدول ترتيب الدوري السعودي بعد فوزه على الهلال بثلاثة أهداف مقابل هدف",
        en: "Al Nassr topped the Saudi League standings after defeating Al Hilal with three goals to one",
      },
      category: {
        ar: "الدوري السعودي",
        en: "Saudi League",
      },
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      title: {
        ar: "منتخب المغرب يتأهل لنهائيات كأس أفريقيا",
        en: "Morocco qualifies for Africa Cup finals",
      },
      excerpt: {
        ar: "تأهل المنتخب المغربي رسمياً إلى نهائيات كأس أمم أفريقيا بعد فوزه على منتخب جنوب أفريقيا",
        en: "The Moroccan national team officially qualified for the Africa Cup of Nations finals after defeating South Africa",
      },
      category: {
        ar: "كأس أمم أفريقيا",
        en: "Africa Cup",
      },
      image: "/placeholder.jpg",
    },
  ]

  return (
    <section className="py-12 bg-white dark:bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className={`text-3xl font-bold tracking-tighter ${arabicHeadingFont.className}`}>{t("latestNews")}</h2>
            <p className={`mt-2 text-gray-500 dark:text-gray-400 ${arabicFont.className}`}>
              {language === "ar"
                ? "آخر التطورات والأخبار من عالم الرياضة"
                : "The latest developments and news from the world of sports"}
            </p>
          </div>
          <Button variant="outline" className={`mt-4 md:mt-0 ${arabicFont.className}`}>
            {language === "ar" ? "عرض جميع الأخبار" : "View all news"}
            {dir === "rtl" ? <ChevronLeft className="ml-2 h-4 w-4" /> : <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={language === "ar" ? item.title.ar : item.title.en}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={arabicFont.className}>
                    {language === "ar" ? item.category.ar : item.category.en}
                  </Badge>
                </div>
                <CardTitle className={`mt-2 ${arabicHeadingFont.className}`}>
                  {language === "ar" ? item.title.ar : item.title.en}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className={`text-gray-500 dark:text-gray-400 ${arabicFont.className}`}>
                  {language === "ar" ? item.excerpt.ar : item.excerpt.en}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="link" className={`px-0 ${arabicFont.className}`}>
                  {t("readMore")}
                  {dir === "rtl" ? <ChevronLeft className="ml-1 h-4 w-4" /> : <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

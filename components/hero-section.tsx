"use client"

import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const { language, dir } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ${arabicHeadingFont.className}`}
              >
                {language === "ar" ? "أخبار الرياضة العربية والعالمية" : "Arab and Global Sports News"}
              </h1>
              <p className={`max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 ${arabicFont.className}`}>
                {language === "ar"
                  ? "تابع أحدث أخبار الرياضة، نتائج المباريات، والتحليلات من جميع أنحاء العالم العربي والعالم."
                  : "Follow the latest sports news, match results, and analysis from across the Arab world and beyond."}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className={`${arabicFont.className}`} size="lg">
                {language === "ar" ? "تصفح المباريات" : "Browse Matches"}
                {dir === "rtl" ? <ChevronLeft className="ml-2 h-4 w-4" /> : <ChevronRight className="ml-2 h-4 w-4" />}
              </Button>
              <Button variant="outline" className={`${arabicFont.className}`} size="lg">
                {language === "ar" ? "أحدث الأخبار" : "Latest News"}
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
            <img
              alt="Sports Hero"
              className="h-full w-full object-cover"
              src="/placeholder.jpg"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

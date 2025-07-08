"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { amiri } from "@/lib/fonts"

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-20 dark:from-green-950 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className={`${amiri.variable} font-amiri text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none`}
              >
                {language === "ar" ? "أخبار الرياضة العربية والعالمية" : "Arab and Global Sports News"}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {language === "ar"
                  ? "تابع أحدث أخبار الرياضة، نتائج المباريات، والتحليلات من جميع أنحاء العالم العربي والعالم"
                  : "Follow the latest sports news, match results, and analysis from across the Arab world and beyond"}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">{language === "ar" ? "تصفح الأخبار" : "Browse News"}</Button>
              <Button variant="outline" size="lg">
                {language === "ar" ? "جدول المباريات" : "Match Schedule"}
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
            <img
              alt="Sports Hero"
              className="aspect-video object-cover"
              height="310"
              src="/placeholder.svg?height=310&width=550"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

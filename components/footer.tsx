"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { arabicFont } from "@/lib/fonts"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <img src="/placeholder-logo.svg" alt="Arab Sports Logo" className="h-8 w-8" />
              <span className={`text-xl font-bold ${arabicFont.className}`}>رياضة عرب</span>
            </Link>
            <p className={`text-gray-500 dark:text-gray-400 ${arabicFont.className}`}>
              {language === "ar"
                ? "منصتك الأولى لمتابعة أحدث الأخبار الرياضية والمباريات من العالم العربي والعالم"
                : "Your premier platform for following the latest sports news and matches from the Arab world and beyond"}
            </p>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${arabicFont.className}`}>
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/matches"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {t("matches")}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {t("teams")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${arabicFont.className}`}>{t("popularTeams")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/teams/al-ahly"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {language === "ar" ? "الأهلي" : "Al Ahly"}
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/al-hilal"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {language === "ar" ? "الهلال" : "Al Hilal"}
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/wydad"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {language === "ar" ? "الوداد" : "Wydad"}
                </Link>
              </li>
              <li>
                <Link
                  href="/teams/esperance"
                  className={`text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
                >
                  {language === "ar" ? "الترجي" : "Esperance"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-4 ${arabicFont.className}`}>{t("followUs")}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={`text-sm text-gray-500 dark:text-gray-400 ${arabicFont.className}`}>{t("copyright")}</p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <Link
              href="/privacy"
              className={`text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
            >
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link
              href="/terms"
              className={`text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${arabicFont.className}`}
            >
              {language === "ar" ? "شروط الاستخدام" : "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

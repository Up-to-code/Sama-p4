"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">رياضة عرب</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === "ar"
                ? "منصتك الأولى لمتابعة أحدث الأخبار الرياضية والمباريات من العالم العربي والعالم"
                : "Your premier platform for following the latest sports news and matches from the Arab world and beyond"}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("followUs")}</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("subscribe")}</h3>
            <div className="flex space-x-2">
              <Input placeholder={language === "ar" ? "البريد الإلكتروني" : "Email"} type="email" />
              <Button>{t("subscribe")}</Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{language === "ar" ? "روابط سريعة" : "Quick Links"}</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:underline">
                {t("about")}
              </a>
              <a href="#" className="text-sm hover:underline">
                {t("contact")}
              </a>
              <a href="#" className="text-sm hover:underline">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </a>
              <a href="#" className="text-sm hover:underline">
                {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            &copy; 2025 رياضة عرب. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}

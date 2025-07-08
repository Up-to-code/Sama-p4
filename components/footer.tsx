"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont, arabicFont } from "@/lib/fonts"

export function Footer() {
  const { t, isRTL } = useLanguage()

  const quickLinks = [
    { key: "home" as const, href: "/" },
    { key: "news" as const, href: "/news" },
    { key: "matches" as const, href: "/matches" },
    { key: "teams" as const, href: "/teams" },
    { key: "players" as const, href: "/players" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className={`flex items-center space-x-2 mb-4 ${isRTL ? "space-x-reverse" : ""}`}>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className={`text-2xl font-bold ${arabicHeadingFont.className}`} style={arabicHeadingFont.style}>
                {t("heroTitle")}
              </span>
            </div>
            <p className={`text-gray-300 mb-6 leading-relaxed ${arabicFont.className}`} style={arabicFont.style}>
              {isRTL
                ? "منصتك الأولى لمتابعة أحدث الأخبار الرياضية والمباريات من العالم العربي والعالم"
                : "Your premier platform for following the latest sports news and matches from the Arab world and beyond"}
            </p>
            <div className={`flex space-x-4 ${isRTL ? "space-x-reverse flex-row-reverse" : ""}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${arabicHeadingFont.className}`} style={arabicHeadingFont.style}>
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className={`text-gray-300 hover:text-green-400 transition-colors ${arabicFont.className}`}
                    style={arabicFont.style}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${arabicHeadingFont.className}`} style={arabicHeadingFont.style}>
              {t("contact")}
            </h3>
            <div className={`space-y-2 text-gray-300 ${arabicFont.className}`} style={arabicFont.style}>
              <p>{isRTL ? "البريد الإلكتروني:" : "Email:"} info@arabsports.com</p>
              <p>{isRTL ? "الهاتف:" : "Phone:"} +20 123 456 789</p>
              <p>
                {isRTL ? "العنوان:" : "Address:"} {isRTL ? "القاهرة، مصر" : "Cairo, Egypt"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className={arabicFont.className} style={arabicFont.style}>
            © 2024 {t("heroTitle")}. {t("allRightsReserved")}.
          </p>
        </div>
      </div>
    </footer>
  )
}

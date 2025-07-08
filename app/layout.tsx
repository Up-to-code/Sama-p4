import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { inter, cairo, amiri, notoArabic } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "رياضة عرب - Arab Sports",
  description: "منصتك الأولى لمتابعة أحدث الأخبار الرياضية والمباريات من العالم العربي والعالم",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${inter.variable} ${cairo.variable} ${amiri.variable} ${notoArabic.variable} ${inter.className}`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

import { Inter, Cairo, Amiri, Noto_Sans_Arabic as NotoSansArabic } from "next/font/google"

/* Latin / interface font */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

/* Arabic body font */
export const cairo = Cairo({
  weight: ["400", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-cairo",
})

/* Arabic heading font */
export const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
})

/* San-serif fallback / UI Arabic */
export const notoArabic = NotoSansArabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
})

// Compatibility exports for existing components
export const arabicFont = {
  className: "font-cairo",
  style: {
    fontFamily: "var(--font-cairo), var(--font-noto-arabic), sans-serif",
  },
}

export const arabicHeadingFont = {
  className: "font-amiri",
  style: {
    fontFamily: "var(--font-amiri), var(--font-noto-arabic), serif",
  },
}

import { Inter } from "next/font/google"

// Primary Arabic font - using a web-safe Arabic font as fallback
export const arabicFont = {
  className: "font-arabic",
  style: {
    fontFamily: '"Smaidead", "Amiri", "Noto Sans Arabic", "Cairo", sans-serif',
  },
}

// Secondary Arabic font for headings
export const arabicHeadingFont = {
  className: "font-arabic-heading",
  style: {
    fontFamily: '"Loalczishin", "Amiri", "Noto Sans Arabic", "Cairo", sans-serif',
  },
}

// English font
export const inter = Inter({ subsets: ["latin"] })

import { Inter } from "next/font/google"

// English fonts
export const inter = Inter({ subsets: ["latin"] })

// Arabic fonts with fallbacks
export const arabicFont = {
  className: "font-arabic",
  style: {
    fontFamily: '"Smaidead", "Amiri", "Noto Sans Arabic", "Cairo", sans-serif',
  },
}

export const arabicHeadingFont = {
  className: "font-arabic-heading",
  style: {
    fontFamily: '"Loalczishin", "Amiri", "Noto Sans Arabic", "Cairo", sans-serif',
  },
}

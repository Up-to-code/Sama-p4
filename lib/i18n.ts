export type Language = "ar" | "en"

export type TranslationKey =
  | "home"
  | "about"
  | "contact"
  | "login"
  | "register"
  | "matches"
  | "news"
  | "teams"
  | "live"
  | "upcoming"
  | "finished"
  | "readMore"
  | "latestNews"
  | "popularTeams"
  | "followUs"
  | "copyright"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    matches: "المباريات",
    news: "الأخبار",
    teams: "الفرق",
    live: "مباشر",
    upcoming: "قادمة",
    finished: "منتهية",
    readMore: "اقرأ المزيد",
    latestNews: "أحدث الأخبار",
    popularTeams: "الفرق الشعبية",
    followUs: "تابعنا",
    copyright: "جميع الحقوق محفوظة © 2025 رياضة عرب",
  },
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    login: "Login",
    register: "Register",
    matches: "Matches",
    news: "News",
    teams: "Teams",
    live: "Live",
    upcoming: "Upcoming",
    finished: "Finished",
    readMore: "Read More",
    latestNews: "Latest News",
    popularTeams: "Popular Teams",
    followUs: "Follow Us",
    copyright: "All rights reserved © 2025 Arab Sports",
  },
}

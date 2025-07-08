export const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    news: "الأخبار",
    matches: "المباريات",
    teams: "الفرق",
    players: "اللاعبون",
    standings: "الترتيب",
    about: "حولنا",
    contact: "اتصل بنا",

    // Hero Section
    heroTitle: "عالم الرياضة العربية",
    heroSubtitle: "تابع أحدث الأخبار والمباريات والنتائج من عالم الرياضة",
    watchLive: "شاهد مباشر",
    latestNews: "آخر الأخبار",

    // News Section
    breakingNews: "عاجل",
    sportsNews: "أخبار رياضية",
    readMore: "اقرأ المزيد",

    // Matches Section
    liveMatches: "المباريات المباشرة",
    upcomingMatches: "المباريات القادمة",
    results: "النتائج",
    live: "مباشر",
    vs: "ضد",

    // Teams Section
    topTeams: "أفضل الفرق",
    viewTeam: "عرض الفريق",

    // Players Section
    topPlayers: "أفضل اللاعبين",
    goals: "أهداف",
    assists: "تمريرات حاسمة",

    // Footer
    followUs: "تابعنا",
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    allRightsReserved: "جميع الحقوق محفوظة",

    // Common
    loading: "جاري التحميل...",
    error: "حدث خطأ",
    retry: "إعادة المحاولة",
    search: "بحث",
    filter: "تصفية",
    sort: "ترتيب",
  },
  en: {
    // Navigation
    home: "Home",
    news: "News",
    matches: "Matches",
    teams: "Teams",
    players: "Players",
    standings: "Standings",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Arabic Sports World",
    heroSubtitle: "Follow the latest news, matches, and results from the sports world",
    watchLive: "Watch Live",
    latestNews: "Latest News",

    // News Section
    breakingNews: "Breaking",
    sportsNews: "Sports News",
    readMore: "Read More",

    // Matches Section
    liveMatches: "Live Matches",
    upcomingMatches: "Upcoming Matches",
    results: "Results",
    live: "Live",
    vs: "vs",

    // Teams Section
    topTeams: "Top Teams",
    viewTeam: "View Team",

    // Players Section
    topPlayers: "Top Players",
    goals: "Goals",
    assists: "Assists",

    // Footer
    followUs: "Follow Us",
    quickLinks: "Quick Links",
    contact: "Contact",
    allRightsReserved: "All Rights Reserved",

    // Common
    loading: "Loading...",
    error: "An error occurred",
    retry: "Retry",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.ar

export function getTranslation(lang: Language, key: TranslationKey): string {
  return translations[lang][key] || translations.en[key] || key
}

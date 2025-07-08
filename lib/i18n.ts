export const translations = {
  en: {
    // Navigation
    home: "Home",
    news: "News",
    matches: "Matches",
    teams: "Teams",
    players: "Players",
    standings: "Standings",
    search: "Search",

    // Hero Section
    heroTitle: "Arab Sports",
    heroSubtitle: "Where Champions Rise",
    heroDescription:
      "Your premier destination for Arabic sports news, live matches, and comprehensive coverage of football, basketball, and more from across the Arab world.",
    watchLive: "Watch Live",
    exploreNews: "Explore News",

    // Features
    liveMatches: "Live Matches",
    liveMatchesDesc: "Watch live sports events and get real-time updates from matches across the Arab world.",
    breakingNews: "Breaking News",
    breakingNewsDesc: "Stay updated with the latest sports news, transfers, and exclusive interviews.",
    teamStats: "Team Statistics",
    teamStatsDesc: "Comprehensive statistics and analysis for your favorite teams and players.",

    // Matches
    liveNow: "Live Now",
    upcoming: "Upcoming",
    completed: "Completed",
    fullTime: "Full Time",
    halfTime: "Half Time",

    // News
    latestNews: "Latest Sports News",
    readMore: "Read More",

    // Footer
    quickLinks: "Quick Links",
    contact: "Contact",
    allRightsReserved: "All rights reserved",

    // Common
    loading: "Loading...",
    error: "Error occurred",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    news: "الأخبار",
    matches: "المباريات",
    teams: "الفرق",
    players: "اللاعبون",
    standings: "الترتيب",
    search: "البحث",

    // Hero Section
    heroTitle: "رياضة عرب",
    heroSubtitle: "حيث يولد الأبطال",
    heroDescription:
      "وجهتك الأولى للأخبار الرياضية العربية والمباريات المباشرة والتغطية الشاملة لكرة القدم وكرة السلة والمزيد من جميع أنحاء العالم العربي.",
    watchLive: "شاهد مباشر",
    exploreNews: "استكشف الأخبار",

    // Features
    liveMatches: "مباريات مباشرة",
    liveMatchesDesc:
      "شاهد الأحداث الرياضية المباشرة واحصل على التحديثات الفورية من المباريات في جميع أنحاء العالم العربي.",
    breakingNews: "أخبار عاجلة",
    breakingNewsDesc: "ابق على اطلاع بأحدث الأخبار الرياضية والانتقالات والمقابلات الحصرية.",
    teamStats: "إحصائيات الفرق",
    teamStatsDesc: "إحصائيات وتحليلات شاملة لفرقك ولاعبيك المفضلين.",

    // Matches
    liveNow: "مباشر الآن",
    upcoming: "قادمة",
    completed: "منتهية",
    fullTime: "الوقت الكامل",
    halfTime: "الشوط الأول",

    // News
    latestNews: "آخر الأخبار الرياضية",
    readMore: "اقرأ المزيد",

    // Footer
    quickLinks: "روابط سريعة",
    contact: "اتصل بنا",
    allRightsReserved: "جميع الحقوق محفوظة",

    // Common
    loading: "جاري التحميل...",
    error: "حدث خطأ",
  },
}

export type TranslationKey = keyof typeof translations.en
export type Language = keyof typeof translations

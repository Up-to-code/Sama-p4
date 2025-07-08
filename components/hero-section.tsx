"use client"

import { Button } from "@/components/ui/button"
import { Play, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { arabicHeadingFont } from "@/lib/fonts"

export function HeroSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isRTL ? 'lg:order-2' : ''}`}>
            <h1 
              className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${arabicHeadingFont.className}`}
              style={arabicHeadingFont.style}
            >
              {t('heroTitle')}
            </h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Button size="lg" className="bg-white text-green-800 hover:bg-green-50">
                <Play className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('watchLive')}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent">
                <TrendingUp className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('latestNews')}
              </Button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className={`${isRTL ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-white rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-white font-bold text-xl">⚽ 🏀 🏈 🎾</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">⚽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

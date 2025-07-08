import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageSquare, Shield } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { MatchesSection } from "@/components/matches-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2F3E2A] text-center mb-12">What Makes Sama Special</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#D4B896] border-none">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[#2F3E2A] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2F3E2A] mb-3">Community Driven</h3>
                <p className="text-[#2F3E2A]/80">
                  Connect with like-minded individuals and build meaningful relationships through shared interests and
                  discussions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#B8956A] border-none">
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-[#2F3E2A] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#2F3E2A] mb-3">Rich Discussions</h3>
                <p className="text-[#2F3E2A]/80">
                  Engage in thoughtful conversations, share your insights, and learn from diverse perspectives in our
                  blog community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2F3E2A] border-none">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-[#F5F1E8] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#F5F1E8] mb-3">Safe & Secure</h3>
                <p className="text-[#F5F1E8]/80">
                  Your privacy and security are our top priorities. Enjoy a safe environment for authentic expression
                  and connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <NewsSection />
      <MatchesSection />
      <Footer />
    </div>
  )
}

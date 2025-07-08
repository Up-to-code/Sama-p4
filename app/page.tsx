import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, MessageSquare, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif text-[#2F3E2A] mb-4">Sama</h1>
            <p className="text-xl md:text-2xl font-semibold text-[#2F3E2A] tracking-wider">THE SKY IS OUR LIMIT</p>
          </div>

          <p className="text-lg text-[#8B7355] max-w-2xl mx-auto mb-12 leading-relaxed">
            Welcome to Sama - a platform where ideas take flight and communities thrive. Share your thoughts, connect
            with others, and explore limitless possibilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
              <Link href="/blog">
                Explore Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2F3E2A] text-[#2F3E2A] hover:bg-[#2F3E2A] hover:text-white bg-transparent"
            >
              <Link href="/auth/register">Join Community</Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2F3E2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#F5F1E8] mb-6">Ready to Soar?</h2>
          <p className="text-lg text-[#F5F1E8]/80 mb-8 max-w-2xl mx-auto">
            Join our growing community of thinkers, creators, and dreamers. Your voice matters, and your story deserves
            to be heard.
          </p>
          <Button asChild size="lg" className="bg-[#D4B896] hover:bg-[#B8956A] text-[#2F3E2A]">
            <Link href="/auth/register">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

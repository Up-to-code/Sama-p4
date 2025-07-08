import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Lightbulb } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Passionate about building communities that inspire growth and connection.",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Technology",
    bio: "Full-stack developer with a love for creating seamless user experiences.",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MJ",
  },
  {
    name: "Elena Rodriguez",
    role: "Community Manager",
    bio: "Dedicated to fostering meaningful conversations and connections.",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "ER",
  },
]

const values = [
  {
    icon: Heart,
    title: "Authenticity",
    description: "We believe in genuine connections and authentic self-expression.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Together we achieve more than we ever could alone.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every interaction should have meaning and contribute to growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve to better serve our community's needs.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-[#2F3E2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#F5F1E8] mb-6">About Sama</h1>
          <p className="text-xl text-[#F5F1E8]/80 leading-relaxed">
            Where ideas take flight and communities thrive. We're building a platform that celebrates authentic voices
            and meaningful connections.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-[#D4B896] mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif text-[#2F3E2A] mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-[#2F3E2A] leading-relaxed text-center max-w-3xl mx-auto">
                At Sama, we believe that everyone has a unique story worth sharing and a voice that deserves to be
                heard. Our mission is to create a space where authentic conversations flourish, where diverse
                perspectives are celebrated, and where meaningful connections are formed through the power of shared
                experiences and ideas.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#2F3E2A] mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-white border-[#D4B896]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#D4B896] p-3 rounded-lg">
                        <value.icon className="h-6 w-6 text-[#2F3E2A]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#2F3E2A] mb-2">{value.title}</h3>
                        <p className="text-[#8B7355] leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <Card className="bg-[#D4B896] border-none mb-16">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif text-[#2F3E2A] mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-[#2F3E2A] leading-relaxed">
                <p>
                  Sama was born from a simple observation: in our increasingly connected world, genuine human connection
                  was becoming more rare and precious. We noticed that while social media platforms connected us
                  globally, they often left us feeling more isolated and less understood than ever before.
                </p>
                <p>
                  The name "Sama" comes from the Sanskrit word meaning "equal" or "same" - reflecting our belief that
                  despite our differences, we all share fundamental human experiences and desires for connection,
                  understanding, and growth.
                </p>
                <p>
                  We envisioned a platform where the quality of conversation mattered more than the quantity of
                  followers, where thoughtful discourse was valued over viral content, and where every member felt
                  empowered to share their authentic self without fear of judgment.
                </p>
                <p>
                  Today, Sama continues to evolve as a community-driven platform, shaped by the voices and needs of our
                  members. We're not just building a website - we're cultivating a movement toward more meaningful
                  digital interactions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-serif text-[#2F3E2A] mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white border-[#D4B896] text-center">
                  <CardContent className="p-6">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="bg-[#D4B896] text-[#2F3E2A] text-lg">{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-[#2F3E2A] mb-1">{member.name}</h3>
                    <Badge className="bg-[#2F3E2A] text-[#F5F1E8] mb-3">{member.role}</Badge>
                    <p className="text-[#8B7355] leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#2F3E2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#F5F1E8] mb-4">Join Our Journey</h2>
          <p className="text-lg text-[#F5F1E8]/80 mb-8 max-w-2xl mx-auto">
            Be part of a community that values authentic connection and meaningful conversation. Your voice matters, and
            your story has the power to inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/auth/register"
              className="inline-flex items-center justify-center rounded-md bg-[#D4B896] px-8 py-3 text-sm font-medium text-[#2F3E2A] shadow transition-colors hover:bg-[#B8956A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Join the Community
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[#F5F1E8] bg-transparent px-8 py-3 text-sm font-medium text-[#F5F1E8] shadow-sm transition-colors hover:bg-[#F5F1E8] hover:text-[#2F3E2A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MessageSquare, Heart, PlusCircle } from "lucide-react"

// Mock data - in a real app, this would come from a database
const blogPosts = [
  {
    id: 1,
    title: "The Art of Mindful Living in a Digital Age",
    excerpt:
      "Exploring how we can maintain mindfulness and presence while navigating our increasingly connected world.",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SC",
    },
    publishedAt: "2024-01-15",
    category: "Lifestyle",
    likes: 24,
    comments: 8,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Sustainable Communities Through Technology",
    excerpt: "How modern technology can be leveraged to create more sustainable and connected communities.",
    author: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MJ",
    },
    publishedAt: "2024-01-12",
    category: "Technology",
    likes: 31,
    comments: 12,
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Power of Storytelling in Personal Growth",
    excerpt: "Discovering how sharing our stories can lead to profound personal transformation and connection.",
    author: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
    publishedAt: "2024-01-10",
    category: "Personal Growth",
    likes: 18,
    comments: 6,
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Creativity in Constraints: Finding Freedom in Limitations",
    excerpt: "Why limitations can actually boost creativity and how to harness constraints for better outcomes.",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
    },
    publishedAt: "2024-01-08",
    category: "Creativity",
    likes: 27,
    comments: 9,
    readTime: "6 min read",
  },
]

const categories = ["All", "Lifestyle", "Technology", "Personal Growth", "Creativity", "Community"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <section className="py-12 px-4 bg-[#2F3E2A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#F5F1E8] mb-4">Our Blog</h1>
              <p className="text-lg text-[#F5F1E8]/80 max-w-2xl">
                Discover stories, insights, and perspectives from our community. Where thoughts take flight and ideas
                find their voice.
              </p>
            </div>
            <Button asChild className="bg-[#D4B896] hover:bg-[#B8956A] text-[#2F3E2A]">
              <Link href="/blog/create">
                <PlusCircle className="h-4 w-4 mr-2" />
                Write a Post
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 border-b border-[#D4B896]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className={
                  category === "All"
                    ? "bg-[#2F3E2A] text-[#F5F1E8] hover:bg-[#2F3E2A]/90"
                    : "bg-[#D4B896] text-[#2F3E2A] hover:bg-[#B8956A]"
                }
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white border-[#D4B896] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-[#D4B896] text-[#2F3E2A] hover:bg-[#B8956A]">{post.category}</Badge>
                    <span className="text-sm text-[#8B7355]">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-serif text-[#2F3E2A] line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-[#8B7355] transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-[#8B7355] line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback className="bg-[#D4B896] text-[#2F3E2A]">{post.author.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-[#2F3E2A]">{post.author.name}</p>
                        <div className="flex items-center text-xs text-[#8B7355]">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-[#8B7355]">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-[#2F3E2A] text-[#2F3E2A] hover:bg-[#2F3E2A] hover:text-white bg-transparent"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

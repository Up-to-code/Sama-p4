import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Calendar, MessageSquare, Heart, Share2, ArrowLeft } from "lucide-react"

// Mock data - in a real app, this would come from a database
const blogPost = {
  id: 1,
  title: "The Art of Mindful Living in a Digital Age",
  content: `
    <p>In our hyperconnected world, finding moments of genuine peace and mindfulness has become both more challenging and more essential than ever before. As we navigate through endless notifications, social media feeds, and digital distractions, the ancient practice of mindfulness offers us a pathway back to presence and intentional living.</p>

    <h2>The Digital Paradox</h2>
    <p>Technology has given us unprecedented access to information, connection, and convenience. Yet, this same technology often leaves us feeling scattered, anxious, and disconnected from our inner selves. The key lies not in rejecting technology entirely, but in developing a more conscious relationship with it.</p>

    <h2>Practical Steps for Mindful Digital Living</h2>
    <p>Here are some strategies that have proven effective for maintaining mindfulness in our digital age:</p>

    <h3>1. Create Sacred Spaces</h3>
    <p>Designate specific areas in your home as technology-free zones. This could be your bedroom, dining area, or a meditation corner. These spaces become sanctuaries where you can reconnect with yourself and your loved ones without digital interference.</p>

    <h3>2. Practice Digital Sabbaths</h3>
    <p>Set aside regular periods—whether it's an hour each day or a full day each week—to disconnect from all digital devices. Use this time for activities that nourish your soul: reading, walking in nature, having deep conversations, or simply sitting in silence.</p>

    <h3>3. Mindful Consumption</h3>
    <p>Be intentional about what you consume digitally. Curate your social media feeds to include content that inspires and uplifts you. Unsubscribe from newsletters that add stress rather than value to your life.</p>

    <h2>The Ripple Effect</h2>
    <p>When we practice mindful living, the benefits extend far beyond our personal well-being. We become more present for our relationships, more creative in our work, and more compassionate in our interactions with others. In a world that often feels fragmented, mindfulness helps us remember our interconnectedness.</p>

    <p>The journey toward mindful living in a digital age is not about perfection—it's about progress. Each moment of awareness, each conscious choice to be present, contributes to a more intentional and fulfilling life.</p>
  `,
  author: {
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SC",
    bio: "Mindfulness coach and digital wellness advocate with over 10 years of experience helping people find balance in the modern world.",
  },
  publishedAt: "2024-01-15",
  category: "Lifestyle",
  likes: 24,
  comments: 8,
  readTime: "5 min read",
}

const comments = [
  {
    id: 1,
    author: {
      name: "Alex Thompson",
      initials: "AT",
    },
    content:
      "This really resonates with me. I've been struggling to find balance with my phone usage, and the idea of digital sabbaths sounds like exactly what I need.",
    publishedAt: "2024-01-16",
    likes: 3,
  },
  {
    id: 2,
    author: {
      name: "Maria Santos",
      initials: "MS",
    },
    content:
      "Beautiful article! I especially love the concept of creating sacred spaces. I've started keeping my bedroom phone-free and the difference in my sleep quality is remarkable.",
    publishedAt: "2024-01-16",
    likes: 5,
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 text-[#2F3E2A]">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article className="bg-white rounded-lg border border-[#D4B896] overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-[#D4B896] text-[#2F3E2A] hover:bg-[#B8956A]">{blogPost.category}</Badge>
              <span className="text-sm text-[#8B7355]">{blogPost.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif text-[#2F3E2A] mb-6 leading-tight">{blogPost.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                  <AvatarFallback className="bg-[#D4B896] text-[#2F3E2A]">{blogPost.author.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[#2F3E2A]">{blogPost.author.name}</p>
                  <div className="flex items-center text-sm text-[#8B7355]">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPost.publishedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-[#8B7355]">
                  <Heart className="h-4 w-4 mr-1" />
                  {blogPost.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-[#8B7355]">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none text-[#2F3E2A] prose-headings:text-[#2F3E2A] prose-headings:font-serif prose-a:text-[#8B7355] prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>

        {/* Author Bio */}
        <Card className="bg-white border-[#D4B896] mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                <AvatarFallback className="bg-[#D4B896] text-[#2F3E2A] text-lg">
                  {blogPost.author.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-[#2F3E2A] mb-2">About {blogPost.author.name}</h3>
                <p className="text-[#8B7355] leading-relaxed">{blogPost.author.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card className="bg-white border-[#D4B896]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#2F3E2A] flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Comments ({comments.length})
              </h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add Comment Form */}
            <div className="space-y-4">
              <Textarea
                placeholder="Share your thoughts..."
                className="border-[#D4B896] focus:border-[#2F3E2A] min-h-[100px]"
              />
              <Button className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">Post Comment</Button>
            </div>

            <Separator className="bg-[#D4B896]" />

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-[#D4B896] text-[#2F3E2A]">{comment.author.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-[#2F3E2A]">{comment.author.name}</span>
                        <span className="text-sm text-[#8B7355]">
                          {new Date(comment.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-[#2F3E2A] leading-relaxed">{comment.content}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Button variant="ghost" size="sm" className="text-[#8B7355] h-8 px-2">
                          <Heart className="h-3 w-3 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-[#8B7355] h-8 px-2">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

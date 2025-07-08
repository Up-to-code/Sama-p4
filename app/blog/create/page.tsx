"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Save, Eye, Send, X } from "lucide-react"

const categories = [
  "Lifestyle",
  "Technology",
  "Personal Growth",
  "Creativity",
  "Community",
  "Health",
  "Travel",
  "Business",
]

export default function CreatePostPage() {
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDraft, setIsDraft] = useState(false)

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async (e: React.FormEvent, saveAsDraft = false) => {
    e.preventDefault()
    setIsLoading(true)
    setIsDraft(saveAsDraft)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle post creation logic here
      console.log("Post created:", { title, excerpt, content, category, tags, isDraft: saveAsDraft })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif text-[#2F3E2A] mb-2">Create New Post</h1>
          <p className="text-[#8B7355]">Share your thoughts and ideas with the Sama community</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
          <Card className="bg-white border-[#D4B896]">
            <CardHeader>
              <CardTitle className="text-[#2F3E2A]">Post Details</CardTitle>
              <CardDescription className="text-[#8B7355]">Basic information about your post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-[#2F3E2A]">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Enter your post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border-[#D4B896] focus:border-[#2F3E2A]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-[#2F3E2A]">
                  Excerpt
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your post..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="border-[#D4B896] focus:border-[#2F3E2A]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-[#2F3E2A]">
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger className="border-[#D4B896] focus:border-[#2F3E2A]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-[#2F3E2A]">
                    Tags
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="tags"
                      placeholder="Add a tag..."
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                      className="border-[#D4B896] focus:border-[#2F3E2A]"
                    />
                    <Button
                      type="button"
                      onClick={addTag}
                      variant="outline"
                      className="border-[#2F3E2A] text-[#2F3E2A] bg-transparent"
                    >
                      Add
                    </Button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag) => (
                        <Badge key={tag} className="bg-[#D4B896] text-[#2F3E2A] hover:bg-[#B8956A]">
                          {tag}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
                            onClick={() => removeTag(tag)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#D4B896]">
            <CardHeader>
              <CardTitle className="text-[#2F3E2A]">Content</CardTitle>
              <CardDescription className="text-[#8B7355]">
                Write your post content using Markdown formatting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="content" className="text-[#2F3E2A]">
                  Post Content
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your post content here... You can use Markdown formatting."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  required
                  className="border-[#D4B896] focus:border-[#2F3E2A] font-mono"
                />
              </div>

              <Alert className="mt-4 border-[#D4B896] bg-[#F5F1E8]">
                <AlertDescription className="text-[#8B7355]">
                  <strong>Tip:</strong> You can use Markdown formatting like **bold**, *italic*, # headings, and
                  [links](url) to style your content.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={(e) => handleSubmit(e, true)}
              disabled={isLoading}
              className="border-[#2F3E2A] text-[#2F3E2A] hover:bg-[#2F3E2A] hover:text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              {isLoading && isDraft ? "Saving..." : "Save as Draft"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white bg-transparent"
            >
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>

            <Button type="submit" disabled={isLoading} className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
              <Send className="h-4 w-4 mr-2" />
              {isLoading && !isDraft ? "Publishing..." : "Publish Post"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

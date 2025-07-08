"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, MapPin, Phone, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md bg-white border-[#D4B896]">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-serif text-[#2F3E2A] mb-2">Message Sent!</h2>
            <p className="text-[#8B7355] mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <section className="py-16 px-4 bg-[#2F3E2A]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#F5F1E8] mb-6">Get in Touch</h1>
          <p className="text-xl text-[#F5F1E8]/80 leading-relaxed max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif text-[#2F3E2A] mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-[#2F3E2A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F3E2A] mb-1">Email</h3>
                    <p className="text-[#8B7355]">hello@sama.com</p>
                    <p className="text-[#8B7355]">support@sama.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-[#2F3E2A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F3E2A] mb-1">Phone</h3>
                    <p className="text-[#8B7355]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-[#2F3E2A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F3E2A] mb-1">Address</h3>
                    <p className="text-[#8B7355]">
                      123 Innovation Street
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4B896] p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-[#2F3E2A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2F3E2A] mb-1">Business Hours</h3>
                    <p className="text-[#8B7355]">
                      Monday - Friday: 9:00 AM - 6:00 PM PST
                      <br />
                      Saturday: 10:00 AM - 4:00 PM PST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-[#D4B896]">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[#2F3E2A]">Send us a Message</CardTitle>
                  <CardDescription className="text-[#8B7355]">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#2F3E2A]">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="border-[#D4B896] focus:border-[#2F3E2A]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#2F3E2A]">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="border-[#D4B896] focus:border-[#2F3E2A]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-[#2F3E2A]">
                          Category
                        </Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                          required
                        >
                          <SelectTrigger className="border-[#D4B896] focus:border-[#2F3E2A]">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-[#2F3E2A]">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject line"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          className="border-[#D4B896] focus:border-[#2F3E2A]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#2F3E2A]">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={6}
                        required
                        className="border-[#D4B896] focus:border-[#2F3E2A]"
                      />
                    </div>

                    <Alert className="border-[#D4B896] bg-[#F5F1E8]">
                      <AlertDescription className="text-[#8B7355]">
                        We typically respond to all inquiries within 24 hours during business days.
                      </AlertDescription>
                    </Alert>

                    <Button
                      type="submit"
                      className="w-full bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

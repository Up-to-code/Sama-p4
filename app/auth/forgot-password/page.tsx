"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

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
            <h2 className="text-2xl font-serif text-[#2F3E2A] mb-2">Check Your Email</h2>
            <p className="text-[#8B7355] mb-6">
              We've sent a password reset link to your email address. Please check your inbox and follow the
              instructions.
            </p>
            <Button asChild className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
              <Link href="/auth/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-white border-[#D4B896]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-[#2F3E2A]">Reset Password</CardTitle>
          <CardDescription className="text-[#8B7355]">
            Enter your email address and we'll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2F3E2A]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                className="border-[#D4B896] focus:border-[#2F3E2A]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>

            <div className="text-center">
              <Link
                href="/auth/login"
                className="text-sm text-[#8B7355] hover:text-[#2F3E2A] transition-colors inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

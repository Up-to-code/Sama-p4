"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle login logic here
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-white border-[#D4B896]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-[#2F3E2A]">Welcome Back</CardTitle>
          <CardDescription className="text-[#8B7355]">Sign in to your Sama account</CardDescription>
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

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#2F3E2A]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="border-[#D4B896] focus:border-[#2F3E2A] pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-[#8B7355]" />
                  ) : (
                    <Eye className="h-4 w-4 text-[#8B7355]" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-[#8B7355] hover:text-[#2F3E2A] transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="text-center text-sm text-[#8B7355]">
              {"Don't have an account? "}
              <Link href="/auth/register" className="text-[#2F3E2A] hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

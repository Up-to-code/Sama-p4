"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!acceptTerms) {
      setError("Please accept the terms and conditions")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Handle registration logic here
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center py-12 px-4">
      <Card className="w-full max-w-md bg-white border-[#D4B896]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif text-[#2F3E2A]">Join Sama</CardTitle>
          <CardDescription className="text-[#8B7355]">Create your account and start your journey</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#2F3E2A]">
                  First Name
                </Label>
                <Input id="firstName" placeholder="John" required className="border-[#D4B896] focus:border-[#2F3E2A]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#2F3E2A]">
                  Last Name
                </Label>
                <Input id="lastName" placeholder="Doe" required className="border-[#D4B896] focus:border-[#2F3E2A]" />
              </div>
            </div>

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
                  placeholder="Create a strong password"
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-[#2F3E2A]">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  required
                  className="border-[#D4B896] focus:border-[#2F3E2A] pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-[#8B7355]" />
                  ) : (
                    <Eye className="h-4 w-4 text-[#8B7355]" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm text-[#8B7355]">
                I agree to the{" "}
                <Link href="/terms" className="text-[#2F3E2A] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#2F3E2A] hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>

            <div className="text-center text-sm text-[#8B7355]">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#2F3E2A] hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

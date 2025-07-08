"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context

  return (
    <nav className="bg-[#F5F1E8] border-b border-[#D4B896] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2F3E2A] rounded-full flex items-center justify-center">
              <div className="w-4 h-2 bg-[#F5F1E8] rounded-full transform rotate-12"></div>
            </div>
            <span className="text-2xl font-serif text-[#2F3E2A]">Sama</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
              Contact
            </Link>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-[#2F3E2A]">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-[#F5F1E8] border-[#D4B896]">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/blog/create">Write Post</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                <Button asChild variant="ghost" className="text-[#2F3E2A]">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
                  <Link href="/auth/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden text-[#2F3E2A]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D4B896]">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                Contact
              </Link>

              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/blog/create" className="text-[#2F3E2A] hover:text-[#8B7355] transition-colors">
                    Write Post
                  </Link>
                  <Button
                    variant="ghost"
                    className="text-[#2F3E2A] justify-start p-0"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-4">
                  <Button asChild variant="outline" className="border-[#2F3E2A] text-[#2F3E2A] bg-transparent">
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-[#2F3E2A] hover:bg-[#2F3E2A]/90 text-white">
                    <Link href="/auth/register">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

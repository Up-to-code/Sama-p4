import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2F3E2A] text-[#F5F1E8] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#F5F1E8] rounded-full flex items-center justify-center">
                <div className="w-4 h-2 bg-[#2F3E2A] rounded-full transform rotate-12"></div>
              </div>
              <span className="text-2xl font-serif">Sama</span>
            </div>
            <p className="text-[#F5F1E8]/80 mb-4 max-w-md">
              Where ideas take flight and communities thrive. Join us in exploring limitless possibilities and
              meaningful connections.
            </p>
            <p className="text-sm text-[#F5F1E8]/60">© 2024 Sama. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Home
              </Link>
              <Link href="/blog" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <Link href="/auth/register" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Join Us
              </Link>
              <Link href="/auth/login" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Login
              </Link>
              <Link href="/blog/create" className="block text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors">
                Write a Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

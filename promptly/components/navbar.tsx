"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Promptly
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/challenges" className="text-foreground hover:text-primary transition-colors">
            Challenges
          </Link>
          <Link href="/learn" className="text-foreground hover:text-primary transition-colors">
            Learn
          </Link>
          <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
            Profile
          </Link>
          <ModeToggle />
          <Button asChild>
            <Link href="/challenges/today">Today's Challenge</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 border-t">
          <Link
            href="/challenges"
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Challenges
          </Link>
          <Link
            href="/learn"
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Learn
          </Link>
          <Link
            href="/profile"
            className="block py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Button asChild className="w-full">
            <Link href="/challenges/today" onClick={() => setIsMenuOpen(false)}>
              Today's Challenge
            </Link>
          </Button>
        </div>
      )}
    </header>
  )
}


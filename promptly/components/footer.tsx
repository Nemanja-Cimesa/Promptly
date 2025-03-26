import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Promptly
            </Link>
            <p className="text-sm text-muted-foreground mt-1">Master the Art of Prompting – One Challenge at a Time.</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <Link href="/challenges" className="text-foreground hover:text-primary transition-colors">
              Challenges
            </Link>
            <Link href="/learn" className="text-foreground hover:text-primary transition-colors">
              Learn
            </Link>
            <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
              Profile
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Promptly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
          <Sparkles className="mr-1 h-4 w-4" />
          <span>Master the art of AI prompting</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Master the Art of Prompting
          </span>
          <br />
          <span className="text-text-dark dark:text-foreground">One Challenge at a Time</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Improve your AI prompting skills through daily challenges designed around real-world scenarios. Write prompts,
          get scored, and level up your abilities through practice.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/challenges/today">
              Try Today's Challenge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/learn">Learn Prompting Basics</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


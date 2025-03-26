import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChallengeList } from "@/components/challenge-list"
import { challenges } from "@/lib/sample-data"

export default function ChallengesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Challenges</h1>
        <p className="text-muted-foreground mb-8">Browse all available challenges to practice your prompting skills.</p>

        <ChallengeList challenges={challenges} />
      </main>
      <Footer />
    </div>
  )
}


import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChallengeInterface } from "@/components/challenge-interface"
import { dailyChallenge } from "@/lib/sample-data"

export default function TodayChallengePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Today's Challenge</h1>
        <p className="text-muted-foreground mb-8">
          Complete today's challenge to improve your prompting skills and earn points.
        </p>

        <ChallengeInterface challenge={dailyChallenge} />
      </main>
      <Footer />
    </div>
  )
}


import { Calendar, PenTool, BarChart4, Lightbulb, Trophy, Zap } from "lucide-react"

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Daily Challenges",
    description:
      "Engaging, real-world scenarios each day that prompt you to write AI instructions tailored to specific tasks.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Prompt Writing Interface",
    description:
      "A focused, distraction-free text area where you can draft and submit your AI prompts in response to each challenge.",
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-primary" />,
    title: "AI-Powered Scoring & Feedback",
    description:
      "Get your prompts evaluated with a score (1–10) along with concise feedback on clarity, specificity, and effectiveness.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Educational Guidance",
    description:
      "Each task is designed to teach prompt-writing best practices through hands-on learning and iterative improvement.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Gamified Experience",
    description: "Progress bars, scores, and challenge streaks motivate you to keep improving and return daily.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Skill Building",
    description:
      "Develop transferable skills that improve your interactions with AI tools across various platforms and use cases.",
  },
]

export function FeatureSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to improve your AI prompting skills through practice, feedback, and play.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


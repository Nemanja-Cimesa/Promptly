import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

const tips = [
  "Be specific about the format you want the output in.",
  "Include examples when possible to guide the AI.",
  "Break complex tasks into smaller, clearer steps.",
  "Specify the tone, style, or persona you want the AI to adopt.",
  "Include constraints and limitations to narrow the focus.",
  "Ask for multiple options when you're not sure what you want.",
  "Use clear, concise language and avoid ambiguity.",
  "Provide context about why you need the information.",
]

export function TipCard() {
  // Get a random tip
  const randomTip = tips[Math.floor(Math.random() * tips.length)]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-secondary" />
          Prompting Tip
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{randomTip}</p>
      </CardContent>
    </Card>
  )
}


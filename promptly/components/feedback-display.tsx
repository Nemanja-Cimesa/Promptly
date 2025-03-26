import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle } from "lucide-react"

interface FeedbackDisplayProps {
  feedback: {
    score: number
    strengths: string[]
    improvements: string[]
    suggestion: string
  }
  attempts: number
}

export function FeedbackDisplay({ feedback, attempts }: FeedbackDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 9) return "text-green-500"
    if (score >= 7) return "text-blue-500"
    if (score >= 5) return "text-amber-500"
    return "text-red-500"
  }

  const getScoreText = (score: number) => {
    if (score >= 9) return "Excellent"
    if (score >= 7) return "Good"
    if (score >= 5) return "Average"
    return "Needs Improvement"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Feedback</span>
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${getScoreColor(feedback.score)}`}>{feedback.score}/10</span>
            <span className="ml-2 text-sm text-muted-foreground">({getScoreText(feedback.score)})</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium flex items-center text-green-600 mb-2">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Strengths
            </h3>
            <ul className="list-disc pl-10 space-y-1">
              {feedback.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium flex items-center text-amber-600 mb-2">
              <AlertCircle className="mr-2 h-5 w-5" />
              Areas for Improvement
            </h3>
            <ul className="list-disc pl-10 space-y-1">
              {feedback.improvements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-md mt-4">
            <h3 className="font-medium mb-2">Suggestion for Next Attempt:</h3>
            <p>{feedback.suggestion}</p>
          </div>

          <div className="text-sm text-muted-foreground">
            Attempt {attempts} • Keep practicing to improve your score!
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


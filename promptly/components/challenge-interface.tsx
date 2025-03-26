"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Send, RefreshCw, Award } from "lucide-react"
import { FeedbackDisplay } from "@/components/feedback-display"
import { TipCard } from "@/components/tip-card"
import type { Challenge } from "@/lib/types"

interface ChallengeInterfaceProps {
  challenge: Challenge
}

export function ChallengeInterface({ challenge }: ChallengeInterfaceProps) {
  const [prompt, setPrompt] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<any | null>(null)
  const [attempts, setAttempts] = useState(0)

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setIsSubmitting(true)

    // Simulate API call for feedback
    setTimeout(() => {
      // This would be replaced with actual API call to evaluate the prompt
      const mockFeedback = {
        score: Math.floor(Math.random() * 5) + 6, // Random score between 6-10
        strengths: ["Good use of specific details", "Clear objective stated", "Appropriate context provided"],
        improvements: ["Consider adding constraints", "Specify the desired output format"],
        suggestion: "Try adding more specific instructions about the exact format you want the output in.",
      }

      setFeedback(mockFeedback)
      setAttempts((prev) => prev + 1)
      setIsSubmitting(false)
    }, 1500)
  }

  const handleTryAgain = () => {
    setFeedback(null)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="outline" className="mb-2">
                  {challenge.category}
                </Badge>
                <CardTitle>{challenge.title}</CardTitle>
                <CardDescription className="mt-2">
                  Difficulty: {challenge.difficulty} • Expected time: {challenge.expectedTime}
                </CardDescription>
              </div>
              <div className="hidden sm:block">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  <Award className="mr-1 h-4 w-4" />
                  {challenge.points} pts
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{challenge.description}</p>
            <div className="bg-muted p-4 rounded-md mb-4">
              <h3 className="font-medium mb-2">Scenario:</h3>
              <p>{challenge.scenario}</p>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-medium mb-2">Your Task:</h3>
              <p>{challenge.task}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Write Your Prompt</CardTitle>
            <CardDescription>Craft a clear, specific prompt that will achieve the task above.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Write your prompt here..."
              className="min-h-[200px] resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isSubmitting || feedback !== null}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">{prompt.length} characters</div>
            {feedback ? (
              <Button onClick={handleTryAgain} variant="outline">
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={!prompt.trim() || isSubmitting}>
                {isSubmitting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Prompt
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>

        {feedback && <FeedbackDisplay feedback={feedback} attempts={attempts} />}
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Daily Streak</span>
                  <span className="font-medium">7 days</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Weekly Challenges</span>
                  <span className="font-medium">4/7 completed</span>
                </div>
                <Progress value={57} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Total Points</span>
                  <span className="font-medium">1,250 pts</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <TipCard />
      </div>
    </div>
  )
}


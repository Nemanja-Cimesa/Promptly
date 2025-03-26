import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, ArrowRight } from "lucide-react"
import type { Challenge } from "@/lib/types"

interface ChallengeListProps {
  challenges: Challenge[]
}

export function ChallengeList({ challenges }: ChallengeListProps) {
  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <Card key={challenge.id}>
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
              <div className="hidden sm:flex items-center space-x-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  <Award className="mr-1 h-4 w-4" />
                  {challenge.points} pts
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {new Date(challenge.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{challenge.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="sm:hidden flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(challenge.date).toLocaleDateString()}
            </div>
            <Button asChild>
              <Link href={`/challenges/${challenge.id}`}>
                Start Challenge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


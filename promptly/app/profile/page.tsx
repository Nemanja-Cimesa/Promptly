import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Star, Award, TrendingUp, Clock } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
            <p className="text-muted-foreground">Track your progress and see your prompting achievements.</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="px-3 py-1 text-lg">
              <Trophy className="mr-1 h-4 w-4 text-secondary" />
              Level 7
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 text-lg">
              <Star className="mr-1 h-4 w-4" />
              1,250 Points
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Best: 14 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                Challenges Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Last: 2 hours ago</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <TrendingUp className="mr-2 h-4 w-4 text-primary" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7.8/10</div>
              <p className="text-xs text-muted-foreground">Last 7 days: 8.2/10</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Level Progress</CardTitle>
                <CardDescription>You need 250 more points to reach Level 8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Level 7</span>
                      <span>Level 8</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>1,000 pts</span>
                      <span>1,500 pts</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Skill Breakdown</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Clarity</span>
                          <span className="font-medium">Advanced</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Specificity</span>
                          <span className="font-medium">Intermediate</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Structure</span>
                          <span className="font-medium">Advanced</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Creativity</span>
                          <span className="font-medium">Intermediate</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your challenge completion over the past 4 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60 w-full">
                  {/* This would be a chart component in a real implementation */}
                  <div className="h-full w-full flex items-center justify-center bg-muted rounded-md">
                    <p className="text-muted-foreground">Activity chart would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Badges and rewards you've earned through your prompting journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-center">First Perfect Score</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">Earned 2 weeks ago</p>
                  </div>

                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                      <Calendar className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-medium text-center">7-Day Streak</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">Earned today</p>
                  </div>

                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-3">
                      <Star className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium text-center">10 Challenges</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">Earned 3 weeks ago</p>
                  </div>

                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-3">
                      <Award className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium text-center">Level 5</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">Earned 1 month ago</p>
                  </div>

                  <div className="flex flex-col items-center p-4 border rounded-md">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-3">
                      <TrendingUp className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium text-center">Improvement King</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">Earned 2 weeks ago</p>
                  </div>

                  <div className="flex flex-col items-center p-4 border rounded-md border-dashed">
                    <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-3">
                      <Clock className="h-8 w-8 text-muted-foreground/50" />
                    </div>
                    <h3 className="font-medium text-center text-muted-foreground">14-Day Streak</h3>
                    <p className="text-xs text-muted-foreground text-center mt-1">In progress (7/14)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Challenges</CardTitle>
                <CardDescription>Your most recently completed challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <h3 className="font-medium">
                          {index === 1
                            ? "Create a Detailed Travel Itinerary"
                            : index === 2
                              ? "Explain a Complex Concept Simply"
                              : index === 3
                                ? "Generate Creative Marketing Copy"
                                : index === 4
                                  ? "Design a User Survey"
                                  : "Create a Data Visualization Prompt"}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {index === 1
                            ? "Completed 2 hours ago"
                            : index === 2
                              ? "Completed yesterday"
                              : index === 3
                                ? "Completed 2 days ago"
                                : index === 4
                                  ? "Completed 3 days ago"
                                  : "Completed 4 days ago"}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Badge variant={index === 1 ? "default" : index === 2 ? "secondary" : "outline"}>
                          {index === 1
                            ? "9/10"
                            : index === 2
                              ? "8/10"
                              : index === 3
                                ? "7/10"
                                : index === 4
                                  ? "8/10"
                                  : "7/10"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}


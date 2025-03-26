import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, BookOpen, CheckCircle, AlertTriangle, Zap, Target } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Learn Prompting</h1>
        <p className="text-muted-foreground mb-8">
          Master the fundamentals of effective prompt writing with these guides and resources.
        </p>

        <Tabs defaultValue="basics" className="space-y-6">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full">
            <TabsTrigger value="basics">Basics</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="pitfalls">Pitfalls</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  Prompting Fundamentals
                </CardTitle>
                <CardDescription>The essential building blocks of effective prompts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">What Makes a Good Prompt?</h3>
                  <p className="text-muted-foreground mb-4">
                    Effective prompts are clear, specific, and provide the right amount of context. They guide the AI
                    toward producing the desired output without being overly restrictive or too vague.
                  </p>

                  <h4 className="font-medium mb-2">Key Elements of Effective Prompts:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Clarity:</strong> Use precise language and avoid ambiguity.
                    </li>
                    <li>
                      <strong>Context:</strong> Provide relevant background information.
                    </li>
                    <li>
                      <strong>Specificity:</strong> Detail exactly what you want.
                    </li>
                    <li>
                      <strong>Structure:</strong> Organize your request logically.
                    </li>
                    <li>
                      <strong>Constraints:</strong> Set boundaries for the response.
                    </li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2">Example Basic Prompt:</h4>
                  <div className="bg-background p-3 rounded border">
                    <p className="font-mono text-sm">
                      Explain the concept of climate change in simple terms that a 10-year-old would understand. Include
                      three main causes and two things people can do to help.
                    </p>
                  </div>
                  <p className="text-sm mt-2">
                    This prompt is effective because it specifies the topic, target audience, and exactly what
                    information should be included.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-primary" />
                  The Prompt Structure Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">A reliable framework for structuring your prompts:</p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">1. Role/Context</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the stage for who the AI should be or what perspective it should take.
                    </p>
                    <p className="text-sm italic mt-1">"As an environmental scientist..."</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">2. Task/Instruction</h4>
                    <p className="text-sm text-muted-foreground">Clearly state what you want the AI to do.</p>
                    <p className="text-sm italic mt-1">"Create a 3-day meal plan that..."</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">3. Details/Parameters</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide specific requirements, constraints, or preferences.
                    </p>
                    <p className="text-sm italic mt-1">
                      "The meals should be vegetarian, under 500 calories each, and use ingredients commonly found in
                      grocery stores."
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">4. Format/Output</h4>
                    <p className="text-sm text-muted-foreground">Specify how you want the information presented.</p>
                    <p className="text-sm italic mt-1">
                      "Present the plan in a table with columns for meal, ingredients, and preparation time."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="techniques" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-primary" />
                  Advanced Prompting Techniques
                </CardTitle>
                <CardDescription>Strategies to enhance your prompt effectiveness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Chain-of-Thought Prompting</h3>
                  <p className="text-muted-foreground mb-2">
                    Guide the AI to break down complex problems into steps, improving reasoning and accuracy.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      Solve this math problem step by step: If a store offers a 25% discount on a $80 item, and then
                      applies a 10% coupon on the discounted price, what is the final price after tax if the tax rate is
                      8%?
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Few-Shot Learning</h3>
                  <p className="text-muted-foreground mb-2">
                    Provide examples of the desired input-output pairs to help the AI understand the pattern.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      Convert these sentences to past tense:
                      <br />
                      Input: "I walk to the store."
                      <br />
                      Output: "I walked to the store."
                      <br />
                      <br />
                      Input: "She sings beautifully."
                      <br />
                      Output: "She sang beautifully."
                      <br />
                      <br />
                      Input: "They build a new house."
                      <br />
                      Output:
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Role Prompting</h3>
                  <p className="text-muted-foreground mb-2">
                    Assign a specific role or persona to the AI to get responses from a particular perspective.
                  </p>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      As an experienced financial advisor, provide advice on how to start investing with $1,000. Include
                      information about different investment options, risk levels, and potential returns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  Example Prompts by Category
                </CardTitle>
                <CardDescription>Study these examples to understand effective prompt patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Content Creation</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      Write a blog post about sustainable gardening practices for urban apartments. The post should be
                      approximately 500 words, include 3 practical tips that require minimal space and sunlight, and use
                      a conversational tone that's encouraging for beginners. Include a compelling introduction that
                      highlights the mental health benefits of indoor plants.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Data Analysis</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      I have sales data for a retail store over the past year. Help me analyze this data to identify
                      trends and insights. Focus on seasonal patterns, top-performing products, and customer behavior.
                      Present your analysis in a structured format with bullet points for key findings and include 2-3
                      actionable recommendations based on the data.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Problem Solving</h3>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      I'm organizing a team-building event for 20 people with diverse interests and physical abilities.
                      The venue is a local park with both indoor and outdoor spaces. The budget is $500, and the event
                      needs to last approximately 3 hours. Suggest 3 different team-building activities that promote
                      collaboration, are inclusive for all participants, and can be adjusted for weather conditions. For
                      each activity, include materials needed, setup time, and how it promotes team bonding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pitfalls" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Common Prompting Mistakes
                </CardTitle>
                <CardDescription>Learn what to avoid when crafting your prompts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Being Too Vague</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-md border border-red-200 dark:border-red-900">
                      <h4 className="font-medium text-red-600 dark:text-red-400 mb-1">❌ Poor Prompt</h4>
                      <p className="font-mono text-sm">Write about climate change.</p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt lacks specificity about the desired content, format, tone, or purpose.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-md border border-green-200 dark:border-green-900">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-1">✅ Improved Prompt</h4>
                      <p className="font-mono text-sm">
                        Write a 300-word explanation of how climate change affects marine ecosystems, focusing on coral
                        reefs. Include three specific examples and use language appropriate for high school students.
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt specifies topic, length, focus, content requirements, and target audience.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Asking Too Much at Once</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-md border border-red-200 dark:border-red-900">
                      <h4 className="font-medium text-red-600 dark:text-red-400 mb-1">❌ Poor Prompt</h4>
                      <p className="font-mono text-sm">
                        Create a comprehensive marketing plan for my new business including target audience analysis,
                        competitor research, social media strategy, content calendar, budget allocation, ROI
                        projections, and implementation timeline. Also include logo design ideas and website mockups.
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt asks for too many complex deliverables at once, leading to shallow treatment of each
                        topic.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-md border border-green-200 dark:border-green-900">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-1">✅ Improved Approach</h4>
                      <p className="font-mono text-sm">
                        I'm creating a marketing plan for my new online bakery business. Let's start with identifying
                        the target audience. Based on selling artisanal bread and pastries at premium prices, who would
                        be my ideal customer demographics and psychographics?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt focuses on one aspect of the marketing plan, allowing for depth before moving to the
                        next component.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Forgetting to Specify Format</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-md border border-red-200 dark:border-red-900">
                      <h4 className="font-medium text-red-600 dark:text-red-400 mb-1">❌ Poor Prompt</h4>
                      <p className="font-mono text-sm">Give me information about healthy breakfast options.</p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt doesn't specify how the information should be organized or presented.
                      </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-md border border-green-200 dark:border-green-900">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-1">✅ Improved Prompt</h4>
                      <p className="font-mono text-sm">
                        Create a table of 5 healthy breakfast options with columns for: meal name, preparation time,
                        calories, key nutrients, and main ingredients. Each option should take less than 15 minutes to
                        prepare.
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        This prompt clearly specifies the desired output format and organization.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                  Advanced Prompting Strategies
                </CardTitle>
                <CardDescription>Take your prompting skills to the next level</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Iterative Prompting</h3>
                  <p className="text-muted-foreground mb-4">
                    Refine your results through a series of prompts that build on previous outputs.
                  </p>

                  <div className="space-y-2">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-mono text-sm">
                        <strong>Initial Prompt:</strong> Write a short story about a detective solving a mystery in a
                        small town.
                      </p>
                    </div>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-mono text-sm">
                        <strong>Follow-up Prompt:</strong> Rewrite the story to add more suspense by including a red
                        herring character and an unexpected twist at the end.
                      </p>
                    </div>

                    <div className="bg-muted p-3 rounded-md">
                      <p className="font-mono text-sm">
                        <strong>Final Refinement:</strong> Now enhance the dialogue between the detective and the
                        suspect in the final scene to reveal the twist more dramatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Persona-Based Prompting</h3>
                  <p className="text-muted-foreground mb-4">
                    Create detailed personas to get more nuanced and targeted responses.
                  </p>

                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      You are an experienced UX designer with 10+ years of experience in e-commerce platforms who
                      specializes in optimizing checkout processes to reduce cart abandonment. You have a data-driven
                      approach but also value qualitative user feedback. Review the following checkout flow and provide
                      3-5 specific recommendations to improve conversion rates. For each recommendation, include: the
                      issue identified, the proposed solution, the expected impact, and how to measure success.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Constraint-Based Prompting</h3>
                  <p className="text-muted-foreground mb-4">
                    Set specific constraints to guide the AI toward more creative or focused solutions.
                  </p>

                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-mono text-sm">
                      Generate 5 unique marketing campaign ideas for a sustainable clothing brand with the following
                      constraints: 1. Each campaign must use zero-budget guerrilla marketing tactics 2. Each idea must
                      involve customer participation or user-generated content 3. No campaign should require more than 2
                      weeks to implement 4. Each campaign must align with at least one UN Sustainable Development Goal
                      5. All campaigns should be measurable with specific KPIs
                    </p>
                  </div>
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


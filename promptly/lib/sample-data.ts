import type { Challenge } from "./types"

export const dailyChallenge: Challenge = {
  id: "challenge-1",
  title: "Create a Detailed Travel Itinerary",
  category: "Content Creation",
  difficulty: "Intermediate",
  points: 150,
  expectedTime: "5-10 minutes",
  description:
    "In this challenge, you'll craft a prompt that generates a detailed travel itinerary for a specific destination.",
  scenario:
    "You're planning a trip to a destination you've always wanted to visit, but you're short on time to research all the details. You want to use an AI assistant to help you create a comprehensive day-by-day itinerary that includes attractions, dining recommendations, and practical tips.",
  task: "Write a prompt that will generate a detailed 3-day travel itinerary. Your prompt should specify the destination, your interests, any constraints (budget, accessibility needs, etc.), and the type of information you want included in each day's plan.",
  date: "2023-05-15",
}

export const challenges: Challenge[] = [
  dailyChallenge,
  {
    id: "challenge-2",
    title: "Explain a Complex Concept Simply",
    category: "Education",
    difficulty: "Beginner",
    points: 100,
    expectedTime: "3-5 minutes",
    description:
      "Create a prompt that asks an AI to explain a complex concept in simple terms for a specific audience.",
    scenario:
      "You need to explain a complex scientific or technical concept to someone with no background in the field, such as a child or a non-specialist adult.",
    task: "Write a prompt that will generate an explanation of a complex concept (like quantum computing, climate change, or blockchain) in simple, accessible language. Specify your target audience and any analogies or visual examples you'd like included.",
    date: "2023-05-16",
  },
  {
    id: "challenge-3",
    title: "Generate Creative Marketing Copy",
    category: "Marketing",
    difficulty: "Advanced",
    points: 200,
    expectedTime: "10-15 minutes",
    description:
      "Craft a prompt that produces compelling marketing copy for a product or service that highlights its unique selling points and appeals to the target audience.",
    scenario:
      "You're a marketing specialist tasked with creating compelling copy for a new product launch. You need to highlight the product's features and benefits in a way that resonates with potential customers.",
    task: "Write a prompt that will generate marketing copy for a specific product or service. Include details about the product, target audience, brand voice, desired length, and any specific calls to action you want to include.",
    date: "2023-05-17",
  },
]


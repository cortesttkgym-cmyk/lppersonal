'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a personalized strategy outline.
 *
 * - generatePersonalizedStrategyOutline - A function that handles the generation of a personalized strategy outline.
 * - GeneratePersonalizedStrategyOutlineInput - The input type for the generatePersonalizedStrategyOutline function.
 * - GeneratePersonalizedStrategyOutlineOutput - The return type for the generatePersonalizedStrategyOutline function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePersonalizedStrategyOutlineInputSchema = z.object({
  fitnessGoals: z.string().describe('The user\'s primary fitness goals (e.g., lose weight, gain muscle, improve endurance).'),
  currentRoutine: z.string().describe('A description of the user\'s current exercise routine and activity level.'),
  dietaryPreferences: z.string().describe('The user\'s dietary preferences, restrictions, and eating habits.'),
});
export type GeneratePersonalizedStrategyOutlineInput = z.infer<typeof GeneratePersonalizedStrategyOutlineInputSchema>;

const GeneratePersonalizedStrategyOutlineOutputSchema = z.object({
  profileSummary: z.string().describe('A summary of the client\'s profile based on their goals, routine, and preferences.'),
  trainingRecommendations: z.array(z.string()).describe('Key training recommendations as bullet points.'),
  dietaryRecommendations: z.array(z.string()).describe('Key dietary recommendations as bullet points.'),
  motivationalMessage: z.string().describe('A concluding motivational message that encourages the client to take the next step.'),
});
export type GeneratePersonalizedStrategyOutlineOutput = z.infer<typeof GeneratePersonalizedStrategyOutlineOutputSchema>;

export async function generatePersonalizedStrategyOutline(input: GeneratePersonalizedStrategyOutlineInput): Promise<GeneratePersonalizedStrategyOutlineOutput> {
  return generatePersonalizedStrategyOutlineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStrategyOutlinePrompt',
  input: { schema: GeneratePersonalizedStrategyOutlineInputSchema },
  output: { schema: GeneratePersonalizedStrategyOutlineOutputSchema },
  prompt: `You are Robert Kirchmair, a highly experienced and results-driven personal trainer and body transformation specialist. Your task is to craft a compelling, high-level personalized strategy outline for a potential client. This outline should showcase your expertise and the personalized approach of your consultation, motivating them to enroll.\n\nHere is the client's information:\nFitness Goals: {{{fitnessGoals}}}\nCurrent Routine: {{{currentRoutine}}}\nDietary Preferences: {{{dietaryPreferences}}}\n\nBased on this information, provide a strategic outline using the following structure:\n\n1.  **Profile Summary**: A professional and empathetic summary of the client's current fitness situation, their aspirations, and the unique challenges or considerations derived from their input.\n2.  **Key Training Recommendations**: A concise list of 3-5 strategic training recommendations. These should highlight the principles you would apply, focusing on effectiveness, personalization, and long-term progress (e.g., "Implement progressive overload", "Integrate targeted mobility work", "Structure workouts for optimal recovery"). Avoid overly specific exercises.\n3.  **Key Dietary Recommendations**: A concise list of 3-5 strategic dietary recommendations. These should focus on sustainable habits, goal alignment, and personalized adjustments (e.g., "Prioritize protein intake", "Optimize nutrient timing", "Focus on whole, unprocessed foods"). Avoid giving a meal plan.\n4.  **Motivational Message**: A powerful and encouraging closing statement that emphasizes the benefits of a structured, expert-guided plan (your consultation) and encourages them to take the next step towards their transformation.\n\nEnsure the output strictly adheres to the JSON schema provided, with lists formatted as arrays of strings.`,
});

const generatePersonalizedStrategyOutlineFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedStrategyOutlineFlow',
    inputSchema: GeneratePersonalizedStrategyOutlineInputSchema,
    outputSchema: GeneratePersonalizedStrategyOutlineOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

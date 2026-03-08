'use server';
/**
 * @fileOverview A Genkit flow for generating a personalized Digital Strategy Roadmap.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TechStrategyInputSchema = z.object({
  businessType: z.string().describe('Type of business (e.g., Retail, Clinic, Office).'),
  currentProblems: z.string().describe('Current tech issues reported by the user.'),
  digitalStatus: z.object({
    hasWebsite: z.boolean(),
    hasStaffTraining: z.boolean(),
    isConcernedAboutSecurity: z.boolean(),
  }),
});
export type TechStrategyInput = z.infer<typeof TechStrategyInputSchema>;

const TechStrategyOutputSchema = z.object({
  riskLevel: z.enum(['Low', 'Medium', 'High']).describe('The calculated risk level based on input.'),
  topPriorities: z.array(z.string()).describe('Top 3 things the business needs to fix first.'),
  suggestedSolutions: z.array(z.object({
    service: z.string(),
    reason: z.string(),
  })).describe('Specific Vynsec services recommended.'),
  simpleAdvice: z.string().describe('One simple piece of advice for the business owner.'),
});
export type TechStrategyOutput = z.infer<typeof TechStrategyOutputSchema>;

export async function generateTechStrategy(
  input: TechStrategyInput
): Promise<TechStrategyOutput> {
  return generateTechStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTechStrategyPrompt',
  input: {schema: TechStrategyInputSchema},
  output: {schema: TechStrategyOutputSchema},
  prompt: `You are a friendly IT Advisor from Vynsec Creations. Help a small business owner understand their tech needs.
Use very simple, non-tech language. 

Business Profile:
Type: {{{businessType}}}
Current Issues: {{{currentProblems}}}
Status: Website? {{digitalStatus.hasWebsite}}, Staff Training? {{digitalStatus.hasStaffTraining}}, Security Concern? {{digitalStatus.isConcernedAboutSecurity}}

Based on this, generate a simple "Digital Strategy Roadmap". 
Suggest services from: Cyber Security & VAPT, Cyber Safety Training, Web & App Development (PWA/SaaS/ERP), IT Management, Cloud Solutions.`,
});

const generateTechStrategyFlow = ai.defineFlow(
  {
    name: 'generateTechStrategyFlow',
    inputSchema: TechStrategyInputSchema,
    outputSchema: TechStrategyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate roadmap.');
    }
    return output;
  }
);

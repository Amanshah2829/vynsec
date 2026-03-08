
'use server';
/**
 * @fileOverview A Genkit flow for generating a custom IT solution brief based on client challenges.
 *
 * - generateCustomSolutionBrief - A function that handles the generation of the solution brief.
 * - GenerateCustomSolutionBriefInput - The input type for the generateCustomSolutionBrief function.
 * - GenerateCustomSolutionBriefOutput - The return type for the generateCustomSolutionBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomSolutionBriefInputSchema = z.object({
  itChallenges: z
    .string()
    .describe(
      'A natural language description of the client\'s IT challenges and needs.'
    ),
});
export type GenerateCustomSolutionBriefInput = z.infer<
  typeof GenerateCustomSolutionBriefInputSchema
>;

const GenerateCustomSolutionBriefOutputSchema = z.object({
  solutionTitle: z.string().describe('A simple title for the proposed solution.'),
  solutionOverview: z
    .string()
    .describe('A clear, simple overview of how we will help.'),
  vynsecServices: z
    .array(z.string())
    .describe(
      'An array of Vynsec Creations services. Select from: Cyber Security & VAPT, Security Audits, Incident Response, Endpoint Protection, Network Assessment, Cyber Safety Training, Web & App Development, IT Management, Cloud Solutions, Office Networking.'
    ),
  vynsecExpertise: z
    .array(z.string())
    .describe(
      'An array of Vynsec expertise areas. Select from: Security Auditing, Breach Response, Malware Defense, Network Optimization, PWA Development, SaaS App Building, ERP/CMS Customization, IT Support, Secure Network Setup, Employee Safety Training.'
    ),
  keyBenefits: z
    .array(z.string())
    .describe(
      'An array of simple benefits the client will get.'
    ),
  nextSteps: z
    .string()
    .describe('Simple next steps to start working with us.'),
});
export type GenerateCustomSolutionBriefOutput = z.infer<
  typeof GenerateCustomSolutionBriefOutputSchema
>;

export async function generateCustomSolutionBrief(
  input: GenerateCustomSolutionBriefInput
): Promise<GenerateCustomSolutionBriefOutput> {
  return generateCustomSolutionBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCustomSolutionBriefPrompt',
  input: {schema: GenerateCustomSolutionBriefInputSchema},
  output: {schema: GenerateCustomSolutionBriefOutputSchema},
  prompt: `You are an expert IT consultant for Vynsec Creations. Your goal is to help businesses with their IT and Security needs. 

Here are Vynsec Creations' specialized services:
- Cyber Security & VAPT: Testing systems for hacks and fixing them.
- Security Audits: Comprehensive review of policies and digital safety.
- Incident Response: 24/7 emergency response to cyber attacks.
- Endpoint Protection: Securing all devices from malware/ransomware.
- Network Assessment: Performance and security review of networks.
- Cyber Safety Training: Teaching employees how to stay safe online.
- Web & App Development: Custom PWA, SaaS, and ERP/CMS solutions.
- IT Management & Maintenance: 24/7 help desk and hardware support.
- Cloud Solutions: Business email and secure cloud storage.
- Office Networking: Fast and safe office connectivity.

Client's Problem: {{{itChallenges}}}

Based on the client's problem, suggest a tailored solution brief. Ensure that the 'vynsecServices' and 'vynsecExpertise' fields only contain items from the specialized lists above. Keep the language professional yet clear.`,
});

const generateCustomSolutionBriefFlow = ai.defineFlow(
  {
    name: 'generateCustomSolutionBriefFlow',
    inputSchema: GenerateCustomSolutionBriefInputSchema,
    outputSchema: GenerateCustomSolutionBriefOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate solution brief.');
    }
    return output;
  }
);

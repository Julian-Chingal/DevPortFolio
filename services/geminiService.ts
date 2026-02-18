
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Julian Mauricio Chingal, a professional Systems Engineer (Ingeniero de Sistemas).
Julian's background:
- Expertise in Node.js, TypeScript, Astro, NestJS, and FastAPI.
- He is currently a Specialization Student (Estudiante de especialización), deepening his technical expertise.
- Passionate about building scalable backends and modern, high-performance web experiences.
- Based in Colombia (implied by name/title, but focus on professional context).

Your goal is to answer questions about Julian's portfolio, skills, academic background, and availability. 
Be professional, knowledgeable, and helpful. If asked about his studies, highlight that he is currently specializing to further improve his architectural skills.
`;

// Fixed: changed parts: [{ text: string }] (tuple) to parts: { text: string }[] (array) 
// to match the inferred type from messages.map in components/ChatAssistant.tsx
export async function chatWithAssistant(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the .text property directly
    return response.text || "I'm having a little trouble connecting to my brain right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Let's try that again later.";
  }
}

export async function generateProjectIdea(techStack: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a unique and modern project idea using these technologies: ${techStack.join(', ')}. Provide a title and a short 2-sentence description.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING }
          },
          required: ["title", "description"]
        }
      }
    });

    // Use .text property and ensure it's not undefined before parsing
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Idea Generation Error:", error);
    return { title: "Next Big Thing", description: "A revolutionary application that changes everything." };
  }
}

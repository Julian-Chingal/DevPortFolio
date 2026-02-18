
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual de Julian Mauricio Chingal, un Ingeniero de Sistemas altamente capacitado.
Información de Julian:
- Correo: mauriciochingal16@gmail.com
- LinkedIn: https://www.linkedin.com/in/julian-chingal/
- Stack Tecnológico: Node.js, TypeScript, Astro, NestJS, FastAPI.
- Expertise en Datos: Analítica de Datos, Power BI, Power Automate.
- Educación: Ingeniero de Sistemas y actual Estudiante de Especialización.
- Idioma: Español e Inglés.

Tu objetivo es responder dudas sobre su experiencia, proyectos y disponibilidad. 
Destaca que Julian combina el desarrollo de software robusto con la inteligencia de negocios y automatización.
Sé profesional, cordial y directo. Si preguntan por contacto, proporciona su correo mauriciochingal16@gmail.com.
`;

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

    return response.text || "Hola, parece que hubo un pequeño error. ¿Podrías intentar de nuevo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, Julian está fuera de línea en este momento. Escríbele a mauriciochingal16@gmail.com";
  }
}

export async function generateProjectIdea(techStack: string[]) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Genera una idea de proyecto que combine desarrollo web y analítica de datos usando: ${techStack.join(', ')}. Dame un título y una descripción corta.`,
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

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Idea Generation Error:", error);
    return { title: "Data-Driven App", description: "Una solución que utiliza analítica avanzada para optimizar el backend." };
  }
}

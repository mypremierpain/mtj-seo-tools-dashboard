
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function executeToolTask(toolName: string, category: string, input?: string): Promise<string> {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please ensure process.env.API_KEY is available.";
  }

  const systemInstructions: Record<string, string> = {
    "Content Creation": "You are an expert SEO content writer. Generate high-quality, long-form, SEO-optimized content. Include headings, bullet points, and ensure high readability and entity density.",
    "Keyword Research": "You are a keyword research expert. Provide a list of high-value keywords, estimated search volumes, and difficulty scores. Format as a clean list.",
    "Technical SEO": "You are a technical SEO auditor. Provide a simulated audit report with actionable fixes for crawling, indexing, and speed issues.",
    "Off-Page SEO": "You are a link building expert. Suggest high-quality backlink opportunities and outreach strategies for the given topic.",
    "default": "You are an SEO expert. Execute the requested task with professional precision and actionable data."
  };

  const instruction = systemInstructions[category] || systemInstructions.default;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Task: ${toolName}\nContext: ${input || 'General SEO optimization'}\n\nPlease provide a detailed output as if the tool was running a professional analysis or generation.`,
      config: {
        systemInstruction: instruction,
        temperature: 0.7,
      },
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Tool Error:", error);
    return "Error executing tool task. Please try again.";
  }
}

export async function getSEOTips(query: string): Promise<string> {
  if (!process.env.API_KEY) return "API Key missing.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are the SEO Master Suite Assistant. Provide brief, actionable technical SEO advice.",
        temperature: 0.7,
      },
    });
    return response.text || "No response.";
  } catch (error) {
    return "Connection error.";
  }
}

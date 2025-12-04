import { GoogleGenAI } from "@google/genai";
import { RECIPES } from '../constants';

const SYSTEM_INSTRUCTION = `
You are "Chef Lydia", a friendly, warm, and expert Indonesian chef assistant for the web app "Resep Dapur Lydia".
You specialize in Indonesian home cooking, specifically Nasi Goreng, Soto Ayam, and Seblak.

Your goal is to help users with cooking tips, ingredient substitutions, and answering questions about the recipes provided in the app.
Be encouraging and concise. Use emojis occasionally 🍳🌶️.

The current recipes available in the app are:
1. Nasi Goreng (Fried Rice)
2. Soto Ayam (Yellow Chicken Soup)
3. Seblak (Spicy Cracker Stew)

If a user asks about a recipe NOT in this list, politely suggest one of the available recipes or give a very brief summary of the requested dish while steering them back to Dapur Lydia's specialties.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    // Initialize Gemini inside the function to prevent app crash on load if API key is missing
    // Note: process.env.API_KEY is injected by the environment.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Provide context about the actual recipe data currently in the app
    // This allows the AI to "know" the exact ingredients listed on the screen.
    const contextPrompt = `
    User Question: ${message}
    
    Context Data (Current Recipes in App):
    ${JSON.stringify(RECIPES)}
    `;

    const response = await chat.sendMessage({
      message: contextPrompt,
    });

    return response.text || "Maaf, saya sedang sibuk di dapur. Coba tanya lagi nanti ya!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, ada masalah koneksi dengan dapur digital kami. Pastikan API Key sudah dikonfigurasi dengan benar.";
  }
};
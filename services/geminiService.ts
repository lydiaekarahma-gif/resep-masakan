import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from "../types";

// Note: In a real production app, handle API keys securely.
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipeWithGemini = async (prompt: string): Promise<Recipe> => {
  try {
    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `Create a detailed cooking recipe based on this request: "${prompt}". 
      Ensure the recipe is authentic, tasty, and formatted strictly as JSON.
      The language MUST be Indonesian (Bahasa Indonesia).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING, description: "A unique random string ID" },
            title: { type: Type.STRING, description: "The name of the dish" },
            description: { type: Type.STRING, description: "A short appetizing description (1 sentence)" },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of ingredients with quantities"
            },
            instructions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Step by step cooking instructions"
            },
            cookingTime: { type: Type.STRING, description: "Estimated cooking time e.g., '30 Menit'" },
            difficulty: { type: Type.STRING, enum: ["Mudah", "Sedang", "Sulit"] }
          },
          required: ["id", "title", "description", "ingredients", "instructions", "cookingTime", "difficulty"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const recipeData = JSON.parse(text);
    
    // Add a random image placeholder based on title keywords or generic food
    return {
      ...recipeData,
      imageUrl: `https://picsum.photos/seed/${recipeData.id}/800/600`
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Gagal membuat resep. Silakan coba lagi.");
  }
};
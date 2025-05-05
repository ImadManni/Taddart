import axios from "axios";
import Constants from "expo-constants";

// Get from app.json -> extra
const API_KEY = Constants.expoConfig?.extra?.TADDART;

const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

export const askGemini = async (question: string): Promise<string> => {
  if (!API_KEY) {
    console.error("Gemini API Key is missing. Check your app.json 'extra' config.");
    return "API key is missing. Please configure it properly.";
  }

  try {
    const response = await axios.post(
      BASE_URL,
      {
        contents: [
          {
            parts: [{ text: question }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const candidates = response.data.candidates;

    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content.parts;
      if (parts && parts.length > 0) {
        return parts[0].text;
      }
    }

    return "No valid response from Gemini AI.";
  } catch (error: any) {
    console.error("Error asking Gemini AI:", error?.response?.data || error.message);
    return "Error communicating with Gemini AI.";
  }
};

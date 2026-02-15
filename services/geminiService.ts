
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getDentalAdvice = async (userPrompt: string) => {
  if (!API_KEY) {
    throw new Error("API Key não configurada");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Você é um assistente virtual gentil e profissional da Dra. Tainá Monteiro. Seu objetivo é responder dúvidas básicas sobre procedimentos odontológicos (Clareamento, Lentes de Contato, Endodontia, Limpeza). Seja sempre encorajador, recomende agendar uma consulta para avaliação precisa e fale em português do Brasil com um tom acolhedor e premium. Mantenha as respostas curtas (máximo 100 palavras).",
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "Desculpe, tive um problema técnico. Por favor, entre em contato diretamente pelo WhatsApp para agendar sua consulta!";
  }
};

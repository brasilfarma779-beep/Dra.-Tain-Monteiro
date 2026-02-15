
import { GoogleGenAI } from "@google/genai";

// Tenta obter a chave de forma segura
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getDentalAdvice = async (userPrompt: string) => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("API Key não configurada. O assistente virtual não funcionará.");
    return "Olá! No momento estou em manutenção, mas você pode falar diretamente com nossa equipe pelo WhatsApp clicando no botão verde abaixo!";
  }

  const ai = new GoogleGenAI({ apiKey });
  
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

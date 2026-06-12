import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { vectorSearch } from "./vectorSearch.service.js";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const ragChat = async (question, language = "en") => {
  const relevantSchemes = await vectorSearch(question);

  const context = relevantSchemes.map(s =>
    `Scheme: ${s.schemeName}
     Description: ${s.detailedDescription_md}
     Eligibility: ${s.eligibilityDescription_md}`
  ).join("\n\n");

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Based ONLY on the following government schemes:

  ${context}

  Answer the user question:
  ${question}

  Respond in ${language === "hi" ? "Hindi" : "English"}.
  Also list the most relevant scheme names at the end.
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return {
    answer: response.text(),
    schemes: relevantSchemes
  };
};
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function getCareerAdvice(interests: string[], skills: string[]) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `As a professional career counselor, provide advice for a student with the following interests: ${interests.join(", ")} and skills: ${skills.join(", ")}.
  Suggest 3 potential career paths and explain why they match. Provide a short roadmap for each.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error getting career advice:", error);
    return "I'm sorry, I couldn't generate career advice at this moment. Please try again later.";
  }
}

export async function getResourceRecommendations(careerPath: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Suggest 5 high-quality learning resources (articles, courses, or videos) for someone interested in becoming a ${careerPath}.
  Format the output as a JSON array of objects with 'title', 'type', and 'description' fields.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return JSON.parse(response.text() || "[]");
  } catch (error) {
    console.error("Error getting resource recommendations:", error);
    return [];
  }
}

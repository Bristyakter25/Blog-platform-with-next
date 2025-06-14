import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Load API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is missing" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to get AI response" }, { status: 500 });
  }
}



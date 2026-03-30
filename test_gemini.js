import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyAaosbPKTFux9Od8pYzoJbDeRdGhiJXNKQ";
const genAI = new GoogleGenerativeAI(API_KEY);
async function test() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("hello");
        console.log("SUCCESS:", result.response.text());
    } catch(e) {
        console.error("ERROR:", e.message);
    }
}
test();

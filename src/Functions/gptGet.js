
import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI("AIzaSyCK1vOUJkwgqv_dLlSyE0HQxHQWlc-Q8T4");

// const configuration = new Configuration({
//   organization: process.env.REACT_APP_OPENAI_ORG_KEY,
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
// });
const openai = new OpenAI({
	organization: import.meta.env.VITE_OPENAI_ORG_KEY,
	apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true,
});

const gptGetChat = async (prompt) => {
	// const parameter = {
	// 	messages: [{ role: "user", content: prompt }],
	// 	model: "gpt-3.5-turbo-16k-0613",
	// };
	const response = await openai.chat.completions.create({
		messages: [{ role: "user", content: prompt }],
		model: "gpt-3.5-turbo-16k-0613",
	});
	console.log(response);
	return response.choices[0].message.content;
};

const getGptImage = async (prompt) => {
	const parameter = {
		prompt: prompt,
		size: "512x512",
		quality: "standard",
		model: "dall-e-2",
	};
	const response = await openai.images.generate(parameter).catch(() => {
		return null;
	});
	// console.log(response);
	if (response != null) {
		return response.data.data[0].url;
	}
};

export async function run(prompt) {
	// For text-only input, use the gemini-pro model
	const model = genAi.getGenerativeModel({ model: "gemini-pro" });

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	console.log(text);
	return text;
}

export { gptGetChat, getGptImage };

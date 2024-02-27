import { OpenAI } from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_AI_KEY);

// const configuration = new Configuration({
//   organization: process.env.REACT_APP_OPENAI_ORG_KEY,
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
// });
const openai = new OpenAI({
	organization: import.meta.env.VITE_OPENAI_ORG_KEY,
	apiKey: import.meta.env.VITE_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

const gptGetChat = async (prompt) => {
	// const parameter = {
	// 	messages: [{ role: "user", content: prompt }],
	// 	model: "gpt-3.5-turbo-16k-0613",
	// };
	try {
		const response = await openai.chat.completions.create({
			messages: [{ role: "user", content: prompt }],
			model: "gpt-3.5-turbo-16k-0613",
		});
		console.log(response);
		return response.choices[0].message.content;
	} catch (error) {
		return "Hello there, I cannot provide a response at this time, this might be due to a connectivity issue or an edgy prompt💀";
	}
};

export async function run(prompt) {
	// For text-only input, use the gemini-pro model
	const model = genAi.getGenerativeModel({ model: "gemini-pro" });
	try {
		const result = await model.generateContent(prompt);
		const response = await result.response;
		const text = response.text();
		console.log(text);
		return text;
	} catch (error) {
		console.error(error);
		return "Hello there, I cannot provide a response at this time, this might be due to a connectivity issue or an edgy prompt💀";
	}
}

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

	if (response != null) {
		return response.data.data[0].url;
	}
};

export { gptGetChat, getGptImage };

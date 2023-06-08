export const arrayItems = [
  {
    name: "ChatTF7 chatbot",
    id: "q&a",
    description: "Chat bot useful for answering questions and writing.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "CodeBot",
    id: "explainCode",
    description: "Similar to Davinci Text but for code.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: `Image Generator with DALL·E`,
    id: "jstopy",
    description: "OpenAI image generation using DALL·E",
    option: {
      image: true,
    },
  },
];

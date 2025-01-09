import OpenAI from "openai"

const deepseek = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY
})

export default deepseek
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_AI_KEY
})

export async function POST(reqest) {
    try {
        const { message } = await reqest.json();

        const completions = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: message }]
        })
    } catch (error) {

    }
}
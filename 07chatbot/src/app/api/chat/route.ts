import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        console.log(message);

        const completions = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: 'user', content: message }]
        })
        console.log(completions)
        return NextResponse.json({
            response: completions.choices[0].message.content
        })
    } catch (error) {
        return NextResponse.json({
            error: "Failed to get request"
        }, { status: 500 })
    }
}
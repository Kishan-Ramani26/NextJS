import { z } from "zod";

export const messageSchema = z.object({
    content: z.string().min(10,{message:"Message must be at least 10 characters"}),
})
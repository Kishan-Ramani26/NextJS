import { z } from "zod";

export const acceptMessageSchema = z.object({
    isAccepted: z.boolean().default(true),
})
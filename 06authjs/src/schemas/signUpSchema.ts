import { z } from "zod";

// This file defines validation schemas using Zod for user sign-up and username validation.

export const usernameValidation =
    z.string()
    .min(2, "Username must be at least 2 characters long")
    .max(30, "Username must be less than 30 characters long")
    .regex(/^[a-zA-Z0-9]+$/, "Username must contain only letters and numbers");

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6, {message:"Password must be at least 6 characters long"}),
})

// Zod is a TypeScript-first schema declaration and validation library.
// It allows you to define schemas for your data and validate objects at runtime,
// providing helpful error messages and strong type inference.

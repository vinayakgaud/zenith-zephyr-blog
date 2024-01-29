import { z } from "zod";

export const inputValidate = z.object({
  fullName: z.string().min(1),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .refine(
      (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
          password
        ),
      "Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character. Minimum length is 8 characters."
    ),
});

export const loginInputValidate = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .refine(
      (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(
          password
        ),
      "Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character. Minimum length is 8 characters."
    ),
});

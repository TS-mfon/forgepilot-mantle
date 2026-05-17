import { z } from "zod";

const envSchema = z.object({
  API_PORT: z.coerce.number().default(4010),
  POSTGRES_HOST: z.string().default("127.0.0.1"),
  POSTGRES_PORT: z.coerce.number().default(5432),
  POSTGRES_DB: z.string().default("forgepilot_mantle"),
  POSTGRES_USER: z.string().default("forgepilot_mantle"),
  POSTGRES_PASSWORD: z.string().default("change-me"),
  NODE_ENV: z.string().default("development")
});

export const env = envSchema.parse(process.env);

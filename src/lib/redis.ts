import { Redis } from "@upstash/redis";

// Supports both Vercel KV env var names and Upstash marketplace prefix (storage_KV_...)
export const redis = new Redis({
  url:
    process.env.KV_REST_API_URL ??
    process.env.storage_KV_REST_API_URL ??
    "",
  token:
    process.env.KV_REST_API_TOKEN ??
    process.env.storage_KV_REST_API_TOKEN ??
    "",
});

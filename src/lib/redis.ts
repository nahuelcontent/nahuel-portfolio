import { Redis } from "@upstash/redis";

// Supports KV_*, STORAGE_KV_* (Upstash marketplace prefix), and storage_KV_* variants
export const redis = new Redis({
  url:
    process.env.KV_REST_API_URL ??
    process.env.STORAGE_KV_REST_API_URL ??
    process.env.storage_KV_REST_API_URL ??
    "",
  token:
    process.env.KV_REST_API_TOKEN ??
    process.env.STORAGE_KV_REST_API_TOKEN ??
    process.env.storage_KV_REST_API_TOKEN ??
    "",
});

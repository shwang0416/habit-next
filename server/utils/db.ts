import { drizzle } from "drizzle-orm/d1";
import { env } from "process";

export function useDB() {
    return drizzle(env.DB)
}
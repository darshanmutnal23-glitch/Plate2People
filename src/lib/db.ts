import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { partners } from "./schema";

if (!process.env.DATABASE_URL) {
  console.warn(
    "DATABASE_URL is not set. Form submissions will fail until you add it."
  );
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema: { partners } });

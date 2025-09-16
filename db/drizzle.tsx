import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema,
  casing: "snake_case",
  // logger: true,
});

export { db }
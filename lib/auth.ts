import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle"; // your drizzle instance
import { authSchema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { sendEmail } from "./email";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite",
    schema: authSchema,
  }),
  emailAndPassword: {
    enabled: true,    
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ( { user, url }) => {
      await sendEmail({
        to: 'cdm4n8@gmail.com', // TODO : change to [user.email] later
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  logger: {
    disabled: false,
    level: "debug",
    log: (level, message, ...args) => {
			console.log(`[${level}] ${message}`, ...args);
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      authorized: {
        type: "boolean",
        required: true,
        default: false,
        input: false,
      },
      role: {
        type: "string",
        required: true,
        default: "user",
        input: false, 
      }
    }
  },
  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
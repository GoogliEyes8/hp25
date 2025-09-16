"use server";
import { auth, User } from "@/lib/auth";
import { db } from "@/db/drizzle";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // console.log("Session in getUserSession:", session);

  if (!session) return null;

  const user = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.id, session.user.id),
  });

  return { session, user };
};

// ****************************** signInEmail ****************************

interface signInSchema {
  email: string;
  password: string;
}

export const signInEmail = async (data: signInSchema) => {
  const { email, password } = data;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    console.error("Sign-in error", error);
    throw new Error(
      "Failed to sign in. Please check your credentials and try again."
    );
  }
};


// ****************************** signUpEmail ****************************

interface signUpSchema {
  name: string;
  email: string;
  password: string;
}

export const signUpEmail = async (data: User) => {
  
  console.log('signUpEmail data :', data)
  // try {
  //   await auth.api.signUpEmail({
  //     body: {
  //       name,
  //       email,
  //       password,       
  //     },
  //   });
  //   return { success: true, message: "Sign-up successful" };
  // } catch (error) {
  //   console.error("Sign-up error", error);
  //   return { success: false, message: "Failed to sign up. Please try again." };
  // } 

  // redirect("/dashboard");
};

import { GalleryVerticalEnd } from "lucide-react"
import { getUserSession } from "@/server/user";
import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/auth/auth-register-form";

export default async function SignUpPage() {
  const app_name = process.env.APP_NAME || "CDMAN Inc.";

  // Check if user is already signed in
  const session = await getUserSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          {app_name}
        </a>
        <RegisterForm />
      </div>
    </div>
  )
}

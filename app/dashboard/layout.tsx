import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getUserSession } from "@/server/user";
import { redirect } from "next/navigation";


export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const response = await getUserSession();

  const session = response?.session.session;
  const user = response?.session.user;

  if (!session || !user) {
    redirect("/login");
  }
  return (
    <SidebarProvider>
      <AppSidebar user={user} variant="inset" />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
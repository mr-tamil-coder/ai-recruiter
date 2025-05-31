import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import UserInfo from "./dashboard/_components/UserInfo";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full">
        <UserInfo />

        {children}
        <Toaster />
      </main>
    </SidebarProvider>
  );
}

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import UserInfo from "./dashboard/_components/UserInfo";
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="w-full">
        <UserInfo />

        {children}
      </main>
    </SidebarProvider>
  );
}

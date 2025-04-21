"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  CalendarClock,
  Users,
  CreditCard,
  Settings,
  Plus,
} from "lucide-react";

import { SideBarOptions } from "@/app/_constant/constant";
import { usePathname } from "next/navigation";

// Map of icon names to components
const IconMap = {
  LayoutDashboard,
  CalendarClock,
  Users,
  CreditCard,
  Settings,
};
export function AppSidebar() {
    //TODO : add the ui when user click the sidebar its should show based ont eh router 
    const pathName = usePathname();
    console.log(pathName);
    
  return (
    <Sidebar>
      <SidebarHeader>
        <div>AI-RECRUITER</div>
        <div className="create-interview">
          <button className="flex items-center mx-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            <span className="mr-2">+</span>
            Create New Interview
          </button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {SideBarOptions.map((option) => {
            const IconComponent = IconMap[option.icon];
            return (
              <div key={option.id} className="px-4 py-1">
                <a
                  href={option.href}
                  className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {IconComponent && (
                    <IconComponent size={18} className="mr-3" />
                  )}
                  {option.name}
                </a>
              </div>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

"use client";
// Shadcnui
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
//Components
import { D_SidebarContent } from "@/components/dashboard";

export default function D_Sidebar() {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-white text-xl">Logo</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Footer */}
      <D_SidebarContent />
    </Sidebar>
  );
}

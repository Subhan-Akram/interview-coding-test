// Icons
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
// Shadcnui
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Workflows",
    url: "/",
    icon: Inbox,
  },
  {
    title: "Silicon Allocation",
    url: "/",
    icon: Calendar,
  },
  {
    title: "Compute Pools",
    url: "/",
    icon: Search,
  },
  {
    title: "Team Management",
    url: "/",
    icon: Settings,
  },
  {
    title: "Setting",
    url: "/",
    icon: Settings,
  },
];

export default function D_SidebarContent() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}

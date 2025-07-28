// Shadcnui
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Icons
import { Bell, ChevronDown, LogOut, Mail, Settings, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between gap-5 px-8 py-6">
        <div className="flex items-center gap-5 justify-between w-full">
          <h3 className="text-2xl font-medium">Compute Pools</h3>
          <div className="flex-1 flex items-center justify-end gap-5">
            <Button variant="link" size="lg" className="!px-0">
              <Bell />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/104450999?v=4" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <span>Zain Aijaz</span>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User />
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings />
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail /> Email
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOut />
                  Logout
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

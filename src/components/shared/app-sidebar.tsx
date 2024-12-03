"use client";
import React from "react";
import Link from "next/link";
import { Coins, Home, Layers2, ShieldCheck } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

// Menu items.
const routes = [
  {
    title: "Home",
    href: "",
    icon: Home,
  },
  {
    title: "Workflows",
    href: "workflows",
    icon: Layers2,
  },
  {
    title: "Credentials",
    href: "credentials",
    icon: ShieldCheck,
  },
  {
    title: "Billing",
    href: "billing",
    icon: Coins,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <Sidebar className="bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <SidebarHeader className="flex items-center justify-center p-4 border-b-[1px] border-separate">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {routes.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === item.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

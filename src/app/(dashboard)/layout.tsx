import React from "react";
import AppSidebar from "@/components/shared/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import HeaderBreadcrumbs from "@/components/shared/header-breadcrumbs";
import ThemeSwitch from "@/components/shared/theme-switch";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
          <header className="flex w-full items-center justify-between px-6 py-4 h-[50px]">
            <HeaderBreadcrumbs />
            <ThemeSwitch />
          </header>
          <Separator />
          <div className="overflow-auto">
            <div className="flex-1 container py-4 text-accent-foreground">
              {children}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

const HeaderBreadcrumbs = () => {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName.split("/");

  return (
    <div className="flex items-center justify-start">
      <SidebarTrigger className="inline md:hidden" />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, i) => (
            <React.Fragment key={`path-${i}`}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={path} className="capitalize">
                    {path === "" ? "home" : path.split("-").join(" ")}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {paths.length - 1 != i && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default HeaderBreadcrumbs;

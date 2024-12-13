import Logo from "@/components/shared/logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const AppProviders = ({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default AppProviders;

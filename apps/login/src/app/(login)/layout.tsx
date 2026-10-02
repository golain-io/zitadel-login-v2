import "@/styles/globals.scss";

import { LanguageProvider } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Skeleton } from "@/components/skeleton";
import { Theme } from "@/components/theme";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: "Golain — Sign in",
  description: "Sign in to Golain",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider>
          <main className="flex min-h-screen items-center justify-center bg-background-light-600 px-4 py-8 dark:bg-background-dark-600">
            <div className="w-full max-w-[440px]">
              <Suspense
                fallback={
                  <Skeleton>
                    <div className="h-40" />
                  </Skeleton>
                }
              >
                <LanguageProvider>
                  {children}
                  <div className="flex flex-row items-center justify-end space-x-4 pt-4">
                    <LanguageSwitcher />
                    <Theme />
                  </div>
                </LanguageProvider>
              </Suspense>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

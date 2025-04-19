
import { ReactNode, useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};
const THEME_KEY = "theme";

export function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col dark:bg-slate-950 dark:text-slate-50">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

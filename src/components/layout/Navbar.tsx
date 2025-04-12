
import { Bell, HelpCircle, Menu, MessageSquare, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "next-themes";
interface NavbarProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuItems = [
    { name: "Home", path: "/" },
    { name: "Neighborhood Feed", path: "/feed" },
    { name: "Legislation", path: "/legislation" },
    { name: "Community Opinion", path: "/opinion" },
    { name: "Sign In", path: "/signin" },
    { name: "Register", path: "/register" },
  ];

  const { theme, setTheme } = props;
    const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <nav className="grid gap-6 text-lg font-medium">
                {mobileMenuItems.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className="flex w-full items-center py-3 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-full bg-primary p-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6 text-white"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <span className="hidden font-bold sm:inline-block">
              LocalLink
            </span>
          </Link>
        </div>

        <nav className="hidden gap-6 md:flex">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            to="/feed" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Neighborhood Feed
          </Link>
          <Link 
            to="/legislation" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Legislation
          </Link>
          <Link 
            to="/opinion" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Community Opinion
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            title="Notifications"
            className="hidden md:flex"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            title="Messages"
            className="hidden md:flex"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            title="Help"
            className="hidden md:flex"
          >
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title="Toggle Theme"
            className="hidden md:flex"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            <span className="sr-only">Toggle Theme</span>
          </Button>

          <div className="hidden md:block">
            <Link to="/signin">
              <Button variant="ghost" className="mr-2">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <User className="h-5 w-5" />
            <span className="sr-only">User menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

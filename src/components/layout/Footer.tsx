
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-2">
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
            <span className="font-bold">LocalLink</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2">
            Empowering citizens to engage with local government.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Platform</h3>
            <Link to="/feed" className="text-sm text-muted-foreground hover:text-foreground">
              Neighborhood Feed
            </Link>
            <Link to="/legislation" className="text-sm text-muted-foreground hover:text-foreground">
              Legislation
            </Link>
            <Link to="/opinion" className="text-sm text-muted-foreground hover:text-foreground">
              Community Opinion
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-4 border-t">
        <p className="text-sm text-center text-muted-foreground">
          © 2025 LocalLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

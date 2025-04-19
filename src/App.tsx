import { useState } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Feed from "./pages/Feed";
import Legislation from "./pages/Legislation";
import Opinion from "./pages/Opinion";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ReportProblem from "./pages/ReportProblem";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Accessibility from "./pages/Accessibility";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const queryClient = new QueryClient();

const App = () => {
  const [isGovernment, setIsGovernment] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState("");

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleContentSubmit = () => {
    alert("Content Submitted: " + content);
    setContent("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            {isGovernment && isAuthenticated ? (
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Content Management</h2>
                <div className="mb-4">
                  <Label htmlFor="content">Content</Label>
                  <Input id="content" type="text" value={content} onChange={handleContentChange} />
                </div>
                <Button onClick={handleContentSubmit}>Submit Content</Button>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<Index setIsGovernment={setIsGovernment} />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/legislation" element={<Legislation />} />
                <Route path="/opinion" element={<Opinion />} />
                <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/report-problem" element={<ReportProblem />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/accessibility" element={<Accessibility />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

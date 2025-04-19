import { useState } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

import { Button } from "@/components/ui/button";
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";// Import from the correct package
import { InfoCircledIcon } from "@radix-ui/react-icons"; // Import from the correct package

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<
    "citizen" | "government" | null
  >(null);
  const [rememberRole, setRememberRole] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(true);

  const handleRoleSelect = (role: "citizen" | "government") => {
    setSelectedRole(role);

    if (rememberRole) {
      localStorage.setItem("selectedRole", role);
    }
    setShowRoleSelection(false);
  };

  const handleRememberChange = () => {
    setRememberRole(!rememberRole);
  };

  const handleSwitchRole = () => {
    localStorage.removeItem("selectedRole");
    setShowRoleSelection(true);
    setSelectedRole(null);
  };

  const storedRole = localStorage.getItem("selectedRole");
  if (storedRole && !selectedRole) {
    setSelectedRole(storedRole as "citizen" | "government" | null);
    setShowRoleSelection(false);
  }

  if (showRoleSelection) {
    return (
      
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-8">Welcome! Who are you?</h1>
          <div className="flex space-x-4">
            <Button
              onClick={() => handleRoleSelect("citizen")}
              className="px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Citizen
            </Button>
            <Button
              onClick={() => handleRoleSelect("government")}
              className="px-8 py-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Government Official
            </Button>
          </div>
          <label className="mt-4 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberRole}
              onChange={handleRememberChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span>Remember my selection</span>
          </label>
          <div className="mt-4">
            <Dialog>
              <DialogTrigger>
                <Button variant="ghost">
                  <InfoCircledIcon className="mr-2 h-4 w-4" /> Information
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Role Information</DialogTitle>
                  <DialogDescription>
                    <p className="mb-4">
                      <strong>Citizen:</strong> Access to upcoming local
                      government meetings, in-app messaging to elected
                      officials, public question submission, ranked-choice
                      opinion gathering, demographic representation indicators,
                      and "How Government Works" materials.
                    </p>
                    <p>
                      <strong>Government Official:</strong> Access to a
                      government administration portal with role-based access,
                      constituent communication dashboard, representative
                      comparison benchmarking, proposal review system, return on
                      investment calculations, and case study generation.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-4">
            <p>If you have already selected a role, </p>
            <Button onClick={handleSwitchRole} variant="outline">
              Switch Role
            </Button>
          </div>
        </div>
      
    );
  }

  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4">
          {selectedRole === "citizen" && <p className="text-lg">Welcome, Citizen!</p>}{selectedRole === "government" && <p className="text-lg">Welcome, Government Official!</p>}

        </div>
          <Button onClick={handleSwitchRole} variant="outline">Switch Role</Button>
          <HeroSection /><FeaturesSection /><StatsSection /><TestimonialsSection /><CtaSection />
      </div>
    
  );
};

export default Index;

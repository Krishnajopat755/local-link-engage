
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-civic-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join Your Community Today
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with neighbors, engage with local officials, and make your voice heard in the decisions that shape your community.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button onClick={() => navigate("/register")} size="lg" className="bg-primary">
              Get Started
            </Button>
            <Button onClick={() => navigate("/report-problem")} variant="outline" size="lg">
              Report a Problem
            </Button>
            <Button onClick={() => navigate("/feed")} variant="outline" size="lg">
              Explore the Platform
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

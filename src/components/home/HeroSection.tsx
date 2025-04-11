
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-civic-100 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Voice in Local Democracy
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with your local government, stay informed about neighborhood issues, and make your voice heard on decisions that affect your community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button onClick={() => navigate("/register")} size="lg" className="bg-primary">
                Get Started
              </Button>
              <Button onClick={() => navigate("/how-it-works")} variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -left-4 -top-4 h-72 w-72 bg-muted rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute left-20 top-20 h-72 w-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Local community meeting"
                  className="mx-auto w-full rounded-lg shadow-xl"
                  width="400"
                  height="300"
                  style={{
                    objectFit: "cover",
                    aspectRatio: "4/3",
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">256 neighbors active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
